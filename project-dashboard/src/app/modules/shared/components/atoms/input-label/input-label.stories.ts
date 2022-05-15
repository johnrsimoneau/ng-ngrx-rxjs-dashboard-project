import { Story, Meta, moduleMetadata  } from '@storybook/angular';
import { InputLabelComponent } from './input-label.component';
import { SharedModule } from '../../../shared.module';

export default {
  title: 'Atoms/InputLabel',
  component: InputLabelComponent,
  decorators: [
    moduleMetadata({
      imports: [SharedModule]
    })
  ],
  argTypes: {
    labelId: {
      control: { type: 'text' }
    },
    laeblName: {
      control: { type: 'text' }
    },
    size: {
      options: ['xs', 's', 'm', 'l', 'xl'],
      control: { type: 'select' }
    },
    
  }
} as Meta;

const Template: Story<InputLabelComponent> = (args: InputLabelComponent) => ({
  props: args,
});

export const InputLabel = Template.bind({});
InputLabel.args = {
  labelId: '123',
  labelName: 'Test Label',
  size: 'm',
  isRequired: true,
}
