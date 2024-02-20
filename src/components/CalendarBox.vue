<template>
  <Qalendar :events="events" :config="config" />
</template>

<script>
import { Qalendar } from 'qalendar'

export default {
  components: {
    Qalendar
  },

  data() {
    return {
      events: [
        {
          title: 'Möte Sprint 1',
          with: 'Team 4',
          time: { start: '2024-02-20 11:15', end: '2024-02-20 12:00' },
          colorScheme: 'meetings',
          isEditable: true,
          id: 'de471c78cb5c',
          description: 'Vi ska gå igenom Sprint 1 planering med Richard.'
        }
      ],
      config: {
        week: {
          // Takes the value 'sunday' or 'monday'
          // However, if startsOn is set to 'sunday' and nDays to 5, the week displayed will be Monday - Friday
          startsOn: 'monday',
          // Takes the values 5 or 7.
          nDays: 7,
          // Scroll to a certain hour on mounting a week. Takes any value from 0 to 23.
          // This option is not compatible with the 'dayBoundaries'-option, and will simply be ignored if custom day boundaries are set.
          scrollToHour: 5
        },
        month: {
          // Hide leading and trailing dates in the month view (defaults to true when not set)
          showTrailingAndLeadingDates: false
        },
        // Takes any valid locale that the browser understands. However, not all locales have been thorougly tested in Qalendar
        // If no locale is set, the preferred browser locale will be used
        locale: 'sv-SE',
        style: {
          // When adding a custom font, please also set the fallback(s) yourself
          fontFamily: 'Nunito, sans-serif',
          colorSchemes: {
            meetings: {
              color: '#fff',
              backgroundColor: '#131313'
            },
            chill: {
              color: '#fff',
              backgroundColor: '#ff4081'
            }
          }
        },
        // if not set, the mode defaults to 'week'. The three available options are 'month', 'week' and 'day'
        // Please note, that only day and month modes are available for the calendar in mobile-sized wrappers (~700px wide or less, depending on your root font-size)
        defaultMode: 'week',
        // The silent flag can be added, to disable the development warnings. This will also bring a slight performance boost
        isSilent: true,
        showCurrentTime: true // Display a line indicating the current time
      }
    }
  }
}
</script>

<style>
@import 'qalendar/dist/style.css';
</style>
