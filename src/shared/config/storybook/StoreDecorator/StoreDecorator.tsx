import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import 'app/styles/index.scss';

export const StoreDecorator = (state: DeepPartial<StateSchema>) => (Story: any) => (
    <StoreProvider initialState={state}>
        <Story />
    </StoreProvider>
);
