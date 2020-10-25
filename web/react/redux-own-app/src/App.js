import React from 'react'
import { AddPostForm } from './features/posts/AddPostForm';

import { PostsList } from './features/posts/PostsList'

function App() {
  return (
    <div className="App">
      <React.Fragment>
        <AddPostForm />
        <PostsList />
      </React.Fragment>
    </div>
  );
}

export default App;
