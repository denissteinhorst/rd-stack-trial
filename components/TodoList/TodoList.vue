<template>
  <ul class="my-5">
    <TodoItem
        v-for="(todo, index) in props.todos"
        :key="index"
        :id="todo.id"
        :title="todo.title"
        :completed="todo.completed"
    />
  </ul>
</template>

<script lang="ts" setup>
import type { ITodo } from "~/types/type";

const props = defineProps<{
  todos: ITodo[]
}>()
</script>
