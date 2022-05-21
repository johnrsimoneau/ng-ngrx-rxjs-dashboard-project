import { RouterTestingModule } from '@angular/router/testing';
import { Story, Meta, moduleMetadata } from '@storybook/angular';
import { SharedModule } from '../../../shared.module';
import { LinkComponent } from './link.component';

export default {
  title: 'Atoms/Link',
  component: LinkComponent,
  decorators: [
    moduleMetadata({
      imports: [SharedModule, RouterTestingModule],
    }),
  ],
  argTypes: {
    linkTo: {
      control: { type: 'text' },
    },
    linkText: {
      control: { type: 'text' },
    },
  },
} as Meta;

const Template: Story<LinkComponent> = (args: LinkComponent) => ({
  props: args,
});

export const Link = Template.bind({});
Link.args = {
  linkTo: 'https://www.bing.com/#',
  linkText: 'Bing',
  openInNewTab: true,
};
