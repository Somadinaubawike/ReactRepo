import React from 'react'
import { Card,Row,Col } from 'react-bootstrap'
import Psidebar from './Psidebar'
import { useState } from 'react'

const PlanetCards = (props) => {

    const planets = props.planets

    const [open, setOpen] = useState(false)

    const handleOpen = () => {
        setOpen(true)
    };

    const handleClose = () => {
        setOpen(false)
    };

    return (
        <div className="d-flex">
            <div className="">
                <Row xs={1} md={3} className="g-3">
                    {planets.map((planet) => (
                        <Col className="planet-list">
                        <Card key={planet.id} className="pcard" onClick = {handleOpen}>
                            <Card.Img variant="top" src={planet.planetImg} />
                            <Card.Body>
                                <Card.Title>{planet.planetName}</Card.Title>
                                <Card.Text>
                                    {planet.planetPop}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        </Col>
                    ))}
                </Row>
            </div>

            <div className="">
                {open === true? <Psidebar close = {handleClose}/>: ''} 
            </div>
            
        </div>
        
    );
}

export default PlanetCards
