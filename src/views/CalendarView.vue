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
        name: 'Morgonmöte',
        startDate: '2024-03-01T09:00:00',
        endDate: '2024-03-01T09:30:00',
        resourceId: 1
      },
      {
        id: 2,
        name: 'Workshop om Digital Transformation',
        startDate: '2024-03-03T14:00:00',
        endDate: '2024-03-03T16:00:00',
        resourceId: 1
      },
      {
        id: 3,
        name: 'Kreativ brainstorming session',
        startDate: '2024-03-05T11:00:00',
        endDate: '2024-03-05T12:30:00',
        resourceId: 1
      },
      {
        id: 4,
        name: 'Kundbesök för affärsförhandlingar',
        startDate: '2024-03-08T13:00:00',
        endDate: '2024-03-08T15:00:00',
        resourceId: 1
      },
      {
        id: 5,
        name: 'Utvecklingsmöte med teknikteamet',
        startDate: '2024-03-10T10:30:00',
        endDate: '2024-03-10T12:00:00',
        resourceId: 1
      },
      {
        id: 6,
        name: 'Lunchmöte med ledningen',
        startDate: '2024-03-12T12:00:00',
        endDate: '2024-03-12T13:00:00',
        resourceId: 1
      },
      {
        id: 7,
        name: 'Daglig stand-up för teamet',
        startDate: '2024-03-15T09:30:00',
        endDate: '2024-03-15T09:45:00',
        resourceId: 1
      },
      {
        id: 8,
        name: 'Marknadsföringsstrategisession',
        startDate: '2024-03-17T15:00:00',
        endDate: '2024-03-17T17:00:00',
        resourceId: 1
      },
      {
        id: 9,
        name: 'Projektgenomgång med intressenter',
        startDate: '2024-03-20T11:00:00',
        endDate: '2024-03-20T12:30:00',
        resourceId: 1
      },
      {
        id: 10,
        name: 'Team Building Aktivitet - Golf',
        startDate: '2024-03-24T14:00:00',
        endDate: '2024-03-24T18:00:00',
        resourceId: 1
      },
      {
        id: 11,
        name: 'Produktutbildning för försäljningsavdelningen',
        startDate: '2024-03-26T09:00:00',
        endDate: '2024-03-26T11:00:00',
        resourceId: 1
      },
      {
        id: 12,
        name: 'Team Review Session',
        startDate: '2024-03-29T16:00:00',
        endDate: '2024-03-29T17:30:00',
        resourceId: 1
      },
      {
        id: 13,
        name: 'IT System Uppdatering',
        startDate: '2024-03-02T13:00:00',
        endDate: '2024-03-02T17:00:00',
        resourceId: 2
      },
      {
        id: 14,
        name: 'Kundsupportträning',
        startDate: '2024-03-06T10:00:00',
        endDate: '2024-03-06T12:00:00',
        resourceId: 2
      },
      {
        id: 15,
        name: 'Löneutbetalning',
        startDate: '2024-03-10T16:00:00',
        endDate: '2024-03-10T17:00:00',
        resourceId: 2
      },
      {
        id: 16,
        name: 'Strategisk planeringssession',
        startDate: '2024-03-14T14:00:00',
        endDate: '2024-03-14T16:00:00',
        resourceId: 2
      },
      {
        id: 17,
        name: 'Evaluering av försäljningskampanj',
        startDate: '2024-03-18T11:30:00',
        endDate: '2024-03-18T12:30:00',
        resourceId: 2
      },
      {
        id: 18,
        name: 'Byggningssäkerhetskontroll',
        startDate: '2024-03-22T09:30:00',
        endDate: '2024-03-22T11:30:00',
        resourceId: 2
      },
      {
        id: 19,
        name: 'Samarbetsövning med andra avdelningar',
        startDate: '2024-03-25T13:00:00',
        endDate: '2024-03-25T15:00:00',
        resourceId: 2
      },
      {
        id: 20,
        name: 'Budgetplanering för nästa kvartal',
        startDate: '2024-03-28T10:00:00',
        endDate: '2024-03-28T12:00:00',
        resourceId: 2
      },
      {
        id: 21,
        name: 'Möte',
        startDate: '2024-03-14T11:10:00',
        endDate: '2024-03-14T11:25:00',
        resourceId: 1
      },
      {
        id: 22,
        name: 'Presentation av Ny Produkt',
        startDate: '2024-03-15T15:00:00',
        endDate: '2024-03-15T16:00:00',
        resourceId: 1
      },
      {
        id: 23,
        name: 'Kundmöte',
        startDate: '2024-03-18T10:00:00',
        endDate: '2024-03-18T11:00:00',
        resourceId: 1
      },
      {
        id: 24,
        name: 'Avstämning med HR',
        startDate: '2024-03-20T13:30:00',
        endDate: '2024-03-20T14:30:00',
        resourceId: 1
      },
      {
        id: 25,
        name: 'Deadline rapport',
        startDate: '2024-03-25T00:00:00',
        endDate: '2024-03-25T23:59:59',
        resourceId: 2
      },
      {
        id: 26,
        name: 'Årsstämma',
        startDate: '2024-03-27T09:00:00',
        endDate: '2024-03-27T18:00:00',
        resourceId: 2
      },
      {
        id: 27,
        name: 'Lunchrast',
        startDate: '2024-03-11T11:45:00',
        endDate: '2024-03-11T12:45:00',
        resourceId: 6
      },
      {
        id: 28,
        name: 'Fikapaus',
        startDate: '2024-03-13T15:15:00',
        endDate: '2024-03-13T15:45:00',
        resourceId: 6
      },
      {
        id: 29,
        name: 'Team Building Aktivitet',
        startDate: '2024-03-22T18:00:00',
        endDate: '2024-03-22T21:00:00',
        resourceId: 8
      },
      {
        id: 30,
        name: 'Utbildning',
        startDate: '2024-03-29T08:00:00',
        endDate: '2024-03-29T17:00:00',
        resourceId: 8
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
