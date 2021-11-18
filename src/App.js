import React from 'react'
import { Container,Row,Col} from 'react-bootstrap'
import Characterslist from './Components/Characterslist'
import Navigationbar from './Components/Navigationbar'
import Pills from './Components/Pills'
import Planetlists from './Components/Planetlists'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'


const App = () => {
    return (
        <Router>
            <Container>
                <Navigationbar/>
                <Pills/>
                <div className="content">
                    <Switch>
                        <Route exact path = "/home">
                            <Planetlists/>
                        </Route>
                        <Route  path = "/Character">
                            <Characterslist/>
                        </Route>
                    </Switch>
                </div>
                Hello World
            </Container>
        </Router>
    )
}

export default App
