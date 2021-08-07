import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AddTodo from './components/AddTodo/AddTodo';
import EditTodo from './components/Edit/EditTodo';
import Navbar from './components/Navbar/Navbar';
import TodoList from './components/TodoList/TodoList';
import HomePage from './components/HomePage';
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/add' component={AddTodo} />
          <Route exact path='/todos' component={TodoList} />
          <Route exact path='/todo/:id' component={EditTodo} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
