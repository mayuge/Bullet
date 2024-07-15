import { ref, computed, onMounted, onUnmounted } from 'vue'
import { defineStore } from 'pinia'

// 数字を漢数字に変換する関数
const convertToKanji = (num) => {
  const kanjiDigits = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九']
  return num.toString().split('').map(digit => kanjiDigits[digit]).join('')
}

export const useStore = defineStore('store', () => {
  const now = new Date()
  const hour = ref(now.getHours())
  const min = ref(now.getMinutes())
  const second = ref(now.getSeconds())

  const formattedTime = computed(() => {
    const pad = (n) => (n < 10 ? '0' + n : n)
    return `${pad(hour.value)}:${pad(min.value)}:${pad(second.value)}`
  })

  const kanjiTime = computed(() => {
    const paddedHour = hour.value < 10 ? '0' + hour.value : hour.value
    const paddedMin = min.value < 10 ? '0' + min.value : min.value
    return `${convertToKanji(paddedHour)}${convertToKanji(paddedMin)}`
  })

  const secondAngle = computed(() => second.value * 6)
  const minuteAngle = computed(() => min.value * 6 + second.value * 0.1)
  const hourAngle = computed(() => (hour.value % 12) * 30 + min.value * 0.5)

  const updateTime = () => {
    const newNow = new Date()
    hour.value = newNow.getHours()
    min.value = newNow.getMinutes()
    second.value = newNow.getSeconds()
  }

  let intervalId = null
  onMounted(() => {
    intervalId = setInterval(updateTime, 1000)
  })

  onUnmounted(() => {
    clearInterval(intervalId)
  })

  return {
    hour,
    min,
    second,
    formattedTime,
    kanjiTime,
    secondAngle,
    minuteAngle,
    hourAngle,
    updateTime
  }
})
