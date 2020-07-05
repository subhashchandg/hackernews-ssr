import React,{ memo , useEffect, useState,Fragment} from "react";
import axios from 'axios';
import Posts from './posts/posts';
import Chart from './chart/chart'

const upDateState= (pageNumber,setPostsCb)=>{
    axios.get(`http://hn.algolia.com/api/v1/search?page=${pageNumber}`)
    .then(response=>{
        setPostsCb(response.data.hits);
    })
};

const PostsContainer =()=>{

    const [posts,setPosts] = useState([]);

    useEffect(()=>{
        upDateState(1,setPosts);
    },[])

    return (
        <Fragment>
        <Posts posts={posts} upDateState={upDateState} setPosts={setPosts}/>
        <Chart posts={posts}/>
        </Fragment>
    );
}

export default memo(PostsContainer);