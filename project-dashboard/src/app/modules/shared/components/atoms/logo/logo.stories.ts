import { Story, Meta, moduleMetadata  } from '@storybook/angular';
import { SharedModule } from '../../../shared.module';
import { LogoComponent } from './logo.component';

export default {
  title: 'Atoms/Logo',
  component: LogoComponent,
  decorators: [
    moduleMetadata({
      imports: [SharedModule]
    })
  ]
} as Meta;

const Template: Story<LogoComponent> = (args: LogoComponent) => ({
  props: args,
});

export const Logo = Template.bind({});
// Icon.args = {
//   iconName: 'circle-exclamation',
//   size: '2x',
//   color: 'primary'
// };
