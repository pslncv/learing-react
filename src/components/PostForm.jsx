import React, { useState } from 'react';
import FormInput from './UI/inputs/FormInput';
import FormButton from './UI/buttons/FormButton';

const PostForm = ({create}) => {

    const [post, setPost] = useState({title:'', description:''})
    
    const addNewPost = (e) => {
        e.preventDefault()
        const newPost = {
            ...post,
            id: Date.now(),
        }
        create(newPost)
        setPost({title:'',description:''})
    }

    return ( 
      <form className='form'>
        <FormInput
          value={post.title}
          onChange={e => setPost({
            ...post,
            title: e.target.value})}
          type='text'
          placeholder='Название поста'>
        </FormInput>
        <FormInput
          value={post.description}
          onChange={e => setPost({
            ...post,
            description: e.target.value})}
          type='text'
          placeholder='Описание поста'>
        </FormInput>
        <FormButton onClick={addNewPost}>Создать пост</FormButton>
      </form>
     );
}
 
export default PostForm;