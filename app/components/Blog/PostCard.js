"use client";
import { useState } from "react";
import { supabase } from "../supabaseClient";

export default function PostCard(props) {
  const post = props.post;

  const [loading, setLoading] = useState(false);
  const [editing, setEditing] = useState(false);
  const [category, setCategory] = useState(post.category);
  const [title, setTitle] = useState(post.title);
  const [tagline, setTagline] = useState(post.tagline);
  const [date, setDate] = useState(post.date);
  const [content, setContent] = useState(post.content);
  const [image_url, setImage_url] = useState(post.image_url);

  
  return (
    <>
    <div>{title}</div>

    
    </>
    
  )
}