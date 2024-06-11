import { useApiResponseStore } from '~/stores/apiResponseStore'
import { useTodoStore } from '~/stores/todoStore'
import type { ITodo, IData, IUseTodoApiReturn } from '@/types/type'

/**
 * This composable is used to manage the todo-items using the GraphQL API.
 * @returns {Object} getTodos, createTodo, updateTodo, deleteTodo
 */
export const useTodoApi = (): IUseTodoApiReturn => {
  const { setNewApiResponse } = useApiResponseStore()
  const { todoStore } = useTodoStore()

  // Base GraphQL queries from the api-docs
  const QUERIES = {
    CREATE: gql`
      mutation addTodo($input: CreateTodoInput!) {
        createTodo(input: $input) {
          id
          title
          completed
        }
      }`,
    READ: gql`
      query {
        user(id: 1) {
          todos(options: { slice: { start: 3, end: 6 } }) {
            data {
              id,
              title,
              completed
            }
          }
        }
      }`,
    UPDATE: gql`
      mutation updateTodo($id: ID!, $input: UpdateTodoInput!) {
        updateTodo(id: $id, input: $input) {
          id
          title
          completed
        }
      }`,
    DELETE: gql`
      mutation deleteTodo($id: ID!) {
        deleteTodo(id: $id)
      }`,
  }

  /**
   * Function to create a new todo.
   * @async
   * @param {ITodo} newTodo - The todo to be created.
   */
  const createTodo = async (newTodo: ITodo) => {
    const { mutate: addTodoMutation } = useMutation(QUERIES.CREATE, {
      update: (cache, { data }) => {
        if (data?.createTodo) {
          todoStore.addItem({
            __typename: 'Todo',
            id: newTodo.id,
            title: data.createTodo.title,
            completed: data.createTodo.completed,
          })
          setNewApiResponse('Todo CREATED successfully', data)
        }
      },
    })

    await addTodoMutation({ input: { title: newTodo.title, completed: newTodo.completed } })
  }

  /**
   * Function to fetch todos.
   * @async
   */
  const getTodos = async () => {
    const { data } = await useAsyncQuery<IData>(QUERIES.READ)
    const todos = data.value?.user?.todos?.data
    todos?.forEach((todo) => {
      todoStore.addItem(todo)
    })
  }

  /**
   * Function to update an existing todo.
   * @async
   * @param {ITodo} updatedTodo - The todo to be updated.
   */
  const updateTodo = async (updatedTodo: ITodo) => {
    const { mutate: updateTodoMutation } = useMutation(QUERIES.UPDATE, {
      update: (cache, { data }) => {
        if (data?.updateTodo) {
          todoStore.updateItem(data.updateTodo)
          setNewApiResponse('Todo UPDATED successfully', data)
          cache.modify({
            id: cache.identify(data.updateTodo),
            fields: {
              title: () => data.updateTodo.title,
              completed: () => data.updateTodo.completed,
            },
          })
        }
      },
    })

    await updateTodoMutation({ id: updatedTodo.id, input: { title: updatedTodo.title, completed: updatedTodo.completed } })
  }

  /**
   * Function to delete a todo.
   * @async
   * @param {ITodo} id - The todo to be deleted.
   */
  const deleteTodo = async (id: string) => {
    const { mutate: deleteTodoMutation } = useMutation(QUERIES.DELETE, {
      update: (cache, { data }) => {
        if (data?.deleteTodo) {
          todoStore.deleteItem(id)
          setNewApiResponse('Todo DELETED successfully', data)
        }
      },
    })

    await deleteTodoMutation({ id: id })
  }

  return {
    getTodos,
    createTodo,
    updateTodo,
    deleteTodo,
  }
}