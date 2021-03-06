import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from './store/reducers/index';
import theme from './assets/styles/theme';
import Home from './containers/Home';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

function App() {
    return (
        <Provider store={store}>
            <ThemeProvider theme={theme} >
                <CssBaseline />
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/" component={Home} />
                    </Switch>
                </BrowserRouter>
            </ThemeProvider>
        </Provider>
    );
}

export default App;
