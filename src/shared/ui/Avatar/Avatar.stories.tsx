import { ComponentStory, ComponentMeta } from '@storybook/react';
import 'app/styles/index.scss';
import { Avatar } from './Avatar';
import avatarImg from '../../assets/icons/user-32-32.png';

export default {
    title: 'shared/Avatar',
    component: Avatar,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        to: '/',
    },
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => (
    <Avatar {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
    size: 150,
    src: avatarImg,
    alt: 'Avatar image',
};

export const Small = Template.bind({});
Small.args = {
    size: 50,
    src: avatarImg,
    alt: 'Avatar image',
};
