import { Story, Meta } from '@storybook/angular/types-6-0';
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
    hasOutline: {
      options: [true, false],
      control: { type: 'radio' }
    },
    size: {
      options: ['xs', 's', 'm', 'l', 'xl'],
      control: { type: 'select'}
    }
  },
} as Meta;

const Template: Story<ButtonComponent> = (args: ButtonComponent) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  label: 'Primary',
  type: 'primary',
  hasOutline: false
};

export const PrimaryOutline = Template.bind({});
PrimaryOutline.args = {
  label: 'Primary Outline',
  type: 'primary',
  hasOutline: true
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Secondary',
  type: 'secondary',
  hasOutline: false
};
