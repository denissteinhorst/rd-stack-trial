import type { ITodo } from '@/types/type';

/**
 * @description
 * This store is used to manage the todo items
 * @returns {Object} todoStore (addItem, updateItem, deleteItem)
 * @returns {Array} items
 */
export const useTodoStore = defineStore('todoItem', () => {
  const items: Ref<ITodo[]> = ref([]);

  const addItem = (todoItem?: ITodo) => {
    if (todoItem && !items.value.find((item) => item.title === todoItem.title)) {
      items.value.unshift(todoItem);
    }
  };

  const updateItem = (todoItem: ITodo) => {
    const index = items.value.findIndex((item) => item.id === todoItem.id);
    if (index !== -1) {
      items.value[index] = todoItem;
    }
  };

  const deleteItem = (id: string) => {
    const index = items.value.findIndex((item) => item.id === id);
    if (index !== -1) {
      items.value.splice(index, 1);
    }
  };

  return { todoStore: { addItem, updateItem, deleteItem }, items };
});