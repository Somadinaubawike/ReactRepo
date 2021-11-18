import React from 'react'
import { Card,Row,Col } from 'react-bootstrap'

const CharacterCards = (props) => {

    const characters = props.characters

    return (
        <Row xs={1} md={3} className="g-3">
            {characters.map((character) => (
                <Col className="Character-list">
                    <Card key={character.id} className="pcard">
                        <Card.Img variant="top" src={character.Img} />
                        <Card.Body>
                            <Card.Title>{character.name}</Card.Title>
                            <Card.Text>
                                {character.friend}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
        
    );
}

export default CharacterCards
