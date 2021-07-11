import React from 'react'
import styled from 'styled-components'

export default function Map(){
    const Map = styled.div`
        div{
            width: 100vw;
            height: 65vh;
            position: absolute;
            top: 35%;
            z-index: 1;
        }
    `   
    return(
        <Map>
            <div id='map'></div>
        </Map>
    )
}

