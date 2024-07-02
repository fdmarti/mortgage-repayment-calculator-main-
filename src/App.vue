<template>
  <div class="flex md:flex-row flex-col relative max-w-5xl bg-white rounded-l-2xl">
    <MortageCalculator @showResult="handleShowResults" @clear="handleClearForm" />
    <YourResults
      v-if="showResult"
      :totalPerMont="totalResult.pagoMensual"
      :total="totalResult.pagoTotal"
    />
    <ResultsShownHere v-else />
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { MortageCalculator, ResultsShownHere, YourResults } from './components'
import type { CalcResponse } from './interface/FromMortage'

const showResult = ref(false)
const totalResult = reactive({
  pagoMensual: 0,
  pagoTotal: 0
})

const handleShowResults = (status: CalcResponse) => {
  showResult.value = !showResult.value

  const { pagoMensual, pagoTotal } = status
  totalResult.pagoMensual = pagoMensual
  totalResult.pagoTotal = pagoTotal
}

const handleClearForm = () => {
  showResult.value = false
  totalResult.pagoTotal = 0
  totalResult.pagoMensual = 0
}
</script>
