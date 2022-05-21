import { Story, Meta, moduleMetadata } from '@storybook/angular';
import { SharedModule } from '../../../shared.module';
import { DropdownInputComponent } from './dropdown-input.component';

export default {
  title: 'Atoms/Input',
  component: DropdownInputComponent,
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
    size: {
      options: ['xs', 's', 'm', 'l', 'xl'],
      control: { type: 'select' },
    },
    handleChangeOutputEvent: { action: 'change ' },
  },
} as Meta;

const Template: Story<DropdownInputComponent> = (
  args: DropdownInputComponent
) => ({
  props: args,
});

export const DropdownInput = Template.bind({});
DropdownInput.args = {
  inputId: '123',
  size: 'm',
  isRequired: true,
  placeholder: 'Choose one...',
  accessibilityLabelName: 'Select Fruit',
  selectedValue: { value: 'banana', display: 'Banana' },
  options: [
    {
      value: 'apple',
      display: 'Apple',
    },
    {
      value: 'banana',
      display: 'Banana',
    },
    {
      value: 'grape',
      display: 'Grape',
    },
  ],
};
