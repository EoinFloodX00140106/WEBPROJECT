// Site Navigation menu
// https://www.sitepoint.com/responsive-fluid-width-variable-item-navigation-css/
// https://www.w3schools.com/Css/css_navbar.asp

import Link from 'next/link';

const Nav = () => (
   <div>
       <nav>
           <ul>
            <li><Link href="/index"><a>Home</a></Link></li>
            <li><Link href="/ESPN"><a>ESPN News</a></Link></li>
            <li><Link href="/NHLNews"><a>National Hockey League  News</a></Link></li>
            <li><Link href="/BleacherReport"><a>The Bleacher Report</a></Link></li>
            <li><Link href="/NFLNews"><a>Nation Football League  News</a></Link></li>
            <li><Link href="/FoxSports"><a>Fox Sports News</a></Link></li>
            
             </ul>
       </nav>
       {/* Define css for this page or component */}
       {/* Note back ticks `` surrounding css are required */}
       <style jsx>{`
        nav {
            max-width: 900px;
            background: #f08080;
            border: 1px solid #ccc;
            border-right: none;
        }


        nav ul {
            display: flex;
            flex-direction: row;
            margin: 0;
            padding: 0;
        }

        nav ul li {
            list-style: none;
            float: left;
            flex-grow: 1;
            text-align: center;
            border-left: 1px solid #fff;
            border-right: 1px solid #ccc;
            width: 16.6667%; /* fallback for non-calc() browsers */
            width: calc(100% / 6);
            box-sizing: border-box;
        }

        nav ul li:first-child {
            border-left: none;
        }

        nav ul li a {
            font-size: 0.8em;
            display: block;
            text-decoration: none;
            color: #616161;
            padding: 5px 0;
        }

        nav ul li:hover {
            background: black;
        }
        nav ul li a:hover {
            color: white;
        }
       

        `}</style>
   </div> 
)

export default Nav;

