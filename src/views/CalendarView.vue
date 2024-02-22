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
import { ref, reactive, onMounted } from 'vue'

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
        name: 'Per',
        eventColor: 'green'
      },
      {
        id: 2,
        name: 'Anna',
        eventColor: 'blue'
      },
      {
        id: 3,
        name: 'Röda dagar',
        eventColor: 'red'
      },
      {
        id: 4,
        name: 'Namnsdagar',
        eventColor: 'black'
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

    onMounted(() => {
      calendar.value.instance.value.project = project.value.instance.value
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
