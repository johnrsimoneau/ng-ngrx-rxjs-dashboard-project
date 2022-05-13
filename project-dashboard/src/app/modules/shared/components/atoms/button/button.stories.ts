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
      // table:  { defaultValue: { summary: 'primary'} },
      options: ['primary', 'primary-outline', 'secondary', 'secondary-outline'],
      control: { type: 'select'}
    },
    size: {
      // table:  { defaultValue: { summary: 'm'} },
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
  label: 'Primary Button',
  type: 'primary'
}

export const Secondary: Story = () => ({
  props: {
    label: 'Secondary Button',
    type: 'secondary',
  }
});