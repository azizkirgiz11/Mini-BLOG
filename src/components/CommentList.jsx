import React, { useEffect, useState } from 'react'
import { db } from '../firebase/firebase'
import { collection,
         query,
         where,
         orderBy,
         onSnapshot,
         doc} from 'firebase/firestore'


const CommentList = ({postId}) => {
  const [comments, setComments] =
  useState([]);

  useEffect(() => {
    const q = query(
      collection(db, "comments"),
      where("postId", "==", "postId"),
      orderBy("createAt", "desc")
    );

    const unsubscribe = onSnapshot(q,
      (snapshot) => {
        setComments(snapshot.docs.map(doc => ({id: doc.id, ...doc.data() })));
      });

      return () => unsubscribe();
    }, [postId]);

    const handleDelete = async (id) => {
      if (windiw.confirm("ochuruunu kaalaisyzby?")) {
        await delateDoc(doc(db,
          "comments", id));
      }
    };

  return (
   <div className='grid grid-cols-1md:grid-cols-3 gap-6'>
    {comments.map((comment) => (
      <div key={comment.id}
      className='bg-white p-6 rounded-x1 border border-gray-100 shadow-sm hover:shadow-md transition'>
        <div className='flex justify-between items-start mb-4'>
          <div className='text-xs font-semibold text-purple-600 uppercase tracking-wider'>
            talkuu
          </div>
          <button onClick={() => handleDelete(comment.id)} className='text-gray-400 hover:text-red-500 text-sm'>*</button>
        </div>
        <p className='text-gray-800 font-medium mb-4 leading-relaxed'>{comment.text}</p>
        <div className='flex items-center mt-auto'>
          <div className='w-8 h-8 bg-gray-200 rounded-full mr-3'></div>
          </div>
        <p className='text-sm font-bold text-gray-900'>{comment.author || 'anonim'}</p>
        <p className='text-xs text-gray-500'>{comment.createdAt?.toDate().toLocateString() || 'jyktoluudo...'}</p>
      </div>
    ))}
   </div>
  ) 
}

export default CommentList