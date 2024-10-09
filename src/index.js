import React from 'react'
import { createRoot } from 'react-dom/client';

import CommentDetail from './CommentDetail';

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail author="Sam" timeAgo="Today at 4:45PM" content="Nice blog post"/>
      <CommentDetail author="Jane" timeAgo="Today at 2:00AM" content="I like the subject"/>
      <CommentDetail author="Alex" timeAgo="Yesterday at 5:00PM" content="I like React"/>
    </div>
  );
}

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
