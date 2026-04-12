import React from 'react'
import { Link } from 'react-router-dom'

const PostItem = ({ post }) => {
  const excerpt = post.content.substring(0, 100) + (post.content.length > 100 ? '...' : '')
  const date = new Date(post.createdAt).toLocaleDateString()

  return (
    <div className="post-item">
      <h3>
        <Link to={`/post/${post.id}`}>{post.title}</Link>
      </h3>
      <p className="post-excerpt">{excerpt}</p>
      <div className="post-meta">
        <span className="post-date">{date}</span>
        <Link to={`/post/${post.id}`} className="read-more">
          Read More →
        </Link>
      </div>
    </div>
  )
}

export default PostItem