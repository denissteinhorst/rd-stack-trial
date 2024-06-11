// @vitest-environment nuxt
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import { flushPromises } from "@vue/test-utils";
import type { ITodo } from '~/types/type';

import Component from './TodoItem.vue'

const testProps: ITodo = {
  id: '1',
  title: 'Lorem ipsum',
  completed: false,
}

const updateTodoMock = vi.fn(() => Promise.resolve())
const deleteTodoMock = vi.fn(() => Promise.resolve())

vi.mock('~/composables/useTodoApi', () => ({
  useTodoApi: () => ({
    updateTodo: updateTodoMock,
    deleteTodo: deleteTodoMock,
  }),
}));

describe('TodoItem', () => {
  let wrapper: any

  beforeEach(async () => {
    wrapper = await mountSuspended(Component, {props: testProps})
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

  it('has correct title', async () => {
    expect(wrapper.text()).toContain(testProps.title)
  })

  it('can be toggled', async () => {
    const checkbox = wrapper.find('input[type="checkbox"]')
    await checkbox.setChecked()
    await flushPromises()

    // actually "checks" the checkbox
    expect(checkbox.element.checked).toBeTruthy()

    // expect updateTodo to be called
    expect(updateTodoMock).toHaveBeenCalled()
  })

  it('can be deleted', async () => {
    const trashcanIcon = wrapper.find('svg')
    await trashcanIcon.trigger('click')
    await flushPromises()

    // expect deleteTodo to be called
    expect(deleteTodoMock).toHaveBeenCalled()
  })
})