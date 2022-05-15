
import { Story, Meta, moduleMetadata  } from '@storybook/angular';
import { ButtonComponent } from './button.component';
import { SharedModule } from '../../../shared.module';

export default {
  title: 'Atoms/Button',
  component: ButtonComponent,
  decorators: [
    moduleMetadata({
      imports: [SharedModule]
    })
  ],
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

export const PrimaryWithIcon = Template.bind({});
PrimaryWithIcon.args = {
  iconName: 'faCoffee'
}

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Secondary',
  type: 'secondary',
};
