import React, { useState, useEffect } from 'react'
import PostForm from '../components/PostForm'
import PostList from '../components/PostList'
import styles from '../styles/Home.module.css'

const API_URL = 'https://4ff0af643300b0b6.mokky.dev/postlist'

const Home = () => {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(false)

  const fetchPosts = async () => {
    setLoading(true)
    try {
      const response = await fetch(API_URL)
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      const data = await response.json()
      setPosts(data)
    } catch (error) {
      console.error('Error fetching posts:', error)
      alert('Error loading posts: ' + error.message)
    }
    setLoading(false)
  }

  useEffect(() => {
    fetchPosts()
  }, [])

  const handleAddPost = async (newPost) => {
    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newPost),
      })
      const data = await response.json()
      setPosts([data, ...posts])
    } catch (error) {
      console.error('Error adding post:', error)
    }
  }

  return (
    <div className={styles.homeContainer}>
      <section className={styles.createPostSection}>
        <h2>Create New Post</h2>
        <PostForm onAddPost={handleAddPost} />
      </section>

      <section className={styles.postsSection}>
        <h2>All Posts</h2>
        {loading ? (<p className={styles.loading}>Loading...</p>) : (<PostList posts={posts} />)}
      </section>
    </div>
  )
}

export default Home