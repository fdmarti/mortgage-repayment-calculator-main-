<template>
  <button
    class="bg-lime flex items-center justify-center p-3 rounded-3xl w-[300px] mt-5 gap-2 font-bold hover:opacity-70"
  >
    <span><CalculatorIcon /></span>{{ text }}
  </button>
</template>

<script setup lang="ts">
import { CalculatorIcon } from './Icons'

interface Props {
  text: string
}

defineProps<Props>()
</script>
