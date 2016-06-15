import React, { Component, PropTypes } from 'react';


export class TaskForm extends Component {
  static propTypes = {
    createTask: PropTypes.func.isRequired
  };

  constructor(props, context) {
    super(props, context);
    this.state = {title: ''};
  }

  clearInput() {
    this.setState({title: ''});
  }

  onChange(event) {
    this.setState({title: event.target.value});
  }

  onKeyUp(event) {
    if (event.keyCode === 13) {
      const title = this.state.title.trim();
      if (title.length) this.props.createTask(title);
      this.clearInput();
    }
    else if (event.keyCode === 27) {
      this.clearInput();
    }
  }

  render() {
    return (
      <header id="header">
        <h1>todos</h1>
        <input 
          autoFocus 
          autoComplete="off" 
          id="new-todo" 
          type="text" 
          className="new-todo" 
          placeholder="What needs to be done?" value={this.state.title} 
          onChange={this.onChange.bind(this)}
          onKeyUp={this.onKeyUp.bind(this)}
          ref="createInput"
         />
      </header>
    );
  }
}