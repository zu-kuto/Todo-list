import React, { Component } from "react"
import TodoItem from "./TodoItem";
export default class TodoList extends React.Component {
    render() {
        return (
            <div>
                <ul className="list-group my-5">
                    <h3 className="text-capitalize">todo list</h3>
                    <TodoItem/>
                    <button type="button" className="btn btn-danger btn-block text-capitalize mt-5">
                        clear all
                    </button>
                </ul>
            </div>
        )
    }
}
