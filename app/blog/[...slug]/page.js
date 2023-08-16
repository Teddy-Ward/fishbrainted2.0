"use client"

import { supabase } from "../../components/supabaseClient";
import { useState, useEffect } from "react";
import PostCard from '@/app/components/Blog/PostCard';
import Link from "next/link";


export default function Page({ params }) {
  const [post, setPost] = useState([""]);
  const [loading, setLoading] = useState("loading")
  const [classes, setClasses] = useState("hidden")

  const name = params.slug

  useEffect(() => {
    getPost();
  }, []);

  async function getPost() {
    try {
      const { data, error } = (await supabase.from("blog").select("*").eq("slug_title", name));
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
