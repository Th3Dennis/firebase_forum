import React from "react";
import { addDoc, collection } from "firebase/firestore";
import { db, auth } from "../firebase-config";
import { useNavigate } from "react-router-dom";

function CreatePost() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.title.value);
    console.log(e.target.post.value);

    createPost(e.target.title.value, e.target.post.value);

  };

  const postsCollectionRef = collection(db, "posts");
  let navigate = useNavigate();
  const createPost = async (title, post) => {
    await addDoc(postsCollectionRef, {
      title,
      post,
      author: { name: auth.currentUser.displayName, id: auth.currentUser.uid },
    });
    navigate("/");
  };

  return (
    // add form with Title and Post fields and a submit button inside of a container
    //add a paper to the container

    <div className="container mt-2">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card">
            <div className="card-header">
              <h3>Create Post</h3>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="title">Title</label>
                  <input type="text" className="form-control" name="title" />
                </div>
                <div className="form-group">
                  <label htmlFor="post">Post</label>
                  <textarea className="form-control" name="post"></textarea>
                </div>
                <button type="submit" className="btn btn-primary mt-2">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreatePost;
