import { SharedModule } from '@modules/shared/shared.module';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { LoaderComponent } from './loader.component';

export default {
  title: 'Atoms/Loader',
  component: LoaderComponent,
  decorators: [
    moduleMetadata({
      imports: [SharedModule],
    }),
  ],
  argTypes: {
    size: {
      options: ['xs', 's', 'm', 'l', 'xl'],
      control: { type: 'select' },
    },
  },
} as Meta;

const Template: Story<LoaderComponent> = (args: LoaderComponent) => ({
  props: args,
});

export const Loader = Template.bind({});
