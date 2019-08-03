//@ts-check
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
      id: uuid(),
      title: this.state.item
    };

    this.state.items.push(newItem);

    this.setState({
      items: this.state.items,
      item: '',
      editItem: false
    });


    /* const updatedItems = [...this.state.item, newItem];

    this.setState({
      items: updatedItems,
      item: '',
      id: uuid(),
      editItem: false
    });*/
  };

  clearList = () => {
    this.setState({
      items: []
    });
  };

  handleDelete = (id) => {
    const filteredItems = this.state.items.filter(item => item.id !== id);
    this.setState({
      items: filteredItems
    });
  };
  handleEdit = id => {
    const filteredItems = this.state.items.filter(item => item.id !== id);
    const selectedItem = this.state.items.find(item => item.id === id);
    this.setState({
      items: filteredItems,
      item: selectedItem.title,
      editItem: true,
      id:id
    });
  };


  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-4">
            <h3 className="text-capitalize text-center">Todo Input</h3>
            <TodoInput
              item={this.state.item}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              editItem={this.state.editItem} />
            <TodoList
              items={this.state.items}
              clearList={this.clearList}
              handleDelete={this.handleDelete}
              handleEdit={this.handleEdit} />
          </div>
        </div>
      </div>
    );
  } z
}

export default App;