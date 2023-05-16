import type { Meta, StoryObj } from '@storybook/react';

import { AddPlayerBtn } from './AddPlayerBtn';

const meta: Meta<typeof AddPlayerBtn> = {
  title: 'AddPlayerBtn',
  component: AddPlayerBtn,
};

export default meta;
type Story = StoryObj<typeof AddPlayerBtn>;

export const Primary: Story = {
  args: {
  },
};