"use client";
import { useState, useEffect } from "react";
import { supabase } from "../supabaseClient";
import EditPost from "./EditPost";
import Link from "next/link";



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

function postLink(input) {
  let link = "blog/" + input
  return link
}

function trimmedContent(input) {
  let string = input;
  let length = 7;
  let trimmedString = string.substring(0, length)
  return trimmedString + "..."
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
            <div className="card rounded-none w-4/5 text-left pb-4">
              <div className="w-full">
                <h2 className="py-1">{posts.title}</h2>
                <h3>{posts.tagline}</h3>
                <p className="">{trimmedContent(posts.content)}</p>
                <div className="text-right">{formatDate(posts.date)}</div>                
                <div className="text-center pt-2">
                <Link href={postLink(posts.slug_title)} className="link font-normal">Read More</Link>
                </div>
              </div>
            </div>
          )).reverse()}
        </div>
      )}
    </>
  );
}
