<template>
  <div class="antialiased bg-slate-200 text-slate-700 h-full min-h-svh py-10">
    <div class="max-w-lg mx-auto bg-white p-8 rounded-xl shadow shadow-slate-300">
    <div class="flex flex-row justify-between items-center">
      <div>
        <h1 class="text-3xl font-medium">{{ $t('name') }}</h1>
      </div>
      <div class="text-xs">
        <button v-if="locale === 'de'" class="select-none rounded bg-gray-200 h-8 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-gray-700 transition-all hover:shadow-lg hover:bg-gray-300 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85]"
                @click="setLocale('en')">EN</button>
        <button v-else class="select-none rounded bg-gray-200 h-8 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-gray-700 transition-all hover:shadow-lg hover:bg-gray-300 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85]"
                @click="setLocale('de')">DE</button>
      </div>
    </div>
    <p class="text-slate-500 pt-3">{{ $t('intro') }} 🎉</p>
      <div class="mt-8">
        <TodoInput />
      </div>
      <div class="mt-8">
        <TodoList :todos />
      </div>
    </div>
    <p class="text-xs text-slate-500 pt-8 text-center">{{ $t('lastupdate') }} {{ lastUpdated }}</p>
  </div>
</template>
<script setup lang="ts">
import type { ITodoItem } from "./components/TodoItem/TodoItem.vue";

const { locale, setLocale } = useI18n()
const lastUpdated = ref(0);

const todos = ref<ITodoItem[]>([
  { id: 1, title: "Never gonna give you up", completed: true },
  { id: 2, title: "Never gonna let you down", completed: false },
  { id: 3, title: " Never gonna run around and desert you", completed: false },
]);
</script>