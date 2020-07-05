import React,{ memo , useEffect, useState,Fragment} from "react";
import axios from 'axios';
import { getDateDifferenceInHours, getDomainName } from '../../util/util';
import './posts.scss';


const Posts = (props)=>{ 
    const { upDateState , posts, setPosts} = props;

 const [pageNumber, setPageNumber] = useState(1);

    useEffect(()=>{
    upDateState(pageNumber,setPosts);
},[pageNumber])

return(
    <table className='posts' cellSpacing='0'>
        <thead>
        <th>Comments</th>
        <th>Vote Count</th>
        <th>Up Vote</th>
        <th>News Details</th>
        </thead>
        <tbody>
        {posts.map((post, index)=> (
            <tr>
            <td>{post.num_comments | 0}</td>
            <td className={post.points > 100 ? 'orange': post.points > 50 ? 'indianred' : null}>{post.points || 0}</td>
            <td></td>
            <td>
            <a href={post.url}>{post.title || 'No Title Available'}</a>
            <span className='smallText'> <a href={post.url} className='domain'>({getDomainName(post.url)})</a> by <a>{post.author}</a> </span>
             <span className='smallText'> {getDateDifferenceInHours(post.created_at)} hours ago </span>
            </td>
            </tr>
        ))}
        </tbody>
        <tfoot>
            <tr>
                <td colspan='4'>
                <a onClick={()=> pageNumber > 1 &&  setPageNumber(pageNumber-1)}>Previous</a> 
                | <a onClick={()=>setPageNumber(pageNumber+1)}>Next</a>
                </td>
            </tr>
        
        </tfoot>
    </table>
);
    
}
export default memo(Posts);