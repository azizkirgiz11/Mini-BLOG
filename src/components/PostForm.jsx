import React from "react";

const PostForm = ({ onAddPost }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [submitting, setSubmitting] = useState(false);

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
      createdAt: new Date().toISOString(),
    };

    await onAddPost(newPost);

    setTitle("");
    setContent("");
    setSubmitting(false);
  };
  return (
    <div>
      <form className="post-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Post Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          disabled={submitting}
          className="form-input"
        />
        <textarea
          placeholder="Post Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          disabled={submitting}
          className="form-input"
          rows="6"
        />
        <button type="submit" className="submit-btn">
          {submitting ? "Submitting..." : "Add Post"}
        </button>
      </form>
    </div>
  );
};

export default PostForm;
