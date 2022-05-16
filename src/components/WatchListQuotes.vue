<template>
  <ListQuotes :quotes="quotes" :listenQuotes="listenQuotes" @unlisten="methods.onUnlisten" />
  <div class="mt-2 text-right">
    <cite class="tex-small">
      Atualizará novamente em <b>{{ nextUpdateTime }} segundos</b>
    </cite>
  </div>
</template>

<script setup>
import { onMounted, reactive, ref, defineEmits, watch, onUnmounted } from "vue";
import ListQuotes from "./ListQuotes.vue";
import { listen } from "@/services/index.js";
const CURRENT_TIME = 30
// components: {
//   ListQuotes;
// }
//props
const props = defineProps({
  listenQuotes: {
    type: Array,
    required: true
  }
})
//
const interval = ref(null);
const quotes = ref({});
const nextUpdateTime = ref(CURRENT_TIME)
const emits = defineEmits(['unlisten'])
const methods = reactive({
  onUnlisten(code) {
    console.log('teste', code)
    emits('unlisten', code)
  },
  resetInterval() {
    clearInterval(interval.value);
    nextUpdateTime.value = CURRENT_TIME;
    interval.value = setInterval(() => {
      nextUpdateTime.value -= 1
      if (nextUpdateTime.value === 0) {
        nextUpdateTime.value = CURRENT_TIME; this.refresh();
      }
    }, 1000)
  },
  async refresh() {
    const { data } = await listen(props.listenQuotes);
    quotes.value = data;
  }
})

onMounted(() => {
  methods.refresh()
  methods.resetInterval()
})

onUnmounted(() => {
  clearInterval(interval.value)
})

watch(props, () => {
  methods.refresh()
  methods.resetInterval()
})
</script>


