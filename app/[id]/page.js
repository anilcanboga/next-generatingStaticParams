import React from "react";
import styles from '../page.module.css'

export const getAllPosts = async () => {
    const result = await fetch(`https://jsonplaceholder.typicode.com/posts/`);
    const data = await result.json();
    return data;
};

export const getSinglePost = async (id) => {
    const result = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    const data = await result.json();
    return data
};

const BlogPage = async ({ params }) => {
    console.log("params: ", params);
    const veri = await getSinglePost(params.id);
    return <div className={styles.container}>{veri.title}</div>;
};

export default BlogPage;

export async function generateStaticParams() {
    console.log("generating static params");
    const posts = await getAllPosts();
    return posts.map((post) => ({ id: `${post.id}` }));
}
