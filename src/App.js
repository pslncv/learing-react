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

 const removePost = (post) => {
  setPosts(posts.filter(p => p.id !== post.id))
 }

  return (
    <div className='App'>
      <PostForm create={createPost}></PostForm>
      {posts.length > 0
        ? <PostList remove={removePost} posts={posts} title='Front-end разработка'/>
        : <div className='empty'>
            <div className='empty__text'>
              Пусто :c
            </div>
          </div>
      }
    </div>
  );

}

export default App;
