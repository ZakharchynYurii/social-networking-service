import React from 'react';
import './Main.css';
import PanoramPhoto from "../PanoramPhoto/PanoramPhoto";
import UserInfo from "../UserInfo/UserInfo";
import Posts from "../Posts/Posts";

const Main = () => {
    return(
        <main className={'main'}>
            <PanoramPhoto />
            <UserInfo />
            <Posts />
        </main>
    );
}

export default Main;