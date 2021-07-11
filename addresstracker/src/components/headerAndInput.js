import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import AppContext from '../context/context';
import Arrow from '../images/icon-arrow.svg'

const axios = require('axios');

export default function HeaderAndInput({theme}){
    const [ip, setIp] = useState('8.8.8.8')
    const {datas,setToDatas} = useContext(AppContext)

    const DivHeader = styled.div`
        margin: 0 auto;
        text-align: center;
        margin-top: 2.3rem;
        h1{
            font-size: 1.5rem;
            color: white;
            font-weight: 500;
            margin-bottom: 1.7rem;
        }
        div{
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
            align-items: center;
            background-color: white;
            width: 33.33%;
            border-radius: .9rem;
            input{
                width: 100%;
                padding-left: 1rem;
                color: ${theme.veryDarkGray};
                font-size: .9rem;
            }
        }
        section{
            background-color: black;
            border-radius: 0 .9rem .9rem 0;
            &:hover{
                background-color: ${theme.veryDarkGray};
            }
            img{
                padding: 1rem;
            }
        }
    
    `;

    const getDatas = () => {
        axios.get(`https://geo.ipify.org/api/v1?apiKey=at_rwNFfq3KZVNlWT47DO4GZzSCP20k5&ipAddress=${ip}`)
            .then((data) => {
                setToDatas([data])
                console.log(datas)
            }) 
    }

    const getIp = (ev) => {
        setIp(ev)
    }
    return(
        <>
            <DivHeader>
                    <h1>IP Address Tracker</h1>
                    <div>
                        <input type='text' name='code' id='code' placeholder='Search for any IP address or domain' value={ip} onChange={(e) => getIp(e.target.value)}></input>
                        <section onClick={() => getDatas()}><img src={Arrow} alt='Icon of arrow'></img></section>
                    </div>
            </DivHeader>
        </>
    )
}