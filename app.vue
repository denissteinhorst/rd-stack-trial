<template>
  <div class="h-full min-h-svh bg-slate-200 py-10 text-slate-700 antialiased">
    <div class="mx-auto max-w-lg rounded-xl bg-white p-8 shadow shadow-slate-300">
      <div class="flex flex-row items-center justify-between">
        <div>
          <h1 class="text-3xl font-medium">{{ $t('name') }}</h1>
        </div>
        <div class="text-xs">
          <button
            v-if="locale === 'de'"
            class="h-8 select-none rounded bg-gray-200 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-gray-700 transition-all hover:bg-gray-300 hover:shadow-lg focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85]"
            @click="setLocale('en')"
          >
            EN
          </button>
          <button
            v-else
            class="h-8 select-none rounded bg-gray-200 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-gray-700 transition-all hover:bg-gray-300 hover:shadow-lg focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85]"
            @click="setLocale('de')"
          >
            DE
          </button>
        </div>
      </div>
      <p class="pt-3 text-slate-500">{{ $t('intro') }} 🎉</p>
      <div class="mt-8">
        <TodoInput />
      </div>
      <div  class="mt-8">
        <template v-if="items">
          <TodoList :todos="items" :show="5" />
        </template>
      </div>
    </div>
    <div v-if="response" class="mt-5 opacity-75 mx-auto max-w-lg rounded-xl bg-black text-white font-mono p-8 shadow shadow-slate-300">
      <pre class="text-wrap">{{ response }}</pre>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useTodoApi } from "~/composables/useTodoApi";
import { useApiResponseStore } from '~/stores/apiResponseStore';
import { useTodoStore } from "~/stores/todoStore";

const { getTodos } = useTodoApi();
const { items } = useTodoStore();
const apiResponse = useApiResponseStore()
const { locale, setLocale } = useI18n()
const response = ref()

watch(apiResponse, () => response.value = apiResponse)
onMounted( async () => await getTodos());
</script>

