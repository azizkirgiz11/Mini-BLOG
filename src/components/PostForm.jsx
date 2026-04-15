import React from "react";
import { useState } from "react";
import styles from "../styles/PostForm.module.css";

const PostForm = ({ onAddPost }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [imagePreview, setImagePreview] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) {
      setImagePreview("");
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title.trim() || !content.trim()) {
      alert("Please fill in all fields");
      return;
    }

    setSubmitting(true);
    const newPost = {
      title: title.trim(),
      content: content.trim(),
      imageData: imagePreview || null,
      createdAt: new Date().toISOString(),
    };

    await onAddPost(newPost);

    setTitle("");
    setContent("");
    setImagePreview("");
    setSubmitting(false);
  };

  return (
    <div>
      <form className={styles.postForm} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Post Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          disabled={submitting}
          className={styles.formInput}
        />
        <textarea
          placeholder="Post Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          disabled={submitting}
          className={styles.formInput}
          rows="6"
        />
        <label className={styles.imageUploadLabel}>
          Choose Image
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            disabled={submitting}
            className={styles.formInput}
          />
        </label>
        {imagePreview && (
          <div className={styles.imagePreviewWrapper}>
            <img src={imagePreview} alt="Preview" className={styles.imagePreview} />
          </div>
        )}
        <button type="submit" className={styles.submitBtn} disabled={submitting}>
          {submitting ? "Submitting..." : "Add Post"}
        </button>
      </form>
    </div>
  );
};

export default PostForm;
