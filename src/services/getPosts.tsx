import axios from "axios";
import { useState, useEffect } from "react";

export interface PostsInterface {
  city: string;
  country: string;
  superHost: boolean;
  title: string;
  rating: number;
  maxGuests: number;
  type: string;
  beds: number;
  photo: string;
}

export function getPosts(url: string) {
  const [posts, setPosts] = useState<PostsInterface[]>([]);

  useEffect(() => {
    axios.get(url).then((response) => {
      setPosts(response.data);
    });
  }, []);

  return posts;
}
