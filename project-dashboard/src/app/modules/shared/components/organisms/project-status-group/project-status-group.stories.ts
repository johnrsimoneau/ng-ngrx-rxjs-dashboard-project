import { SharedModule } from '@modules/shared/shared.module';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { ProjectStatusGroupComponent } from './project-status-group.component';

export default {
  title: 'Organisms/ProjectStatusGroup',
  component: ProjectStatusGroupComponent,
  decorators: [
    moduleMetadata({
      imports: [SharedModule],
    }),
  ],
} as Meta;

const Template: Story<ProjectStatusGroupComponent> = (
  args: ProjectStatusGroupComponent
) => ({
  props: args,
});

export const ProjectStatusGroup = Template.bind({});
ProjectStatusGroup.args = {
  projects: [
    {
      id: 'fced7283-56cc-4d7f-9762-ff9ddf2e870f',
      projectCodeName: 'INFRASTRUCTURES',
      overallStatus: 'Y',
      startDate: '2021-12-29T14:29:37.582Z',
      modifiedDate: '2022-05-08T19:38:17.755Z',
      percentageComplete: '67',
      projectedEndDate: '2023-01-10T12:24:59.688Z',
      companyId: '95f9bd58-cf71-4dbf-a8eb-abe8e2019b7a',
    },
    {
      id: '0a8cddb4-43f9-44a9-b486-cef4273b4b25',
      projectCodeName: 'MAROON',
      overallStatus: 'Y',
      startDate: '2022-03-09T02:32:15.078Z',
      modifiedDate: '2022-05-08T11:40:49.748Z',
      percentageComplete: '99',
      projectedEndDate: '2022-06-26T00:44:11.932Z',
      companyId: '80b18c54-cd6b-4241-b326-f9ae597bc7a9',
    },
    {
      id: '27363531-882f-48ba-b488-55914b9970b1',
      projectCodeName: 'LICENSED',
      overallStatus: 'R',
      startDate: '2020-08-11T13:56:55.906Z',
      modifiedDate: '2022-05-08T16:03:54.428Z',
      percentageComplete: '66',
      projectedEndDate: '2022-07-25T12:04:08.667Z',
      companyId: 'c78b2876-f378-4a80-b259-5234339f5e8c',
    },
    {
      id: '71d4ffd2-035a-4faa-ad8f-a9db6cdb95a4',
      projectCodeName: 'QUANTIFYING',
      overallStatus: 'R',
      startDate: '2021-04-21T23:32:14.658Z',
      modifiedDate: '2022-05-08T10:23:04.093Z',
      percentageComplete: '67',
      projectedEndDate: '2022-11-22T21:43:41.954Z',
      companyId: '2d926f28-958e-43b6-8d29-e8582f176e8f',
    },
    {
      id: '3c5ef017-c41e-440e-acb3-2d65dc7903d0',
      projectCodeName: 'JSON',
      overallStatus: 'R',
      startDate: '2021-04-11T06:28:45.183Z',
      modifiedDate: '2022-05-08T00:15:03.991Z',
      percentageComplete: '86',
      projectedEndDate: '2023-02-23T03:30:41.668Z',
      companyId: 'c78b2876-f378-4a80-b259-5234339f5e8c',
    },
    {
      id: '1ba98143-2921-42ca-836f-4c7fa47a7925',
      projectCodeName: 'REINTERMEDIATE',
      overallStatus: 'G',
      startDate: '2022-01-25T12:42:01.996Z',
      modifiedDate: '2022-05-08T10:29:53.482Z',
      percentageComplete: '88',
      projectedEndDate: '2023-03-25T17:53:18.159Z',
      companyId: 'ee5a616d-9623-40ba-aabf-7b17d6d2a394',
    },
  ],
};
