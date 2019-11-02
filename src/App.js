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

// const key = 'name';
// const user = {
// [key]: 'Robin',
// };

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list,
      };
      this.onDismiss = this.onDismiss.bind(this);
  }

  onDismiss(id){
    function isNotId(item){
      return item.objectID !== id;
    }
    const updatedList = this.state.list.filter(isNotId);
    this.setState({ list: updatedList });
    // const updatedList = this.state.list.filter(item => item.objectID !== id);
  }

  render() {
    return (
    <div className="App">
    {this.state.list.map(item =>{
      return (
        <div key={item.objectID}>
          <span>{item.title}</span>
          <span>{item.url}</span>
          <span>{item.num_comments}</span>
          <span>{item.points}</span>
          <span>{item.author}</span>
          <span>
            <button onClick={() => this.onDismiss(item.objectID) }> Dismiss This</button>
          </span>
        </div>
      );
    })}
    </div>
    );
  }
}

export default App;
