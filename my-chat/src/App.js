import React from 'react';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import {BrowserRouter as Router, Route} from 'react-router-dom';
import reducers from './reducers/reducers'
import Join from './components/Join/Join';
import Chat from './components/Chat/Chat';


const store = createStore(
	reducers
)
const App = () => (
    <Provider store={store}>
    <Router>
        <Route path="/" exact component={Join} />
        <Route path="/chat" component={Chat} />
    </Router>
    </Provider>
)

export default App;