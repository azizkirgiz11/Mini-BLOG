import React, { useState } from "react";

const CommentForm = () => {
  const [comments, setComments] = useState([]);
  const [text, setText] = useState("");

  const addComment = () => {
    if (!text.trim()) return;

    const newComment = {
      id: Date.now(),
      text: text,
      favorite: false,
    };

    setComments([newComment, ...comments]);
    setText("");
  };

  const toggleFavorite = (id) => {
    setComments(
      comments.map((c) =>
        c.id === id ? { ...c, favorite: !c.favorite } : c
      )
    );
  };

  const deleteComment = (id) => {
    setComments(comments.filter((c) => c.id !== id));
  };

  const favoriteComments = comments.filter((c) => c.favorite);

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Comment Experience</h1>

      <div style={styles.inputBox}>
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Напиши комментарий..."
          style={styles.input}
        />
        <button
          onClick={addComment}
          style={styles.addBtn}
          onMouseEnter={(e) => (e.target.style.background = "#4338ca")}
          onMouseLeave={(e) => (e.target.style.background = "#4f46e5")}
        >
          Add
        </button>
      </div>

      {comments.map((c, index) => {
        return (
          <div
            key={c.id}
            style={styles.card}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-6px) scale(1.02)";
              e.currentTarget.style.boxShadow =
                "0 10px 25px rgba(0,0,0,0.15)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0) scale(1)";
              e.currentTarget.style.boxShadow =
                "0 4px 12px rgba(0,0,0,0.08)";
            }}
          >
            <p>{c.text}</p>

            <div style={styles.buttons}>
              <span
                onClick={() => toggleFavorite(c.id)}
                style={{
                  ...styles.heart,
                  color: c.favorite ? "#ef4444" : "#999",
                  transform: c.favorite ? "scale(1.2)" : "scale(1)",
                }}
              >
                {c.favorite ? "♥" : "♡"}
              </span>

              <button
                onClick={() => deleteComment(c.id)}
                style={styles.delete}
                onMouseEnter={(e) =>
                  (e.target.style.background = "#d1d5db")
                }
                onMouseLeave={(e) =>
                  (e.target.style.background = "#e5e7eb")
                }
              >
                Delete
              </button>
            </div>
          </div>
        );
      })}

      <h2 style={styles.subtitle}>Favorites</h2>

      {favoriteComments.length === 0 && (
        <p style={styles.empty}>Empty</p>
      )}

      {favoriteComments.map((c) => (
        <div key={c.id} style={styles.card}>
          <p>{c.text}</p>
        </div>
      ))}
    </div>
  );
};

const styles = {
  container: {
    minHeight: "100vh",
    padding: "30px",
    background: "#f4f6f8",
    color: "#222",
    fontFamily: "sans-serif",
  },

  title: {
    textAlign: "center",
    marginBottom: "25px",
    fontSize: "32px",
    color: "#333",
  },

  inputBox: {
    display: "flex",
    gap: "10px",
    marginBottom: "25px",
  },

  input: {
    flex: 1,
    padding: "12px",
    borderRadius: "10px",
    border: "1px solid #ddd",
    background: "#fff",
    color: "#333",
  },

  addBtn: {
    padding: "12px 18px",
    borderRadius: "10px",
    border: "none",
    cursor: "pointer",
    background: "#4f46e5",
    color: "#fff",
    transition: "0.2s",
  },

  card: {
    background: "#ffffff",
    padding: "15px",
    borderRadius: "12px",
    marginBottom: "12px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
    transition: "all 0.2s ease",
  },

  buttons: {
    marginTop: "10px",
    display: "flex",
    justifyContent: "space-between",
  },
  heart: {
    fontSize: "22px",
    cursor: "pointer",
    transition: "0.2s",
  },

  delete: {
    background: "#e5e7eb",
    border: "none",
    padding: "6px 12px",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "0.2s",
  },

  subtitle: {
    marginTop: "30px",
    fontSize: "20px",
    color: "#333",
  },

  empty: {
    opacity: 0.6,
    color: "#666",
  },
};

export default CommentForm;
//