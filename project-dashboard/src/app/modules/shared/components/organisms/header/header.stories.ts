import { APP_BASE_HREF } from '@angular/common';
import { RouterTestingModule } from '@angular/router/testing';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { SharedModule } from '../../../shared.module';
import { HeaderComponent } from './header.component';

export default {
  title: 'Organisms/Header',
  component: HeaderComponent,
  decorators: [
    moduleMetadata({
      imports: [SharedModule, RouterTestingModule],
    }),
  ],
  argTypes: {
    headerTitle: {
      control: { type: 'text' },
    },
    handleLogoClickEvent: { action: 'clicked' },
    handleLinkClickEvent: { action: 'clicked' },
  },
} as Meta;

const Template: Story<HeaderComponent> = (args: HeaderComponent) => ({
  props: args,
});

export const Header = Template.bind({});
Header.args = {
  headerTitle: 'WELCOME',
  // navLinks: [],
  navLinks: [
    {
      to: '/',
      text: 'LINK ONE',
    },
    {
      to: '/',
      text: 'LINK TWO',
    },
    {
      to: '/',
      text: 'LINK THREE',
    },
  ],
};
