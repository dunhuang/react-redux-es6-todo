import classNames from 'classnames';
import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router';


export class TaskFilters extends Component{
  static propTypes = {
    filter: PropTypes.string
  };

  constructor(props) {
    super(props);
  }
  render(){
    return (
      <footer id="footer" className="footer">
        <ul id="filters" className="filters">
          <li>
            <Link  className={classNames({selected: !this.props.filter})} to="/">All</Link>
          </li>
          <li>
            <Link activeClassName="selected"  to={{pathname: '/', query: {filter: 'active'}}}>Active</Link>
          </li>
          <li>
            <Link activeClassName="selected" to={{pathname: '/', query: {filter: 'completed'}}}>Completed</Link>
          </li>
          </ul>
        <div className="info">
          <p>Double-click to edit a todo</p>
          <p>Written by <a href="http://github.com/dunhuang">Dunhuang</a></p>
        </div>
      </footer>
    );
  }
}