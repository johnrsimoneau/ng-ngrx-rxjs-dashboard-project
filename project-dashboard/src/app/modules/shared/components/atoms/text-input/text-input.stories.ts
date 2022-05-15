import { Story, Meta, moduleMetadata  } from '@storybook/angular';
import { TextInputComponent } from './text-input.component';
import { SharedModule } from '../../../shared.module';

export default {
  title: 'Atoms/Input',
  component: TextInputComponent,
  decorators: [
    moduleMetadata({
      imports: [SharedModule]
    })
  ],
  argTypes: {
    inputId: {
      control: { type: 'text' }
    },
    placeholder: {
      control: { type: 'text' }
    },
    inputType: {
      options: ['date', 'email', 'number', 'tel','text','url'],
      control: { type: 'select' }
    },
    size: {
      options: ['xs', 's', 'm', 'l', 'xl'],
      control: { type: 'select' }
    },
    handleBlurOutputEvent: { action: 'blur '},
    handleFocusOutputEvent: { action: 'focus '},
    handleKeyupOutputEvent: { action: 'keyup '},
  }
} as Meta;

const Template: Story<TextInputComponent> = (args: TextInputComponent) => ({
  props: args,
});

export const TextInput = Template.bind({});
TextInput.args = {
  inputId: '123',
  placeholder: 'Input Text',
  inputType: 'text',
  size: 'm',
  isRequired: true,
}
