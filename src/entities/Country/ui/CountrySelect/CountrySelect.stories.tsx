import { ComponentStory, ComponentMeta } from '@storybook/react';
import 'app/styles/index.scss';
import { CountrySelect } from './CountrySelect';

export default {
    title: 'entities/CountrySelect',
    component: CountrySelect,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        to: '/',
    },
} as ComponentMeta<typeof CountrySelect>;

const Template: ComponentStory<typeof CountrySelect> = (args) => <CountrySelect />;

export const Primary = Template.bind({});
Primary.args = {};
