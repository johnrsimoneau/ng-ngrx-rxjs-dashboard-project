import { Story, Meta } from '@storybook/angular/types-6-0';
import { ButtonComponent } from './button.component';

export default {
  title: 'Atoms/Button',
  component: ButtonComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<ButtonComponent> = (args: ButtonComponent) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  type: 'Primary',
  label: 'Button Label'
}