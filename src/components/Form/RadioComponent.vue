<template>
  <div class="flex items-center ps-4 border border-gray-200 hover:border-lime rounded">
    <input
      :id="id"
      type="radio"
      :value="value"
      :name="name"
      @input="handleInputChange"
      class="w-5 h-5 bg-gray-100 focus:ring-transparent focus:ring-2 accent-lime"
    />
    <label :for="id" class="w-full hover:cursor-pointer py-4 ms-2 text-sm text-Slate900 font-bold">
      {{ label }}
    </label>
  </div>
</template>

<script setup lang="ts">
interface Props {
  id: string
  value: string
  name: string
  label: string
}

defineProps<Props>()

const emits = defineEmits(['handleChangeValue'])

const handleInputChange = (e: Event) => {
  const valueInput = (e.target as HTMLInputElement).value
  emits('handleChangeValue', { valueInput, id: 'type' })
}
</script>
