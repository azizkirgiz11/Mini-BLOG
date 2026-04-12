import React from 'react'
import PostItem from './PostItem'

const PostList = ({ posts }) => {
  if (posts.length === 0) {
    return <p className="no-posts">No posts yet. Create one!</p>
  }

  return (
    <div className="posts-list">
      {posts.map((post) => (
        <PostItem key={post.id} post={post} />
      ))}
    </div>
  )
}

export default PostList