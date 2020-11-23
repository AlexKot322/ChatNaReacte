import React from 'react';
import { Provider } from 'react-redux'
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Join from './components/Join/Join';
import Chat from './components/Chat/Chat';
import store from './store'





const App = () => (
    <Provider store={store}>
    <Router>
        <Route path="/" exact component={Join} />
        <Route path="/chat" component={Chat} />
    </Router>
    </Provider>
)

export default App;