import React from 'react'
import { createRoot } from 'react-dom/client';

import ApprovalCard from './ApprovalCard';
import CommentDetail from './CommentDetail';

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <div>
          <h4>Warning</h4>
          Are you sure you want to do this?
        </div>
      </ApprovalCard>
  
      <ApprovalCard>
        <CommentDetail author="Sam" timeAgo="Today at 4:45PM" content="Nice blog post"/>
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail author="Jane" timeAgo="Today at 2:00AM" content="I like the subject"/>
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail author="Alex" timeAgo="Yesterday at 5:00PM" content="I like React"/>
      </ApprovalCard>
    </div>
  );
}

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
