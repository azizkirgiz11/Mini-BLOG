import React from 'react'
import { db } from '../firebase'
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

const Comment = ({postId}) => {
  const [text, setText] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!text.trim()) return;

    try {
  await addDoc(collection(db,
    "comments"), {
      postId: postId, 
      text: text,
      createAt: serverTimestamp(),
      userName: "welcome"
    });
    setText('');
  } catch (error) {
    console.error("Error addingdocument:", error);
  }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <textarea className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-purple-500 outline-none"
      placeholder="Express your opinion"
      value={text}
      onChange={(e) => 
        setText(e,EventTarget.value)}
        />
      <button className="bg-purple-600
      text-white px-4 py-2 mt-2 rounded-md hover:bg-purple-700">
        Send
      </button>
    </form>
  )
};

export default Comment