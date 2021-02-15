import React from 'react';
import Avatar from "./Avatar/Avatar";
import UserInfoDescription from "./UserInfoDescription/UserInfoDescription";
import './UserInfo.css'

const UserInfo = () => {
    return(
        <div className={'userInfo'}>
            <Avatar />
            <UserInfoDescription />
        </div>
    );    
}

export default UserInfo;