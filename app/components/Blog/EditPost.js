"use client";
import { useState } from "react";
import { supabase } from "../supabaseClient";

export default function EditPost(props){
  const post = props.posts;

  const [editing, setEditing] = useState(false);
  const [category, setCategory] = useState(post.category);
  const [title, setTitle] = useState(post.title);
  const [tagline, setTagline] = useState(post.tagline);
  const [date, setDate] = useState(post.date);
  const [content, setContent] = useState(post.content);
  const [image_url, setImage_url] = useState(post.image_url);

  async function updatePost() {
    try {
      const {data, error} = await supabase
      .from("blog")
      .update({
        category: category,
        title: title,
        tagline: tagline,
        date: date,
        content: content,
        image_url: image_url
      })
      .eq("id", post.id);

    if (error) throw error;
    window.location.reload();
    } catch (error) {
      alert(error.message);
    }
  }

  async function deletePost() {
    try {
      const {data, error} = await supabase
      .from("blog")
      .delete()
      .eq("id", post.id);

    if (error) throw error;
    window.location.reload();
    } catch (error) {
      alert(error.message);
    }
  }

  const categoryList = [
    { label: "Select", value: "" },
    { label: "General", value: "General" },
    { label: "Games", value: "Games" },
    { label: "UK Politics", value: "Ukpol" },
    { label: "Life", value: "Life" },
    { label: "Opinion", value: "Opinion" },
    { label: "Random", value: "Random" },
  ];

  const listChange = (event) => {
    setCategory(event.target.value);
  };
  return (
    <>
    {editing === false ? (
      <>
        <div className="card">
          <h2>{post.title}</h2>
          <button className="button-inverse" onClick={() => deletePost()}>Delete</button>
          <button className="button" onClick={() => setEditing(true)}>Edit</button>
        </div>
      </>
    ) : (
      <>
      <div className="card">
                <h2>Edit Post</h2>
        <button className="button-inverse" onClick={() => setEditing(false)}>Go Back</button>
        <label>Category</label>
        <select category={category} onChange={listChange}>
          {categoryList.map((option) => (
            <option category={option.value}>{option.label}</option>
          ))}
        </select>
        <label>Title</label>
        <input 
          type="text"
          id="title"
          defaultValue={post.title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      </>

    )}
    </>

  )
}