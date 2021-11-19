import React from 'react'
import { Card,Row,Col } from 'react-bootstrap'
import Csidebar from './Csidebar'
import { useState } from 'react'

const CharacterCards = (props) => {

    const characters = props.characters

    const [mate, setMate] = useState([]);
    console.log(mate);

    const [open, setOpen] = useState(false)

    const handleOpen = () => {
        setOpen(true)
    };

    const handleClose = () => {
        setOpen(false)
    };

    return (
        <div className="d-flex">
            <Row xs={1} md={3} className="g-3">
                {characters.map((character) => (
                    <Col className="Character-list">
                        <Card key={character.id} className="pcard" onClick = {handleOpen}>
                            <div onClick = {() => setMate(character)}>
                                <Card.Img variant="top" src={character.Img} />
                                <Card.Body>
                                    <Card.Title>{character.name}</Card.Title>
                                    <Card.Text>
                                        {character.friend}
                                    </Card.Text>
                                </Card.Body>
                            </div>
                        </Card>
                    </Col>
                ))}
            </Row>
            { open === true? <Csidebar close = {handleClose} pname ={mate.name} firstname= {mate.shname} />: ''}
        </div>

    
    );
}

export default CharacterCards
