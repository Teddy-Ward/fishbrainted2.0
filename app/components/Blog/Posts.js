"use client";
import { useState, useEffect } from "react";
import { supabase } from "../supabaseClient";
import EditPost from "./EditPost";

export default function Posts({session}) {

  const [posts, setPosts] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [loading, setLoading] = useState(false);

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

  return (
    <>
    {session ? (
    <>
      <button className="button-inverse mt-10" onClick={() => window.location='/blog/createpost'}>Create Post</button>
          {posts.map((posts) => (
      <EditPost posts={posts} />
      ))}
    </>
    ) : (
    <div></div>)}

    </>
  );
}
