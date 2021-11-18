import React from 'react'
import { Card,Row,Col } from 'react-bootstrap'

const PlanetCards = (props) => {

    const planets = props.planets

    return (
        <Row xs={1} md={3} className="g-3">
            {planets.map((planet) => (
                <Col className="planet-list">
                <Card key={planet.id} className="pcard">
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
        
    );
}

export default PlanetCards
