import { Story, Meta, moduleMetadata } from '@storybook/angular';
import { SharedModule } from '../../../shared.module';
import { GridComponent } from './grid.component';

export default {
  title: 'Atoms/Grid',
  component: GridComponent,
  decorators: [
    moduleMetadata({
      imports: [SharedModule],
    }),
  ],
  argTypes: {
    // columnDef: {
    //   control: { type: 'text' },
    // },
    // placeholder: {
    //   control: { type: 'text' },
    // },
    // size: {
    //   options: ['xs', 's', 'm', 'l', 'xl'],
    //   control: { type: 'select' },
    // },
    // handleChangeOutputEvent: { action: 'change ' },
  },
} as Meta;

const Template: Story<GridComponent> = (args: GridComponent) => ({
  props: args,
});

export const Grid = Template.bind({});
Grid.args = {
  columnDefs: [{ field: 'make' }, { field: 'model' }, { field: 'price' }],
  data: [
    { make: 'Porsche', model: 'Boxter', price: 72000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
  ],
  height: 's',
  // size: 'm',
  // isRequired: true,
  // placeholder: 'Choose one...',
  // accessibilityLabelName: 'Select Fruit',
  // selectedValue: { value: 'banana', display: 'Banana' },
  // options: [
  //   {
  //     value: 'apple',
  //     display: 'Apple',
  //   },
  //   {
  //     value: 'banana',
  //     display: 'Banana',
  //   },
  //   {
  //     value: 'grape',
  //     display: 'Grape',
  //   },
  // ],
};
