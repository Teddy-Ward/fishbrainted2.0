"use client";
import { useState } from "react";
import { supabase } from "../supabaseClient";


const CDN = process.env.NEXT_PUBLIC_SUPABASE_IMAGES_CDN

export default function PostCard(props) {
  const post = props.post;

  const [category, setCategory] = useState(post.category);
  const [title, setTitle] = useState(post.title);
  const [tagline, setTagline] = useState(post.tagline);
  const [date, setDate] = useState(post.date);
  const [content, setContent] = useState(post.content);
  const [image_url, setImage_url] = useState(post.image_url);

  function formatDate(input) {
    let date = input
    const myDate = date.split("-")
    return (
      myDate[2] + "-" + myDate[1] + "-" + myDate[0] )
  }

  const imageLink = CDN + image_url

  return (
    <>
    <div className="card w-4/5 mb-10 rounded-none text-left">
      <div className="w-full">
        <h2 className="py-0">{title}</h2>
        <div>{category} - {tagline}</div>
        {image_url ? (<img src={imageLink} className="w-1/2 mx-auto"/>) : ("") }
        <div>{content}</div>
        <div>{formatDate(date)}</div>
      </div>
    </div> 
    <button className="button-inverse" onClick={() => (window.location = "/blog/")}>Go Back</button>
    </>
    
  )
}