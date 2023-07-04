import { ComponentStory, ComponentMeta } from '@storybook/react';
import 'app/styles/index.scss';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Text, TextTheme } from './Text';

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

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    title: 'Text lorem ipsum',
    text: 'description story look at this',
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const onlyTitleDark = Template.bind({});
onlyTitleDark.args = {
    title: 'Text lorem ipsum',
};
onlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const onlyTextDark = Template.bind({});
onlyTextDark.args = {
    text: 'description story look at this',
};
onlyTextDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Error = Template.bind({});
Error.args = {
    text: 'description story look at this',
    theme: TextTheme.ERROR,
};
