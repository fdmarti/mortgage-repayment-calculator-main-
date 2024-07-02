<template>
  <section class="bg-white py-7 px-10 rounded-l-2xl basis-1/2">
    <div class="flex justify-between items-center">
      <h1 class="font-bold text-Slate900 text-[19px]">Mortage Calculator</h1>
      <button
        class="text-Slate700 text-sm border-b-[1px] border-Slate500 hover:cursor-pointer hover:text-Slate900"
        @click="handleReset"
      >
        Clear All
      </button>
    </div>

    <form class="flex flex-col gap-2" @submit.prevent="handleSubmit">
      <InputComponent
        :value="formData.mortage"
        id="mortage"
        label="Mortage Amount"
        placeholder="£0"
        icon="£"
        @handleChangeValue="handleChangeValue"
        :show-errors="formErrors.mortage"
      />

      <div class="flex gap-3">
        <InputComponent
          :value="formData.term"
          id="term"
          label="Mortage Term"
          placeholder="0"
          icon="years"
          @handleChangeValue="handleChangeValue"
          icon-position="right"
          :show-errors="formErrors.term"
        />
        <InputComponent
          :value="formData.interest"
          id="interest"
          label="Interest Rate"
          placeholder="0"
          icon="%"
          @handleChangeValue="handleChangeValue"
          icon-position="right"
          :show-errors="formErrors.interest"
        />
      </div>

      <div class="flex flex-col gap-3 mt-3">
        <h3 class="font-medium text-Slate500">Mortage Type</h3>

        <RadioComponent
          id="repayment"
          value="1"
          name="type"
          v-model="formData.type"
          label="Repayment"
          @handleChangeValue="handleChangeValue"
        />
        <RadioComponent
          id="interestOnly"
          value="2"
          name="type"
          v-model="formData.type"
          label="Interest Only"
          @handleChangeValue="handleChangeValue"
        />

        <ErrorSpan v-if="formErrors.type" />
      </div>

      <ButtonComponent text="Calculate Repayments" />
    </form>
  </section>
</template>

<script setup lang="ts">
import { InputComponent, RadioComponent } from './Form'
import { ButtonComponent, ErrorSpan } from './'
import { useMortageForm } from '@/composables/useMortageForm'

const { formData, formErrors, handleChangeValue, handleResetForm, handleSubmitForm } =
  useMortageForm()

const emits = defineEmits(['showResult', 'clear'])

const handleSubmit = async () => {
  const result = await handleSubmitForm()
  const { status } = result
  if (!status) return

  emits('showResult', result)
}

const handleReset = () => {
  handleResetForm()

  emits('clear')
}
</script>
