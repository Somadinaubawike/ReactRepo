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
import Planetlists from './Planetlists';


const Csidebar= ({close, pname, firstname}) => {

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
        <div className="bg-white Csidebar container my-4">
            <div className="d-flex justify-content-end">
                <XSquareFill onClick = {close}/>
            </div>
            <div><h1>{pname}</h1></div>
            <div>
                <p>{firstname} is really a nice person. She has been living in planet Alpha for the last 10 years.</p>
            </div>
            <div className="row">
                <div className="col-6">
                    <p>Planet</p>
                    <h5>Alpha</h5>
                </div>
                <div className="col-6">
                    <p>Friends</p>
                    <h5>23</h5>
                </div>
            </div>
            <div className="d-flex">
                <p>FRIENDS</p>
            </div>
            <div>
                {characters.map((characta) => (
                    <div key={CharacterData.id} className="d-flex flex-row my-3">
                        <div className="psideb-img">
                            <img src={characta.Img} className="img-fluid" />
                        </div>
                        <div className="pside-cardbody">
                            <div className="pside-name"><p>{characta.name}</p></div>
                            <div className="pside-friends"><p>{characta.friend}</p></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Csidebar


