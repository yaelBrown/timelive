const setTimezone = (h) => {
  TIMEZONES.forEach(tz => {
    if (tz.value == h) {
      state.tzHour = tz.value
      state.tzText = tz.text
    }
  })
  return state
}

const state = {
  tzHour: null,
  tzVal: 0,
  tzText: "Earth"
}

const curTime_el = document.getElementById("curTime")
const curDate_el = document.getElementById("curDate")
const curTZ_el = document.getElementById("curTZ")

setTimezone(0)

setInterval(() => {
  const TIME = moment()
    .subtract(moment().parseZone().utcOffset(), 'minutes')
    .add(state.tzHour, 'hour')
  curDate_el.innerText = TIME.format('LL')
  curTime_el.innerText = TIME.format('hh:mm:ss A')
  curTZ_el.innerText = state.tzText
}, 1000)

