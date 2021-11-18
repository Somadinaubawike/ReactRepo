import React from 'react'
import { Form } from 'react-bootstrap'
import { useState } from 'react';
import character1 from '../Strapi assets/characters/character1.png';
import character2 from '../Strapi assets/characters/character2.png';
import character3 from '../Strapi assets/characters/character3.png';
import character4 from '../Strapi assets/characters/character4.png';
import character5 from '../Strapi assets/characters/character5.png';
import character6 from '../Strapi assets/characters/character6.png';
import character7 from '../Strapi assets/characters/character7.png';
import character8 from '../Strapi assets/characters/character8.png';
import character9 from '../Strapi assets/characters/character9.png';
import CharacterCards from './CharacterCards';


const Characterslist = () => {

    const [characters, setCharacters] =  useState([
        {Img: character1, name: 'Brooklyn Simmons', friend: '23 friends', id:1},
        {Img: character2, name: 'cameron Williamson', friend: '23 friends', id:2},
        {Img: character3, name: 'Leslie Alexander', friend: '23 friends', id:3},
        {Img: character4, name: 'kristin Watson', friend: '23 friends', id:4},
        {Img: character5, name: 'Jenny Wilson', friend: '23 friends', id:5},
        {Img: character6, name: 'Marvin McKinney', friend: '23 friends', id:6},
        {Img: character7, name: 'Jerome Bell', friend: '23 friends', id:7},
        {Img: character8, name: 'Guy Hawkins', friend: '23 friends', id:8},
        {Img: character9, name: 'Robert Fox', friend: '23 friends', id:9},

    ]);

    return (
        <div>
            {
                <CharacterCards characters={characters}/>
            }
        </div>
    )
}

export default Characterslist
