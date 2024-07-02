<template>
  <section class="flex flex-col gap-3 mt-5">
    <label :for="id" class="font-medium text-Slate500">{{ label }}</label>
    <div class="relative">
      <span
        :class="`absolute font-bold p-3 pr-4 rounded-l-sm ${checkIconPosition} ${checkErrorLabel}`"
        >{{ icon }}</span
      >
      <input
        type="number"
        :placeholder="placeholder"
        :id="id"
        :class="`w-full border-[2px] rounded p-3 pl-14 text-Slate900 font-bold focus:border-Slate700 outline-none ${checkIconPositionForInput} ${checkErrorInput}`"
        step=".01"
        :value="value"
        @input="handleInputChange"
      />
    </div>
    <ErrorSpan v-if="showErrors" />
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { ErrorSpan } from '../'

interface Props {
  value: number | null
  placeholder: string
  id: string
  label: string
  icon: string
  showErrors: boolean
  iconPosition?: 'right' | 'left'
}

const props = withDefaults(defineProps<Props>(), {
  iconPosition: 'left'
})
const emits = defineEmits(['handleChangeValue'])

const handleInputChange = (e: Event) => {
  const valueInput = (e.target as HTMLInputElement).value
  emits('handleChangeValue', { valueInput, id: props.id })
}

const checkIconPosition = computed(() => {
  return props.iconPosition === 'left' ? 'left-0 mt-[2px] ml-[2px]' : 'right-0 mt-[2px] mr-[2px]'
})

const checkIconPositionForInput = computed(() => {
  return props.iconPosition === 'left' ? 'pl-14' : 'pl-3'
})

const checkErrorLabel = computed(() => {
  return props.showErrors ? 'bg-red text-white' : 'bg-Slate100 text-Slate700'
})

const checkErrorInput = computed(() => {
  return props.showErrors ? 'border-red' : 'border-Slate500'
})
</script>
