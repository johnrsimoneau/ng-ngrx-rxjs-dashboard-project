import { Story, Meta, moduleMetadata } from '@storybook/angular';
import { TextareaInputComponent } from './textarea-input.component';
import { SharedModule } from '../../../shared.module';

export default {
  title: 'Atoms/Input',
  component: TextareaInputComponent,
  decorators: [
    moduleMetadata({
      imports: [SharedModule],
    }),
  ],
  argTypes: {
    inputId: {
      control: { type: 'text' },
    },
    placeholder: {
      control: { type: 'text' },
    },
    inputType: {
      options: ['date', 'email', 'number', 'tel', 'text', 'url'],
      control: { type: 'select' },
    },
    size: {
      options: ['xs', 's', 'm', 'l', 'xl'],
      control: { type: 'select' },
    },
    handleBlurOutputEvent: { action: 'blur ' },
    handleFocusOutputEvent: { action: 'focus ' },
    handleKeyupOutputEvent: { action: 'keyup ' },
  },
} as Meta;

const Template: Story<TextareaInputComponent> = (
  args: TextareaInputComponent
) => ({
  props: args,
});

export const TextareaInput = Template.bind({});
TextareaInput.args = {
  inputId: '756',
  placeholder: 'Input Text',
  size: 'm',
  isRequired: true,
};
