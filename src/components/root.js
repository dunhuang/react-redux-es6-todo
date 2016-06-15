import React, { PropTypes, Component } from 'react';
import Tasks from './tasks/tasks';
import { Route, Router } from 'react-router';
import { Provider } from 'react-redux';

export default class Root extends Component {
  static propTypes = {
    history: PropTypes.object.isRequired,  
    store: PropTypes.object.isRequired
  };
  constructor(props) {
    super(props);
  }
  render (){
    let {store, history} = this.props;
    return (
      <Provider store={store}>
        <Router history={history}>
          <Route component={Tasks} path="/" />
        </Router>
      </Provider>
    );
  }
}

