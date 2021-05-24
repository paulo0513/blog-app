import axios from "axios";
import React from "react";

const CreatePost = () => {
  return (
    <div>
      <form>
        <h2>Create Post</h2>
        <label htmlFor="title">Title</label>
        <input
          className="title"
          type="text"
          placeholder="add your title"
          value=""
          onChange=""
        />
        <input
          className="imgURL"
          type="img"
          placeholder=""
          value=""
          onChange=""
        />
        <label htmlFor="date">Date</label>
        <input
          className="date"
          type="date"
          placeholder="MM/DD/YYYY"
          value=""
          onChange=""
        />
        <label htmlFor="body">Body</label>
        <textarea
          className="message"
          type="text"
          placeHolder="message"
          value=""
          onChange=""
        />

        <button>Save Post</button>
      </form>
    </div>
  );
};

//title
//imgurl
//content
//author

export default CreatePost;
