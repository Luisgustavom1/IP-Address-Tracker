import React from 'react'
import styled from 'styled-components'


export default function Datas(){
    const DivData = styled.div`
        background-color: white;
        border-radius: .7rem;
        width: 70%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 3rem 0;
        position: fixed;
        left: 50%;
        transform: translateX(-50%);
        div{
            padding: 2.0rem 2rem 2.5rem 2rem;
            h1{
                color: hsl(0, 0%, 59%);
                font-size: .8rem;
                font-weight: 700;
                margin-bottom: .6rem;
            }
            p{
                font-size: 1.2rem;
                font-weight: 500;
                color: hsl(0%, 0%, 17%);
            }
        }
        span{
            content: '';
            border: 1px solid #969696;
            height: 2rem;
        }

    `
    return(
        <DivData>
            <div>
                <h1>IP Address</h1>
                <p>192.212.222.98</p>
            </div>
                <span></span>
            <div>
                <h1>Location</h1>
                <p>Brookly, NY 10001</p>
            </div>
                <span></span>
            <div>
                <h1>Timezone</h1>
                <p>UTC -5:00</p>
            </div>
                <span></span>
            <div>
                <h1>ISP</h1>
                <p>SpaceX Starlink</p>
            </div>
        </DivData>
    )
}