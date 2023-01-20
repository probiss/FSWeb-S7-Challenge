import React from "react";
import styled from "styled-components";
import logo from "../partial/ghost.png";
import { Link } from "react-router-dom";

const StyledHeader = styled.div`
    height: 8vh;
    background-color: #465775;
    padding: 0 80px ;
    display: flex;
    justify-content: space-between;
    justify-items: center;
    align-items: center;

    .logo-container {
        flex: 0.5;

        img {
            height:6vh;
        }
    }

    .menu-container {
        flex:1;
    }

    nav {
        width:100%;
        text-align:center;
    }

    ul {
        list-style:none;
    }
    ul a {
        float: left;
        color: #fff ;
        text-decoration:none;
        font-size: 2.5rem;
    }

    ul a:hover {
        opacity: 0.7;
    }

    ul a:not(:first-child) {
        margin-left: 6rem;
    }

    button {
        background-color: #bee5bf;
        padding: 5px 20px;
        border:none;
        cursor: pointer;
        font-size: 1.5rem;
    }

    .button-container {
        display: flex;
    }


`;

export const Header = () => {
    return (
        <StyledHeader>
            <div className="logo-container">
                <img src={logo} alt="logo" />
            </div> 
            <nav className="menu-container" >
                <ul>
                    <Link to="/" > Ana Sayfa </Link>
                    <Link to="/pizza" > Pizzanı Seç</Link>
                    <Link to="/contact" > İletişim </Link>
                </ul>
            <div className="button-container">
                <nav><button> Ödeme Yap </button></nav>
            </div>
            </nav>
        </StyledHeader>
    )
}