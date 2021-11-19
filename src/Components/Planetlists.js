import React from 'react'
import { useState } from 'react';
import planet1 from '../Strapi assets/planets/planet1.svg';
import planet2 from '../Strapi assets/planets/planet2.svg';
import planet3 from '../Strapi assets/planets/planet3.svg';
import planet4 from '../Strapi assets/planets/planet4.svg';
import planet5 from '../Strapi assets/planets/planet5.svg';
import planet6 from '../Strapi assets/planets/planet6.svg';
import planet7 from '../Strapi assets/planets/planet7.svg';
import planet8 from '../Strapi assets/planets/planet8.svg';
import planet9 from '../Strapi assets/planets/planet9.svg';
import PlanetCards from './PlanetCards';
import Psidebar from './Psidebar';


const Planetlists = () => {

    const [planets, setPlanets] =  useState([
        {planetImg: planet1, planetName: 'Planet Alpa', planetPop: '235', id:1},
        {planetImg: planet2, planetName: 'Planet Alpa', planetPop: '235', id:2},
        {planetImg: planet3, planetName: 'Planet Alpa', planetPop: '235', id:3},
        {planetImg: planet4, planetName: 'Planet Alpa', planetPop: '235', id:4},
        {planetImg: planet5, planetName: 'Planet Alpa', planetPop: '235', id:5},
        {planetImg: planet6, planetName: 'Planet Alpa', planetPop: '235', id:6},
        {planetImg: planet7, planetName: 'Planet Alpa', planetPop: '235', id:7},
        {planetImg: planet8, planetName: 'Planet Alpa', planetPop: '235', id:8},
        {planetImg: planet9, planetName: 'Planet Alpa', planetPop: '235', id:9},

    ]);

    return (
        <div>
            {
                <PlanetCards planets={planets}/>
            }
            
        </div>
    )
}

export default Planetlists
