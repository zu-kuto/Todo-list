
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

// import './App.css';

class App extends React.Component {
  render() {
    return <div>
      Hello from main app
      <TodoInput />
      <TodoList />
    </div>;
  }
}

export default App;