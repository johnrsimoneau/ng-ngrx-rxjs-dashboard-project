import { Story, Meta, moduleMetadata } from '@storybook/angular';
import { SharedModule } from '../../../shared.module';
import { LogoComponent } from './logo.component';

export default {
  title: 'Atoms/Logo',
  component: LogoComponent,
  decorators: [
    moduleMetadata({
      imports: [SharedModule],
    }),
  ],
  argTypes: {
    color: {
      options: ['white', 'black'],
      control: { type: 'select' },
    },
    size: {
      options: ['small', 'large'],
      control: { type: 'select' },
    },
  },
} as Meta;

const Template: Story<LogoComponent> = (args: LogoComponent) => ({
  props: args,
});

export const Logo = Template.bind({});
Logo.args = {
  color: 'black',
  size: 'large',
};
