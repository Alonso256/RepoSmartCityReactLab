import React from 'react';
import { Row, Col, Container, Card, CardHeader, CardBody, CardTitle, CardText } from 'reactstrap';

function Example(props) {
    return (
        <Container>
            <Row>
                <Col xs="12" sm="6" md="6" lg="4">
                    <Card
                        className="my-2"
                        color="primary"
                        inverse
                    >
                        <CardHeader>
                            Header
                        </CardHeader>
                        <CardBody>
                            <CardTitle tag="h5">
                                Special Title Treatment
                            </CardTitle>
                            <CardText>
                                With supporting text below as a natural lead-in to additional content.
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>
                <Col xs="12" sm="6" md="6" lg="4">
                    <Card
                        className="my-2"
                        color="secondary"
                        inverse
                    >
                        <CardHeader>
                            Header
                        </CardHeader>
                        <CardBody>
                            <CardTitle tag="h5">
                                Special Title Treatment
                            </CardTitle>
                            <CardText>
                                With supporting text below as a natural lead-in to additional content.
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>
                <Col xs={{ span: 12 }} sm={{ span: 6 }} lg={{ span: 4 }}></Col>
            </Row>
        </Container>
    );
}
export default Example;