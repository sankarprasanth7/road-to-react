import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

const list = [
  {
  title: 'React',
  url: 'https://reactjs.org/',
  author: 'Jordan Walke',
  num_comments: 3,
  points: 4,
  objectID: 0,
  },
  {
  title: 'Redux',
  url: 'https://redux.js.org/',
  author: 'Dan Abramov, Andrew Clark',
  num_comments: 2,
  points: 5,
  objectID: 1,
  },
];

const key = 'name';
const user = {
[key]: 'Robin',
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list,
      };
    }
  render() {
    return (
    <div className="App">
    {this.state.list.map(item =>{
      return (<div key={item.objectID}>
      <span>{item.title}</span>
      <span>{item.url}</span>
      <span>{item.author}</span>
      <span>{user.name}</span></div>);
    })}
    </div>
    );
  }
}

export default App;
