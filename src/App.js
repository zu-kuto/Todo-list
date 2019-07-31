
// import React from 'react';
// import TodoItem from './components/TodoItem';
// import TodoList from './components/TodoList';
// import './App.css';
// import TodoInput from './components/TodoInput';

// function App() {
//   return (
//     <div>
//       Hello from main app
//       <TodoInput/>
//       <TodoList/>
//     </div>
//   );
// }

// export default App;

import React from "react";
import TodoItem from "./components/TodoItem";
import TodoList from "./components/TodoList";
import TodoInput from "./components/TodoInput";

import uuid from 'uuid';

// import './App.css';

class App extends React.Component {
  state = {
    items: [],
    id: uuid(),
    item: '',
    editItem: false
  };

  handleChange = (e) => {
    this.setState({
      item: e.target.value
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const newItem = {
      id: this.state.id,
      title: this.state.item
    };

    const updatedItems = [...this.state.item, newItem];

    this.setState({
      items: updatedItems,
      item: '',
      id: uuid(),
      editItem: false
    });

  };

  clearList = () => {
    this.setState ({
      items: []
    })
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-6 ">
            <h3 className="text-capitalize text-center">Todo Input</h3>
            <TodoInput item={this.state.item} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
            <TodoList items={this.state.items} clearList={this.clearList}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;