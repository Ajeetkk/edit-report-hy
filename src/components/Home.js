import React from 'react'
import { Container, Row, Col } from 'react-grid-system';

import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import './homecss.css';
import SideNavPage from './SideNavPage'
import Reports from './Reports'
import EditReports from './EditReports'
class Home extends React.Component {
    constructor(props) {
        super(props)

    }

    render() {
        return (
            <Router>

                <Container fluid>
                    <Row>
                        <Col sm={2}>

                            <SideNavPage />
                        </Col>
                        <Col sm={10} style={{ background: "#f1f1f1" }}>

                            <Switch>
                                <Route exact path="/">
                                    <Reports />
                                </Route>
                                <Route path="/EditReports">
                                    <EditReports />
                                </Route>

                            </Switch>

                        </Col>

                    </Row>
                    <Row style={{ height: "30px", background: "white" }}>
                        <Col sm={12}>
                        </Col>
                    </Row>

                </Container>

            </Router>
        )
    }
}
export default Home