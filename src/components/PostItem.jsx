import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/PostItem.module.css";

const PostItem = ({ post }) => {
  const excerpt =
    post.content.substring(0, 100) + (post.content.length > 100 ? "..." : "");
  const date = new Date(post.createdAt).toLocaleDateString();

  return (
    <Link to={`/post/${post.id}`} className={styles.postItemLink}>
      <div className={styles.postItem}>
        {post.imageData ? (
          <div className={styles.postImageWrapper}>
            <img
              src={post.imageData}
              alt={post.title}
              className={styles.postImage}
            />
          </div>
        ) : (
          <div className={styles.noImagePlaceholder}>No Image</div>
        )}
        <h3>
          <Link to={`/post/${post.id}`}>{post.title}</Link>
        </h3>
        <p className={styles.postExcerpt}>{excerpt}</p>
        <div className={styles.postMeta}>
          <span className={styles.postDate}>{date}</span>
          <Link to={`/post/${post.id}`} className={styles.readMore}>
            Read More →
          </Link>
        </div>
      </div>
    </Link>
  );
};

export default PostItem;
