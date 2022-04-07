import styled from 'styled-components';
import { darken } from 'polished';


export const Header = styled.header`
    width: 100%; 
    padding: 10px 0;
    background: #34d22c;

    display: flex;
    align-items: center;
    justify-content: center;

    h1 { 
        font-size: 2rem;
        color: #fff;

        margin-left: 20px;
    }

    img {
        width: 50px;
        height: 50px;
    }
`;

export const Calc = styled.div`
    /* border: 1px solid red; */
    padding: 40px 0;
    display: flex;
    
    align-items: center;
    justify-content: center;

    ul {
        list-style: none;

        li + li {
            margin-top: 10px;
        }
    }

    input {
        width: 100%;
        font-size: 1.3rem;

        padding: 5px 10px;

        border-radius: 7px;
        border: none;
    }

    button {
        background-color: #fff;
        border: none;
        border-radius: 7px;

        box-shadow: 1px 3px 3px gray;
        width: 90px;
        height: 60px;
        padding: 0;

        text-align: center;
        justify-content: center;

        font-size: 1.5rem;

        & + button {
            margin-left: 10px;
        }

        transition: 0.2s;

        &:hover {
            background-color: #34d22c;
            color: #fff;
        }

        &:active {
            background-color: ${darken(0.2, '#34d22c')};
        }

    }

    #zero {
        width: 190px;
    }
    
`;