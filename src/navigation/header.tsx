import React from "react";
import Styled from 'styled-components';
import { useTheme } from 'styled-components';
import {Link} from 'react-router-dom';

const Header: React.FC=()=>{
    const theme = useTheme();
    const NavBar = Styled.div`
    background-color: ${theme.primaryColor};
    width: 100%;
    height: 60px;
    box-shadow: 0px 5px 5px 0px #aaa;
    position: sticky;
    opacity: 0.85;
    display: flex;
    z-index: 100;
        & .brand{
            padding-left: 35px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 2rem
        }
        & .navLinks{
            padding-right: 35px;
            display: flex;
            align-items: center;
            margin-left: auto;
            list-style: none;
            padding-right: 15px;
            border: none;
            outline: none;
            cursor: pointer;
            padding: 10px 16px;
            & > div{
                margin: 15px;
            }
            & > div > a{
                text-decoration: none;
            }
            & :hover {
                color: chocolate;
              }
            & :active {
                //background-color: #666;
                color: chocolate;;
              }
        }
    `

    return(
        <>
            <NavBar>
                <div className="brand">Quiz application</div>
                <div className="navLinks">
                    <div><Link to="/">Home</Link></div>
                    <div>Create quiz</div>
                </div>
            </NavBar>
        </>
    )
}

export default Header;
