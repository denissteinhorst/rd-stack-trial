<template>
  <ul class="my-5">
  <TodoItem
        v-for="todo in props.todos"
        :key="todo"
        :id="todo.id"
        :title="todo.title"
        :completed="todo.completed"
    />
  </ul>
</template>

<script lang="ts" setup>
import { type ITodoItem } from "~/components/TodoItem/TodoItem.vue";

const props = defineProps<{
  todos: ITodoItem[];
}>();
</script>