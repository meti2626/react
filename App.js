import React from 'react';
import ReactDOM from 'react-dom';
import AnotherComponent from './AnotherComponent';
import NameList from './NameList';

const App = () => (
  <div>
    <h1>Name List</h1>
    <NameList />
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
