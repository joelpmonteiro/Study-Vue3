<template>
  <table class="table">
    <thead>
      <tr>
        <td>Código</td>
        <td>Nome</td>
        <td>Máximo</td>
        <td>Mínimo</td>
        <td>Variação</td>
        <td></td>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(quote, index) in quotes" :key="index">
        <td>
          {{ index }}
        </td>
        <td>{{ quote.name }}</td>
        <td>{{ quote.high }}</td>
        <td>{{ quote.low }}</td>
        <td>
          <span :class="{ 'label-error': quote.pctChange < 0, 'label-success': quote.pctChange > 0 }"
            class="label label-rounded text-small">
            {{ quote.pctChange }} %
          </span>
        </td>
        <td>
          <a v-if="!listenQuotes.includes(index)" href="#" data-tooltip="Seguir" @click="$emit('listen', index)"
            class="btn btn-primary btn-sm tooltip tooltip-left">
            <i class="icon icon-plus"></i>
          </a>
          <a v-else href="#" data-tooltip="Remover" @click="$emit('unlisten', index)"
            class="btn btn-error btn-sm tooltip tooltip-left">
            <i class="icon icon-minus"></i>
          </a>
        </td>
      </tr>
    </tbody>
  </table>
</template>
<script>
export default {
  props: {
    listenQuotes: {
      type: Array, required: true
    },
    quotes: {
      type: Object, required: true
    }
  },
  emits: ['listen', 'unlisten']

};
</script>

<style scoped>
</style>
