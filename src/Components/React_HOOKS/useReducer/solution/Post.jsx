import { useReducer } from 'react';

import './Post.css';
import { postReducer, initialState } from './postReducer';

const Post = () => {
  const [state, dispatch] = useReducer(postReducer, initialState);

  const handleFetch = () => {
    dispatch({ type: 'FETCH_START' });
    fetch('https://jsonplaceholder.typicode.com/posts/50')
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          return res.json();
        } else {
          throw new Error('Something is wrong');
        }
      })
      .then((data) => {
        dispatch({ type: 'FETCH_SUCCESS', payload: data });
      })
      .catch((err) => {
        dispatch({ type: 'FETCH_FAILURE' });
      });
  };
  return (
    <div className='Post'>
      <div className='Post-Header'>
        <h1>Post</h1>
        {state?.post?.id && (
          <p>
            <small>
              Post N <span className='Post-Number'> {state.post.id}</span>
            </small>
          </p>
        )}
      </div>
      <div className='Post-Content'>
        <p className='Post-Title'>{state.post.title}</p>
      </div>
      <div className='Post-Error'>
        <span className='Post-Error'> {state.error && 'Fetch feild 🤔'}</span>
      </div>
      <div className='Post-Footer'>
        <button onClick={handleFetch} disabled={!!state?.post?.id}>
          {state.loading ? 'Wait' : 'Fetch the Post'}
        </button>
      </div>
    </div>
  );
};

export default Post;
