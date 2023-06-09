import { ComponentStory, ComponentMeta } from '@storybook/react';
import 'app/styles/index.scss';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { LoginModal } from './LoginModal';

export default {
    title: 'features/LoginModal',
    component: LoginModal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof LoginModal>;

const Template: ComponentStory<typeof LoginModal> = (args) => <LoginModal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    isOpen: true,
};
Primary.decorators = [StoreDecorator({
    loginForm: { username: '123', password: 'admin' },
})];

export const WithError = Template.bind({});
WithError.args = {
    isOpen: true,
};
WithError.decorators = [StoreDecorator({
    loginForm: { username: '123', password: 'admin', error: 'error' },
})];

export const isLoading = Template.bind({});
isLoading.args = {
    isOpen: true,
};
isLoading.decorators = [StoreDecorator({
    loginForm: { username: '123', password: 'admin', isLoading: true },
})];
