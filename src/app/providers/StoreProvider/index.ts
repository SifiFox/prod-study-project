import { AppDispatch, createReduxStore } from './config/store';
import { StoreProvider } from './ui/StoreProvider';
import type { StateSchema, ThunkExtraArg, ThunkConfig } from './config/StateSchema';

export {
    StoreProvider,
    createReduxStore,
    StateSchema,
    AppDispatch,
    ThunkExtraArg,
    ThunkConfig,
};
