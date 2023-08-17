import React from 'react';
import FormButton from './UI/buttons/FormButton';

const PostItem = (props) => {
    return (       
    <div className='post'>
        <div className='post__content'>
            <strong>{props.number}. {props.post.title}</strong>
            <div>
                {props.post.description}
            </div>
        </div>
        <div className='post__actions'>
            <FormButton onClick={() => {
              props.remove(props.post)
            }} className='post__actions-delete'>Удалить!</FormButton>
        </div>
    </div>
    );
}
 
export default PostItem;