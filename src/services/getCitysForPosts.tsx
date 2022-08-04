import axios from "axios";
import { useState, useEffect} from "react";
import { getPosts } from "./getPosts";

export function getCitysForPosts() {
    const posts = getPosts('./stays.json');
    const Allcitys = posts.map(post => (`${post.city}, ${post.country}`));
      const citys = [...new Set(Allcitys)];
    
    return citys
    // const [posts, setPosts] = useState<PostsInterface[]>([])

    // useEffect(() => {
    //     axios.get(url)
    //         .then(response => {
    //             setPosts(response.data)
    //         })
    // },[]);

    // return { posts }
}