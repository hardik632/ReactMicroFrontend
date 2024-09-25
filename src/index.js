import React from 'react';
import ReactDOM from 'react-dom';
import DevOpsSyllabus from './DevOpsSyllabus';

const App = () => (
  <div>
    <h1>DevOps Micro App</h1>
    <DevOpsSyllabus />
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));