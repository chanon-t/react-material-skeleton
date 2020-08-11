import { createStore, Store } from 'redux';
import rootReducer from './modules/rootReducer';

const store: Store = createStore(
    rootReducer
);
export default store;