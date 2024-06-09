<template>
  <h1 class="text-3xl font-bold underline">
    <p>{{ $t('welcome') }}</p>
  </h1>
  <p>There are {{ data?.ships?.length || 0 }} ships.</p>
  <p>Counter: {{ store.count }}</p>
  <button @click="setLocale('de')">Sprache: DE</button><br />
  <button @click="setLocale('en')">Language: EN</button>
</template>

<script lang="ts" setup>
import { useCounterStore } from '@/stores/counter'

// Apollo
const query = gql`
  query getShips($limit: Int!) {
    ships(limit: $limit) {
      id
      name
    }
  }
`
const variables = { limit: 5 }
const { data } = await useAsyncQuery(query, variables)

// Pinia
const store = useCounterStore()

const increaseCountEveryNMs = (ms: number): void => {
  setInterval(() => {
    store.increment()
    console.log('Counter:', store.count)
  }, ms)
}

// I18n
const { locale, setLocale } = useI18n()

onMounted(() => {
  increaseCountEveryNMs(1000)
})
</script>