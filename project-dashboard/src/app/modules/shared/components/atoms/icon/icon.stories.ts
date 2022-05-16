import { Story, Meta, moduleMetadata  } from '@storybook/angular';
import { IconComponent } from './icon.component';
import { SharedModule } from '../../../shared.module';

export default {
  title: 'Atoms/Icon',
  component: IconComponent,
  decorators: [
    moduleMetadata({
      imports: [SharedModule]
    })
  ],
  argTypes: {
    iconName: {
      options: ['folder', 'circle-check', 'circle-exclamation'],
      control: { type: 'select' }
    },
    size: {
      options: ['1x', '2x', '3x', '4x'],
      control: { type: 'select'}
    },
    color: {
      options: ['white', 'primary', 'secondary'],
      control: { type: 'select'}
    }
  },
} as Meta;

const Template: Story<IconComponent> = (args: IconComponent) => ({
  props: args,
});

export const Icon = Template.bind({});
Icon.args = {
  iconName: 'circle-exclamation',
  size: '2x',
  color: 'primary'
};
