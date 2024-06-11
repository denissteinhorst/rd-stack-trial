// @vitest-environment nuxt
import { describe, it, expect, beforeEach, afterEach } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import { flushPromises } from "@vue/test-utils";
import type { ITodo } from '~/types/type';

import Component from './TodoList.vue'

const testProps: { todos: ITodo[] } ={
    todos: [
      {
        id: '1',
        title: 'Lorem ipsum',
        completed: false,
      },
      {
        id: '2',
        title: 'Dolor sit amet',
        completed: true,
      }
    ]
}

describe('TodoList', () => {
  let wrapper: any

  beforeEach(async () => {
    wrapper = await mountSuspended(Component, {
      props: testProps
    })
  })

  afterEach(async () => {
    await wrapper.vm.$nextTick()
    await flushPromises()
    wrapper.unmount()
  })

  it('can get mounted', async () => {
    expect(wrapper).toBeTruthy()
    console.log(wrapper.html())
  })

  it('renders all todos', async () => {
    const todos = wrapper.findAll('li')
    expect(todos.length).toBe(testProps.todos.length)
  })
})