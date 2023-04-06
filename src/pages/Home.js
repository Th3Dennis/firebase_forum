import React from 'react'
import { useState, useEffect } from 'react'
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore'
import { db, auth } from '../firebase-config'


function Home() {
    const [postList, setPostList] = useState([]);

    const getPosts = async () => {
        const postsCollectionRef = collection(db, "posts");
        const postsSnapshot = await getDocs(postsCollectionRef);
        const postsList = postsSnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
        setPostList(postsList);
    };

    useEffect(() => {
        getPosts();
    }, []);

    const handleDelete = async (id) => {
        await deleteDoc(doc(db, "posts", id));
        getPosts();
    };

    console.log("postList", postList)

  return (
    <div className="container mt-2">
        <div className="row">
            <div className="col-md-6 offset-md-3">
                <div className="card">
                    <div className="card-header">
                        <h3>Posts</h3>
                    </div>
                    {postList.length !== 0 && (
                    <div className="card-body">
                        {postList.map((post) => (
                            <div className="card mb-2" key={post.id}>
                                <div className="card-body">
                                    <h5 className="card-title">{post.title}</h5>
                                    {post.author?.id === auth.currentUser?.uid && (
                                        <button className="btn btn-sm" onClick={() => {handleDelete(post.id)}}>
                                            &#128465;
                                            </button>
                                            )
                                            }
                                    <p className="card-text">{post.post}</p>
                                    <p className="card-text">
                                        <small className="text-muted">
                                            {post.author.name}
                                        </small>
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                    )}
                </div>
            </div>
        </div>
    </div>

  )
}

export default Home