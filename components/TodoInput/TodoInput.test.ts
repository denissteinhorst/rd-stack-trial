// @vitest-environment nuxt
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import { flushPromises } from "@vue/test-utils";

import Component from './TodoInput.vue'

const createTodoMock = vi.fn(() => Promise.resolve())

vi.mock('~/composables/useTodoApi', () => ({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  useTodoApi: () => ({
    createTodo: createTodoMock,
  }),
}));

describe('TodoInput', () => {
  let wrapper: any

  beforeEach(async () => {
    wrapper = await mountSuspended(Component)
  })

  afterEach(async () => {
    await wrapper.vm.$nextTick()
    await flushPromises()
    wrapper.unmount()
  })

  it('can get mounted', async () => {
    expect(wrapper).toBeTruthy()
  })

  it('cant be submitted as long as input is empty', async () => {
    const button = wrapper.find('button')
    const input = wrapper.find('input')

    // (input is empty)
    expect(button.element.disabled).toBeTruthy()

    await input.setValue('Lorem ipsum')

    // input is not empty)
    expect(button.element.disabled).toBeFalsy()
  })

  it('calls createTodo on submission', async () => {
    const input = wrapper.find('input')
    await input.setValue('Lorem ipsum')
    await wrapper.find('button').trigger('click')
    expect(createTodoMock).toHaveBeenCalled()
  })

  it('empties input after submission', async () => {
    const input = wrapper.find('input')
    await input.setValue('Lorem ipsum')
    await wrapper.find('button').trigger('click')
    expect(input.element.value).toBe('')
  })
})