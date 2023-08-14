"use client";
import { useState, useEffect } from "react";
import { supabase } from "../supabaseClient";
import EditPost from "./EditPost";


export default function Posts({ session }) {
  const [posts, setPosts] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getPosts();
  }, []);

  async function getPosts() {
    try {
      const { data, error } = await supabase
        .from("blog")
        .select("*")
        .order("date");
      if (error) throw error;
      if (data != null) {
        setPosts(data);
      }
    } catch (error) {
      alert(error.message);
    }
  }
  
  function formatDate(input) {
    let date = input
    const myDate = date.split("-")
    return (
      myDate[2] + "-" + myDate[1] + "-" + myDate[0] )
  }

  return (
    <>
      {session ? (
        <>
          <button
            className="button-inverse mt-10"
            onClick={() => (window.location = "/blog/createpost")}
          >
            Create Post
          </button>
          {posts.map((posts) => <EditPost posts={posts} />).reverse()}
        </>
      ) : (
        <div>
          {posts.map((posts) => (
            <div className="card rounded-none w-4/5 text-left">
              <div className="w-full">
                <h2 className="py-1">{posts.title}</h2>
                <h3>{posts.tagline}</h3>
                <p>{posts.content}</p>
                <div className="text-right">{formatDate(posts.date)}</div>
              </div>
            </div>
          )).reverse()}
        </div>
      )}
    </>
  );
}
