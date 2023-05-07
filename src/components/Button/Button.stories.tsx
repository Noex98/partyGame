import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Button',
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const SingleButton: Story = {
  args: {
    text: "Click me!",
    color: "neutral",
    variation: "primary"
  },
};

export const AllButtons: Story = {
  render: () => (
    <div style={{display:"flex", gap:12,}}>
      <Button text='Click me!' color='positive' variation='primary'/>
      <Button text='Click me!' color='negative' variation='primary'/>
      <Button text='Click me!' color='neutral' variation='primary'/>
      <Button text='Click me!' color='positive' variation='secondary'/>
      <Button text='Click me!' color='negative' variation='secondary'/>
      <Button text='Click me!' color='neutral' variation='secondary'/>
    </div>
  )
}