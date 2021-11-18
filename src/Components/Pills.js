import React from 'react'
import { Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Pills = () => {
    return (
        <Nav variant="pills" defaultActiveKey="/home">
            <Nav.Item>
                <Link to="/home" className="character-link">PLANETS</Link>
            </Nav.Item>
            <Nav.Item>
                <Link eventKey="link-1" to="/Character" className="character-link">CHARACTERS</Link>
            </Nav.Item>
        </Nav>
    )
}

export default Pills
