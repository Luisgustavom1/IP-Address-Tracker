import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import AppContext from '../context/context';
import Arrow from '../images/icon-arrow.svg'
import HeaderBg from '../images/pattern-bg.png'

const axios = require('axios');

const DivHeader = styled.div`
    background: url(${HeaderBg}) no-repeat;
    background-size: cover;
    height: 250px;
    margin: 0 auto;
    text-align: center;
    padding-top: 2.3rem;
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
            color: hsl(0, 0%, 17%);
            font-size: .9rem;
        }
    }
    section{
        background-color: black;
        border-radius: 0 .9rem .9rem 0;
        &:hover{
            background-color: hsl(0, 0%, 17%);
        }
        img{
            padding: 1rem;
        }
    }

`;
export default function HeaderAndInput(){
    const [ip, setIp] = useState('')
    const {setToDatas} = useContext(AppContext)

    const getDatas = async () => {
        if(ip.length !== 0){
            await axios.get(`https://geo.ipify.org/api/v1?apiKey=at_rwNFfq3KZVNlWT47DO4GZzSCP20k5&ipAddress=${ip}`)
                .then((data) => {
                    setToDatas([data])
                })
        }else{
            alert('Digite um ip primeiro')
        }
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