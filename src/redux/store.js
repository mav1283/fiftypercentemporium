import { createStore } from 'redux';
import reducers from './reducers';
import { loadStateFromLocalStorage, saveStateToLocalStorage} from '../redux/localstorage';

const store = createStore(
    /* reducers */
    reducers, 
    /* state */
    loadStateFromLocalStorage(),
    // {},
    /* redux devtools extension */
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

/* Add this line if you want to store the state in localstorage */
store.subscribe(() => saveStateToLocalStorage(store.getState()));

export default store;
