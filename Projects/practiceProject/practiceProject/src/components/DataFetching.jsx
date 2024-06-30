import React from "react";
import { useEffect, useState } from "react";
import LoadingSpinner from "./LoadingSpinner";

const DataFetching = () => {
  const [posts, setPosts] = useState([]);
  const [fetching, setFetching] = useState(false);

  useEffect(() => {
    setFetching(true);
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        // console.log(data);
        setPosts(data);
        setFetching(false);
      });
    console.log("first");

    return () => {
      console.log("Cleaning up use effect");
    };
  }, []);
  return (
    <div>
      <ul>
        {fetching && <LoadingSpinner></LoadingSpinner>}
        {!fetching && posts.map((post) => <li key={post.id}>{post.title}</li>)}
      </ul>
    </div>
  );
};

export default DataFetching;
