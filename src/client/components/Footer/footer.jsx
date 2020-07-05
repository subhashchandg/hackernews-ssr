import React,{ memo } from "react";

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
           <style jsx>
               {`
               .footer{
                display:flex;
                flex-direction: column;
                font-size:10px;
                justify-content: center;
                align-items: center;
                padding-bottom:25px;
                border-top: 2px solid orange;
            }
            .navigation{
                display:flex;
            }
            .navigation li{
                list-style-type: none;
            }
            .navigation li a{
                border-right:1px solid black;
                padding: 0 5px;
            }
            .searchLabel{
                font-size: 13px;
                font-size: 10pt;
                color: #828282;;
            }`}
           </style>
        </footer>
    );

}

export default memo(Header);