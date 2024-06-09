<template>
  <h1 class="text-3xl font-bold underline">
    Hello world!
  </h1>
  <p>There are {{ data?.ships?.length || 0 }} ships.</p>
</template>

<script lang="ts" setup>
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
</script>