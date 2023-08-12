"use client";
import { useState, useEffect } from "react";
import { supabase } from "../supabaseClient";
import { Field, Form, Formik } from "formik";

export default function Posts() {
  const [category, setCategory] = useState("");
  const [title, setTitle] = useState("");
  const [tagline, setTagline] = useState("");
  const [image_url, setImage_url] = useState("");
  const [date, setDate] = useState("");
  const [content, setContent] = useState("");
  const [posts, setPosts] = useState([]);
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    getPosts();
  }, []);

  async function getPosts() {
    try {
      const { data, error } = await supabase.from("blog").select("*");
      if (error) throw error;
      if (data != null) {
        setPosts(data);
      }
    } catch (error) {
      alert(error.message);
    }
  }

  async function createPost() {
    try {
      const { data, error } = await supabase
        .from("blog")
        .insert({
          category: category,
          title: title,
          tagline: tagline,
          image_url: image_url,
          date: date,
          content: content,
        })
        .single();
      if (error) throw error;
      window.location.reload();
    } catch (error) {
      alert(error.message);
    }
  }

  async function uploadImage(event) {
    try {
      setUploading(true);

      if (!event.target.files || event.target.files.length === 0) {
        throw new Error("You must select an image to upload.");
      }

      const file = event.target.files[0];
      const fileExt = file.name.split(".").pop();
      const fileName = `${Math.random()}.${fileExt}`;
      const filePath = `${fileName}`;
      // const filePath = file.name

      let { error: uploadError } = await supabase.storage
        .from("images")
        .upload(filePath, file);

      if (uploadError) {
        throw uploadError;
      }

      setImage_url(filePath);
    } catch (error) {
      alert(error.message);
    } finally {
      setUploading(false);
      alert("Upload Complete");
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
    console.log(event.target.value);
  };

  return (
    <div className="card">
      <div className="grid grid-cols-3 gap-4 text-left">
        <h2 className="w-full text-center col-span-3">Create new Blog Post</h2>
        <div>
          <label htmlFor="category">Category</label>
        </div>
        <div className="col-span-2">
          <select category={category} onChange={listChange} className="input">
            {categoryList.map((option) => (
              <option category={option.value}>{option.label}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="title">Title</label>
        </div>
        <div className="col-span-2">
          <input
            id="title"
            className="input block mx-auto"
            type="text"
            name="title"
            value={title || ""}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="tagline">Tagline</label>
        </div>
        <div className="col-span-2">
          <input
            id="tagline"
            className="input block mx-auto"
            type="text"
            name="tagline"
            value={tagline || ""}
            onChange={(e) => setTagline(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}
