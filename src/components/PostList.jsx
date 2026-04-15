import React from 'react'
import PostItem from './PostItem'
import styles from '../styles/PostList.module.css'

const PostList = ({ posts }) => {
  if (posts.length === 0) {
    return <p className={styles.noPosts}>No posts yet. Create one!</p>
  }

  return (
    <div className={styles.postsList}>
      {posts.map((post) => (
        <PostItem key={post.id} post={post} />
      ))}
    </div>
  )
}

export default PostList