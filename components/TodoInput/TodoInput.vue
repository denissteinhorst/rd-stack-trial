<template>
  <div class="flex items-center justify-center">
    <div class="relative flex h-10 w-full">
      <label
        class="absolute right-1 top-1 z-10 select-none rounded bg-blue-500 px-4 py-2 text-center align-middle font-sans text-xs font-bold uppercase text-white transition-all hover:bg-blue-600 hover:shadow-lg focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85]"
        @click.prevent="saveTodo"
      >
        {{ $t('saveEntry') }}
      </label>
      <div class="relative flex-1">
        <input
          v-model="todoInputField"
          class="border-blue-gray-200 text-blue-gray-700 placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 disabled:bg-blue-gray-50 peer relative h-full w-full rounded-[7px] border bg-transparent px-3 py-2.5 pr-20 font-sans text-sm font-normal outline outline-0 transition-all placeholder-shown:border focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:outline-0 disabled:border-0"
          type="text"
          placeholder=" "
          required
        />
        <label
          class="before:content[' '] after:content[' '] text-blue-gray-400 before:border-blue-gray-200 after:border-blue-gray-200 peer-placeholder-shown:text-blue-gray-500 peer-disabled:peer-placeholder-shown:text-blue-gray-500 pointer-events-none absolute -top-1.5 left-0 flex h-full w-full select-none text-[11px] font-normal leading-tight transition-all before:pointer-events-none before:mr-1 before:mt-[6.5px] before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-l before:border-t before:transition-all after:pointer-events-none after:ml-1 after:mt-[6.5px] after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-r after:border-t after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-500 peer-focus:before:border-l-2 peer-focus:before:border-t-2 peer-focus:before:!border-blue-500 peer-focus:after:border-r-2 peer-focus:after:border-t-2 peer-focus:after:!border-blue-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent"
        >
          {{ $t('placeholder') }}
        </label>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useTodoApi } from "~/composables/useTodoApi";
import { useTodoStore } from "~/stores/todoStore";

const { createTodo } = await useTodoApi()
const { items } = useTodoStore()
const todoInputField = ref<string>()

const clearInput = () => todoInputField.value = ''

const saveTodo = () => {
  if (todoInputField.value === '') return

  createTodo({
    id: String(items.length + 1),
    title: todoInputField.value,
    completed: false
  })

  clearInput()
}
</script>
