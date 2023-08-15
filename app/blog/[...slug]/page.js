"use client"

import { supabase } from "../../components/supabaseClient";
import { useState, useEffect } from "react";
import PostCard from '@/app/components/Blog/PostCard';
import Link from "next/link";


export default function Page({ params }) {
  const [post, setPost] = useState([""]);
  const [loading, setLoading] = useState("loading")
  const [classes, setClasses] = useState("hidden")

  const name = slugify(params.slug)

  useEffect(() => {
    getPost();
  }, []);

  async function getPost() {
    try {
      const { data, error } = (await supabase.from("blog").select("*").eq("title", name));
      if (error) throw error;      
      if (data != null) {
        setPost(data);
      } 

    } catch (error) {
      alert(error.message); 
    } finally {
      setLoading("Not Found")
      setClasses("block")
    }
  }

  function slugify(input) {
    let slug = input.toString();
    const mySlug = slug
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "-")
      .replace(/[\s_-]+/g, " ")
      .replace(/^-+|-+$/g, "-");

    const mySentence = mySlug;

    const finalSentence = mySentence.replace(/(^\w{1})|(\s+\w{1})/g, (letter) =>
      letter.toUpperCase()
    );

    return finalSentence;
  }


  return (
    <>
     {post[0] ? (<PostCard post={post[0]} />) : (
     <>
     <div>{loading}</div>
     <div className={classes}>
      <Link href={"/"}>Go Back</Link>
     </div>
     </>)}
    </>

  
  )
}
