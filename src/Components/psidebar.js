import React from 'react'
import { PlusSquareFill, XSquareFill } from 'react-bootstrap-icons'
import { useState } from 'react'
import character10 from '../Strapi assets/characters/character10.png';
import character11 from '../Strapi assets/characters/character11.png';
import character12 from '../Strapi assets/characters/character12.png';
import character13 from '../Strapi assets/characters/character13.png';
import character14 from '../Strapi assets/characters/character14.png';
import character15 from '../Strapi assets/characters/character15.png';
import character16 from '../Strapi assets/characters/character16.png';


const Psidebar = ({close}) => {

    const [characters, setCharacters] =  useState([
        {Img: character10, name: 'Brooklyn Simmons', friend: '23 friends', id:10},
        {Img: character12, name: 'cameron Williamson', friend: '23 friends', id:12},
        {Img: character13, name: 'Leslie Alexander', friend: '23 friends', id:13},
        {Img: character14, name: 'kristin Watson', friend: '23 friends', id:14},
        {Img: character15, name: 'Jenny Wilson', friend: '23 friends', id:15},
        {Img: character16, name: 'Marvin McKinney', friend: '23 friends', id:16},
        {Img: character11, name: 'Jerome Bell', friend: '23 friends', id:11}

    ]);

    return (
        <div className="bg-light container psideb py-3 f-family">
            <div className="d-flex justify-content-end p-3">
                <XSquareFill  onClick = {close} size={40} color="grey"/>
            </div>
            <div className="p-3"><h1>Planet Alpha</h1></div>
            <div className="p-3">
                <p>Planet Alpa is a place to be is like everything related to planets. I know it's a bit meta, but come and see for yourself</p>
                <p>population</p>
                <p>235</p>
            </div>
            <div className="d-flex p-3 justify-content-space-between">
                <p>CHARACTER</p>
                <PlusSquareFill className="justify-content-end"/>
            </div>
            <div>
                {characters.map((character) => (
                    <div key={character.id} className="d-flex flex-row my-3">
                        <div className="psideb-img">
                            <img src={character.Img} className="img-fluid" />
                        </div>
                        <div className="pside-cardbody">
                            <div className="pside-name"><p>{character.name}</p></div>
                            <div className="pside-friends"><p>{character.friend}</p></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Psidebar
