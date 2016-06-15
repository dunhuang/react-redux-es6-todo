import classNames from 'classnames';
import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

export class TaskItem extends Component {
  static propTypes = {
    deleteTask: PropTypes.func.isRequired,
    task: PropTypes.object.isRequired,
    updateTask: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      editing: false,
      editValue: props.task.title
    };
  }
  componentWillReceiveProps(nextProps){
    this.setState({
      editValue: nextProps.task.title
    });
  }

  delete() {
    this.props.deleteTask(this.props.task);
  }

  editTitle(event) {
    event.preventDefault();
    this.setState({
      editing: true
    }, () => ReactDOM.findDOMNode(this.refs.editInput).focus());
  }

  saveTitle(event) {
    if (this.state.editing) {
      const { task } = this.props;
      const title = event.target.value.trim();
      if (title.length && title !== task.title) {
        this.props.updateTask(task, {title});
      }
      this.stopEditing();
    }
  }

  stopEditing() {
    this.setState({editing: false});
    ReactDOM.findDOMNode(this.refs.editInput).blur();
  }

  toggleStatus() {
    let checked = !this.props.task.completed;
    this.props.updateTask(this.props.task, {completed: checked});
  }

  onKeyUp(event) {
    if (event.keyCode === 13) {
      this.saveTitle(event);
    }
    else if (event.keyCode === 27) {
      this.stopEditing();
    }
  }
  onValueChange(event) {
    let text = ReactDOM.findDOMNode(this.refs.editInput).value; 
    this.setState({editValue: text});
  }

  renderTitle(task) {
    return (
      <div
        className="task-item__title"
        ref={c => this.titleText = c}
        tabIndex="0">{task.title}
      </div>
    );
  }

  render() {
    const { editing } = this.state;
    const { task } = this.props;
    return (
      <li className={classNames({completed: task.completed, editing})}>
        <div className="view">
          <input className="toggle" type="checkbox" onChange={this.toggleStatus.bind(this)} />
          <label onDoubleClick={this.editTitle.bind(this)}>{task.title}</label>
          <button className="destroy" onClick={this.delete.bind(this)}></button>
        </div>
        <input type="text" 
          autoFocus
          autoComplete="off" 
          ref="editInput"  
          className="edit" 
          value={this.state.editValue} 
          onChange={this.onValueChange.bind(this)}  
          onKeyUp={this.onKeyUp.bind(this)} 
          onBlur={this.saveTitle.bind(this)} 
          />
      </li>
    );
  }
}
