import React, { useState } from 'react';
import '../src/styles/App.css'
import PostList from './components/PostList';

function App() {

  const [posts1, setPost1] = useState([
    { // HTML
      id: 1,
      title: 'HTML',
      description: 'HTML is a hypertext markup language',
    },
    { // CSS
      id: 2,
      title: 'CSS',
      description: 'CSS is a cascade style sheets',
    },
    { //JavaScript
      id: 3,
      title: 'JavaScript',
      description: 'JavaScript - is a proramming language',
    },
  ])

  const [posts2, setPost2] = useState([
    { // Python
      id: 1,
      title: 'Python',
      description: 'Python is a high-level programming language',
    },
    { // Jango
      id: 2,
      title: 'Jango',
      description: 'Django is a high-level Python web framework',
    },
    { // MongoDB
      id: 3,
      title: 'MongoDB',
      description: 'non-relational document database',
    },
  ])

  return (
    <div className='App'>
      <PostList posts={posts1} title='Front-end разработка'/>
      <PostList posts={posts2} title='Back-end разработка'/>
    </div>
  );

}

export default App;
