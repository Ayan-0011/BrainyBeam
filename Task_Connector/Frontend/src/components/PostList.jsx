import { useEffect, useState } from "react";
import axios from "axios";
import PostCard from "./PostCard";

function PostList() {
    const [posts, setPosts] = useState(null);

    const fetchPosts = async () => {
        const res = await axios.get("http://localhost:3000/post");

        // console.log(res.data);
        setPosts(res.data.post);

    };

    useEffect(() => {
        fetchPosts();
    }, []);

    return (
        <div>
            {posts?.map((post) => (
                <PostCard key={post._id} post={post} />
            ))}
        </div>
    );
}

export default PostList;