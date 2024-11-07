import React, { useState } from 'react';
import { Button, ButtonGroup, Row, Col, Card, CardBody, CardTitle, CardSubtitle, CardText, Container } from 'reactstrap';

function Example(props) {
    const [cSelected, setCSelected] = useState([]);
    const [rSelected, setRSelected] = useState(null);

    const onCheckboxBtnClick = (selected) => {
        const index = cSelected.indexOf(selected);
        if (index < 0) {
            cSelected.push(selected);
        } else {
            cSelected.splice(index, 1);
        }
        setCSelected([...cSelected]);
    };
    return (
        <div>
            <h5>Radio Buttons</h5>
            <ButtonGroup>
                <Button

                    color="primary"
                    outline
                    onClick={() => setRSelected(1)}
                    active={rSelected === 1}
                >
                    Radio 1
                </Button>
                <Button
                    color="primary"
                    outline
                    onClick={() => setRSelected(2)}
                    active={rSelected === 2}
                >
                    Radio 2
                </Button>
                <Button
                    color="primary"
                    outline
                    onClick={() => setRSelected(3)}
                    active={rSelected === 3}
                >
                    Radio 3
                </Button>
            </ButtonGroup>
            <p>Selected: {rSelected}</p>

            <h5>Checkbox Buttons</h5>
            <ButtonGroup>
                <Button
                    color="primary"
                    outline
                    onClick={() => onCheckboxBtnClick(1)}
                    active={cSelected.includes(1)}
                >
                    Checkbox 1
                </Button>
                <Button
                    color="primary"
                    outline
                    onClick={() => onCheckboxBtnClick(2)}
                    active={cSelected.includes(2)}
                >
                    Checkbox 2
                </Button>
                <Button
                    color="primary"
                    outline
                    onClick={() => onCheckboxBtnClick(3)}
                    active={cSelected.includes(3)}
                >
                    Checkbox 3
                </Button>
            </ButtonGroup>
            <p>Selected: {JSON.stringify(cSelected)}</p>

            <Container>
                <Row>
                    <Col lg="3" md="4" sm="6" xs="12">
                        <Card body>
                            <CardTitle tag="h5">
                                Special Title Treatment
                            </CardTitle>
                            <CardText>
                                With supporting text below as a natural lead-in to additional content.
                            </CardText>
                            <Button>
                                Go somewhere
                            </Button>
                        </Card>
                    </Col>
                    <Col lg="3" md="4" sm="6" xs="12">
                        <Card>
                            <img
                                alt="Sample"
                                src="https://picsum.photos/300/200"
                            />
                            <CardBody>
                                <CardTitle tag="h5">
                                    Card title
                                </CardTitle>
                                <CardSubtitle
                                    className="mb-2 text-muted"
                                    tag="h6"
                                >
                                    Card subtitle
                                </CardSubtitle>
                                <CardText>
                                    Some quick example text to build on the card title and make up the bulk of the card‘s content.
                                </CardText>
                                <Button>
                                    Button
                                </Button>
                            </CardBody>
                        </Card>
                    </Col>
                    {/* 
                    <Col lg="3" md="4" sm="6" xs="12">
                        <Card body>
                            <CardTitle tag="h5">
                                Special Title Treatment
                            </CardTitle>
                            <CardText>
                                With supporting text below as a natural lead-in to additional content.
                            </CardText>
                            <Button>
                                Go somewhere
                            </Button>
                        </Card>
                    </Col> */}
                </Row>
            </Container>
        </div>
    );
}

export default Example;