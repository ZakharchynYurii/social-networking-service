import React from 'react';
import './Post.css'
import Avatar from "../../UserInfo/Avatar/Avatar";

const Post = (props) => {
    let {title, body} = props;
    return(
        <div className={'post'}>
            <div className={'post-avatar'}>
                <Avatar />
            </div>
            <div className={'post-wrapper'}>
                <div className={'post-title'}>{title}</div>
                <div className={'post-body'}>{body}</div>
            </div>
        </div>
    );    
}

export default Post;