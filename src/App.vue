<template>
  <div class="container grid-lg my-2 py-2">
    <div class="card mb-2" v-if="listenQuotes.length > 0">
      <div class="card-header">
        <div class="h4">Acompanhamento</div>
      </div>
      <div class="card-body">
        <WatchListQuotes :listenQuotes="listenQuotes" @unlisten="onUnlisten" />
      </div>
    </div>
    <div class="card">
      <div class="card-header">
        <div class="h4">
          Todas as moedas
        </div>
      </div>
      <div class="card-body">
        <ListQuotes @listen="onListen" @unlisten="onUnlisten" :quotes="quotes" :listenQuotes="listenQuotes" />
      </div>
    </div>
  </div>
</template>

<script>
//composition api
import { all } from "@/services/index.js";
import { onMounted, reactive, ref, toRefs } from "vue";
import ListQuotes from "@/components/ListQuotes.vue";
import WatchListQuotes from "@/components/WatchListQuotes.vue";
export default {
  components: { ListQuotes, WatchListQuotes },
  setup() {
    const data = reactive({
      quotes: {},
      listenQuotes: []
    });

    onMounted(async () => {
      const response = await all();
      data.quotes = response.data;
    });

    function onListen(code) {
      data.listenQuotes.push(code)
    }
    function onUnlisten(code) {
      console.log('teste', code)
      data.listenQuotes = data.listenQuotes.filter(key => key !== code)
    }
    return { ...toRefs(data), onUnlisten, onListen };
  }
};
</script>

<style>
</style>
