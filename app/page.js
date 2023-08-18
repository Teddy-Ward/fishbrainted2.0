"use client";
import { useState, useEffect } from "react";
import { supabase } from "./components/supabaseClient";


import MainPost from "./components/MainPost";
import PannelPost from "./components/PannelPost";

export default function Home() {
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

console.log(posts)

  return (
    <div className="pt-20">
      <div className="max-w-5xl mx-auto h-80">
        <MainPost />
        <PannelPost />
      </div>
    </div>
  );
}
