import React from 'react';

const Post = ({ title, body, author, imgUrl }) => (
    <div className="post">
        <img src={imgUrl} alt={title} />
        <h2>{title}</h2>
        <p>{body}</p>
        <p>Author: {author}</p>
    </div>
);

const Posts = () => {
    const blogPosts = [
        {
            title: "JavaScript",
            body: `JavaScript is the world's most popular lightweight, interpreted compiled programming language...`,
            author: "Nishant Singh",
            imgUrl: "https://media.geeksforgeeks.org/img-practice/banner/diving-into-excel-thumbnail.png",
        },
        {
            title: "Data Structure",
            body: `There are many real-life examples of a stack...`,
            author: "Suresh Kr",
            imgUrl: "https://media.geeksforgeeks.org/img-practice/banner/coa-gate-2022-thumbnail.png",
        },
        {
            title: "Algorithm",
            body: `The word Algorithm means “a process or set of rules to be followed in calculations...`,
            author: "Monu Kr",
            imgUrl: "https://media.geeksforgeeks.org/img-practice/banner/google-test-series-thumbnail.png",
        },
        {
            title: "Computer Network",
            body: `An interconnection of multiple devices, also known as hosts...`,
            author: "Sonu Kr",
            imgUrl: "https://media.geeksforgeeks.org/img-practice/banner/cp-maths-java-thumbnail.png",
        },
    ];

    return (
        <div className="posts-container">
            {blogPosts.map((post, index) => (
                <Post key={index} {...post} />
            ))}
        </div>
    );
};

export default Posts;
