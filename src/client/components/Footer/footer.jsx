import React,{ memo } from "react";
import './footer.scss';

const Header = (props)=>{
    return(
        <footer className="footer">
           <ul className='navigation'>
               <li><a href='/Guidelines'>Guidelines</a></li>
               <li><a href='/faq'>FAQ</a></li>
               <li><a href='/Support'>Support</a></li>
               <li><a href='/api'>API</a></li>
               <li><a href='/lists'>Lists</a></li>
               <li><a href='/bookmarklet'>Bookmarklet</a></li>
               <li><a href='/legal'>Legal</a></li>
               <li><a href='/apply'>Apply To YC</a></li>
               <li><a href='/contact'>Contact</a></li>
           </ul>
           <div>
            <label htmlFor="searchBox"className='searchLabel'>Search: </label>
            <input type='text' id='searchBox'/>
           </div>
        </footer>
    );

}

export default memo(Header);