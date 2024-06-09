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
      <div class="mt-8">
        <TodoList :todos />
      </div>
    </div>
    <p class="pt-8 text-center text-xs text-slate-500">{{ $t('lastEdit') }} {{ lastUpdated }}</p>
  </div>
</template>
<script setup lang="ts">
import type { ITodoItem } from './components/TodoItem/TodoItem.vue'

const { locale, setLocale } = useI18n()
const lastUpdated = ref(0)

const todos = ref<ITodoItem[]>([
  { id: 1, title: 'Never gonna give you up', completed: true },
  { id: 2, title: 'Never gonna let you down', completed: false },
  { id: 3, title: ' Never gonna run around and desert you', completed: false },
])
</script>
