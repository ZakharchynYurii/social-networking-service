import React from 'react';
import './Posts.css'
import Post from "./Post/Post";

const Posts = () => {
    return(
        <div className={'posts'}>
            <div className={'posts-title'}>My posts:</div>
            <div className={'posts-form'}>
                <textarea className={'posts-textarea'} name="" id="" cols="127" rows="5"></textarea>
                <button className={'posts-add-btn'}>Add post</button>
            </div>
            <Post title={"Lorem ipsum dolor sit amet."} body={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus error nobis numquam. Accusamus, accusantium blanditiis cumque dignissimos, dolorem doloremque ducimus eum fugiat harum in molestias nam quas qui suscipit ut!"}/>
            <Post title={"Lorem ipsum dolor sit amet."} body={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus error nobis numquam. Accusamus, accusantium blanditiis cumque dignissimos, dolorem doloremque ducimus eum fugiat harum in molestias nam quas qui suscipit ut!"}/>
            <Post title={"Lorem ipsum dolor sit amet."} body={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus error nobis numquam. Accusamus, accusantium blanditiis cumque dignissimos, dolorem doloremque ducimus eum fugiat harum in molestias nam quas qui suscipit ut!"}/>
            <Post title={"Lorem ipsum dolor sit amet."} body={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus error nobis numquam. Accusamus, accusantium blanditiis cumque dignissimos, dolorem doloremque ducimus eum fugiat harum in molestias nam quas qui suscipit ut!"}/>
            <Post title={"Lorem ipsum dolor sit amet."} body={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus error nobis numquam. Accusamus, accusantium blanditiis cumque dignissimos, dolorem doloremque ducimus eum fugiat harum in molestias nam quas qui suscipit ut!"}/>
        </div>
    );    
}

export default Posts;