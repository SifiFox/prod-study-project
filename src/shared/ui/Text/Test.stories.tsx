import { ComponentStory, ComponentMeta } from '@storybook/react';
import 'app/styles/index.scss';
import { Text } from './Text';

export default {
    title: 'shared/Text',
    component: Text,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    title: 'Text lorem ipsum',
    text: 'description story look at this',
};

export const onlyTitle = Template.bind({});
onlyTitle.args = {
    title: 'Text lorem ipsum',
};

export const onlyText = Template.bind({});
onlyText.args = {
    text: 'description story look at this',
};
