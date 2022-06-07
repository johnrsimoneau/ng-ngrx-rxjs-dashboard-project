import { SharedModule } from '@modules/shared/shared.module';
import { Story, Meta, moduleMetadata } from '@storybook/angular';
import { ProjectStatusComponent } from './project-status.component';

export default {
  title: 'Molecules/ProjectStatus',
  component: ProjectStatusComponent,
  decorators: [
    moduleMetadata({
      imports: [SharedModule],
    }),
  ],
  argTypes: {
    // label: {
    //   control: { type: 'text' },
    // },
    // type: {
    //   options: ['primary', 'secondary'],
    //   control: { type: 'select' },
    // },
    status: {
      options: ['none', 'G', 'Y', 'R'],
      control: { type: 'select' },
    },
    // handleButtonClickEvent: { action: 'clicked ' },
  },
} as Meta;

const Template: Story<ProjectStatusComponent> = (
  args: ProjectStatusComponent
) => ({
  props: args,
});

export const ProjectStatus = Template.bind({});
ProjectStatus.args = {
  status: 'none',
  projectCount: 107,
};
