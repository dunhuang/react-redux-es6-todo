import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { tasksActions } from 'src/core/tasks';
import { TaskFilters } from './task-filters';
import { TaskForm } from './task-form';
import { TaskList } from './task-list';


class Tasks extends Component {
  static propTypes = {
    createTask: PropTypes.func.isRequired,
    deleteTask: PropTypes.func.isRequired,
    location: PropTypes.object.isRequired,
    tasks: PropTypes.array.isRequired,
    updateTask: PropTypes.func.isRequired
  };

  render() {
    const {
      createTask,
      deleteTask,
      location,
      tasks,
      updateTask
    } = this.props;

    const { filter } = location.query;
    return (
      <div>
        <TaskForm createTask={createTask} />
        <TaskList
          deleteTask={deleteTask}
          filter={filter}
          tasks={tasks}
          updateTask={updateTask}
        />
        <TaskFilters filter={filter} />
      </div>

    );
  }
}

export default connect(state => ({
  tasks: state.tasks.list
}), Object.assign({}, tasksActions))(Tasks);
