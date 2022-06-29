import { ComponentMeta, ComponentStory } from '@storybook/react';

import Header from './Header';

export default {
  title: 'Navigation/Header',
  component: Header,
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;
Template.args = {};

export const Example = Template.bind({});
Example.args = {};
