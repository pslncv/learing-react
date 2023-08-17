import React, { useRef, useState } from 'react';
import '../src/styles/App.css'
import PostForm from './components/PostForm';
import PostList from './components/PostList';

function App() {

  const [posts, setPosts] = useState([
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

  const createPost = (newPost) => {
    setPosts([
      ...posts,
      newPost,
    ])    
  }

  return (
    <div className='App'>
      <PostForm create={createPost}></PostForm>
      <PostList posts={posts} title='Front-end разработка'/>
    </div>
  );

}

export default App;
