
import { Story, Meta,  } from '@storybook/angular';
import { ButtonComponent } from './button.component';

export default {
  title: 'Atoms/Button',
  component: ButtonComponent,
  argTypes: {
    label: {
      control: { type: 'text' }
    },
    type: {
      options: ['primary', 'secondary'],
      control: { type: 'select'}
    },
    size: {
      options: ['xs', 's', 'm', 'l', 'xl'],
      control: { type: 'select'}
    },
    clickEvent: { action: 'clicked '}
  },
} as Meta;

const Template: Story<ButtonComponent> = (args: ButtonComponent) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  label: 'Primary',
  type: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Secondary',
  type: 'secondary',
};
