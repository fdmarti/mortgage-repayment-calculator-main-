<template>
  <section
    class="basis-1/2 p-10 bg-Slate900 flex flex-col md:rounded-bl-[90px] md:rounded-r-2xl gap-3 z-10"
  >
    <h1 class="font-bold text-white text-2xl">Your results</h1>
    <p class="max-w-md text-Slate500 font-semibold mt-2">
      Your results are shown below based on the information you provided. To adjust the results,
      edit the form and click “calculate repayments” again.
    </p>

    <div
      class="bg-SlateDark relative p-5 rounded-t rounded-b-md before:content-[''] before:w-full before:h-2 before:bg-lime before:absolute before:-top-1 before:left-0 before:rounded-full before:-z-10 mt-5"
    >
      <section class="flex flex-col gap-4 mb-6 pb-5 border-b-[1px] border-Slate700">
        <p class="max-w-md text-Slate500 font-semibold mt-2">Your monthly repayments</p>
        <span class="text-lime font-bold text-[50px]">£{{ totalPerMont }}</span>
      </section>
      <section class="flex flex-col gap-3">
        <p class="max-w-md text-Slate500 font-semibold mt-2">Total you'll repay over the term</p>
        <span class="text-white font-semibold text-3xl">£{{ total }}</span>
      </section>
    </div>
  </section>
</template>

<script setup lang="ts">
interface Props {
  totalPerMont: number
  total: number
}

withDefaults(defineProps<Props>(), {
  total: 500000,
  totalPerMont: 15000
})
</script>
