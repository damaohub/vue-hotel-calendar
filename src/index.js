import Calendar from './components/calendar.vue'

function install (Vue) {
  if (install.installed) return
  install.installed = true
  Vue.component('calendar', Calendar)
}

const VueCalendar = {
  install: install,
  Calendar
}

if (typeof window !== undefined && window.Vue) {
  window.Vue.use(VueCalendar)
}

export default VueCalendar