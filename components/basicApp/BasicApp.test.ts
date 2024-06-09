// @vitest-environment nuxt
import { shallowMount } from '@vue/test-utils';
import { describe, expect, test } from 'vitest';
import Component from './BasicApp.vue';

describe('BasicApp (Unit)', () => {
    test('renders correctly', () => {
        const wrapper = shallowMount(Component);
        expect(wrapper.html()).toMatchSnapshot();
    });
});