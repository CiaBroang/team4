<template>
  <div id="calendar-container">
    <bryntum-calendar-project-model
      ref="project"
      v-bind="projectConfig"
      :resources="resources"
      :events="events"
    />
    <bryntum-calendar ref="calendar" v-bind="calendarConfig" />
  </div>
</template>

<script>
import { ref, reactive, onMounted, watch } from 'vue'

import { BryntumCalendarProjectModel, BryntumCalendar } from '@bryntum/calendar-vue-3'

import { useCalendarConfig, useProjectConfig } from '@/AppConfig'
import '@bryntum/calendar/locales/calendar.locale.SvSE.js'
import { LocaleManager, LocaleHelper } from '@bryntum/calendar/calendar.module.js'

LocaleManager.locale = LocaleHelper.locales.SvSE

export default {
  name: 'App',

  components: {
    BryntumCalendarProjectModel,
    BryntumCalendar
  },

  setup() {
    const calendar = ref(null)
    const project = ref(null)

    const calendarConfig = reactive(useCalendarConfig())
    const projectConfig = reactive(useProjectConfig())

    const resources = ref(null)
    const events = ref(null)

    resources.value = [
      {
        id: 1,
        name: 'Dagliga aktiviteter',
        eventColor: '#ADDC97'
      },
      {
        id: 2,
        name: 'Viktigt',
        eventColor: '#F9B98B'
      },
      {
        id: 3,
        name: 'Röda dagar',
        eventColor: 'red'
      },
      {
        id: 4,
        name: 'Namnsdagar',
        eventColor: 'gray'
      },
      {
        id: 5,
        name: 'Helgdagsafton',
        eventColor: 'pink'
      },
      {
        id: 6,
        name: 'Paus',
        eventColor: '#8BD1F9'
      },
      {
        id: 8,
        name: 'Övrigt',
        eventColor: '#F9E78B'
      }
    ]
    events.value = [
      {
        id: 1,
        name: 'Möte',
        startDate: '2024-02-21T11:00:00',
        endDate: '2024-02-21T12:00:00',
        resourceId: 1
      }
    ]

    // Hämtar data från url:en
    fetch('https://sholiday.faboul.se/dagar/v2.1/2024')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        return response.json()
      })
      .then((data) => {
        const newEvents = []
        data.dagar.forEach((dag) => {
          try {
            // Skapar ett event för varje röd dag som inte är en söndag
            if ((dag['röd dag'] === 'Ja' && dag['veckodag'] !== 'Söndag') || dag['helgdag']) {
              let dagDatum = new Date(dag.datum)
              dagDatum = dagDatum.toISOString().substring(0, 10)

              newEvents.push({
                id: parseInt(dag.datum.split('-').join('')), // unikt ID genom att ta bort "-" från datum
                name: dag.helgdag,
                startDate: dagDatum + 'T18:00:00',
                endDate: dagDatum + 'T20:00:00',
                resourceId: 3,
                allDay: true,
                readOnly: true
              })
            }

            // Skapar ett event för varje helgdagsafton
            if (dag.helgdagsafton) {
              let dagDatum = new Date(dag.datum)
              dagDatum = dagDatum.toISOString().substring(0, 10)
              newEvents.push({
                id: parseInt(dag.datum.split('-').join('')) + 10000, // unikt ID genom att ta bort "-" från datum och lägg till 10000 för att särskilja från helgdagar och namnsdagar
                name: dag.helgdagsafton,
                startDate: dagDatum + 'T18:00:00',
                endDate: dagDatum + 'T20:00:00',
                resourceId: 5,
                allDay: true,
                readOnly: true
              })
            }

            // Om det är namnsdagar
            if (dag.namnsdag.length > 0) {
              let namnsDagar = dag.namnsdag.join(', ')
              let dagDatum = new Date(dag.datum)
              dagDatum = dagDatum.toISOString().substring(0, 10)

              newEvents.push({
                id: parseInt(dag.datum.split('-').join('')) + 50000, // unikt ID genom att ta bort "-" från datum och lägg till 50000 för att särskilja från helgdagar
                name: namnsDagar,
                startDate: dagDatum + 'T18:00:00',
                endDate: dagDatum + 'T20:00:00',
                resourceId: 4,
                allDay: true,
                readOnly: true
              })
            }
          } catch (error) {
            console.error('Ett fel uppstod vid bearbetningen av datan: ', error)
          }
        })
        // Pusha nya event till events
        events.value = [...events.value, ...newEvents]
      })
      .catch((error) => {
        console.error('Det uppstod ett fel:', error)
      })

    onMounted(() => {
      calendar.value.instance.value.project = project.value.instance.value
    })

    // Lyssna på förändringar i events och uppdatera kalendern när det sker
    watch(events, (newVal) => {
      if (newVal) {
        calendar.value.instance.value.events = newVal
      }
    })

    return {
      project,
      calendar,
      projectConfig,
      calendarConfig,
      resources,
      events
    }
  }
}
</script>

<style lang="scss">
@import '../App.scss';
</style>
