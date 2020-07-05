import React,{ memo , useEffect, useState,Fragment} from "react";
import axios from 'axios';
import { getDateDifferenceInHours, getDomainName } from '../../util/util';


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
            <td><div class="votearrow" title="upvote" onClick={()=> props.updateUpvoteCount(post.objectID)}></div></td>
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
        <style jsx>
            {`
            .posts{
                list-style-type: decimal;
                padding:0 10px;
                background-color: #f6f6ef;
            }
            .posts thead{
                background-color: #ff6600;
                color: white;
            }
            .posts tfoot{
                text-align: right; 
            }
            .posts tfoot a{
                color: #ff6600;
            }
            .orange{
                color: #ff6600; 
            }
            .indianred{
                color:indianred;
            }
            .votearrow{
                width: 10px;
                height: 10px;
                border: 0px;
                margin: 3px 2px 6px;
                background: url(https://news.ycombinator.com/grayarrow.gif) no-repeat;
            }
            .smallText .domain{
                    color: grey;
                    font-size:12px; 
            }`}
        </style>
    </table>
);
    
}
export default memo(Posts);