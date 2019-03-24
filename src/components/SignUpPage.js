import React, { Component } from 'react'
import { Container, Row, Col, Form, Button} from 'react-bootstrap';

export default class SignUpPage extends Component {
  render() {
    return (
      <div>
        <Container>
            <Row>
                <Col style={{ maxWidth: 350}} className='form-column-one'>
                <h5>Have an adventure-ready home you want to share with our community? </h5>
                <h5>Create an account below!</h5>
                <Form className='form-column-one-form'>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <>
                      <style type="text/css">
                      {`
                      .btn-sign-up {
                          background-color: #00A388;
                          color: white;
                      }
                      `}
                      </style>
                    <Button variant="sign-up" type="submit">
                        Join BASEKMP
                    </Button>
                    </>
                </Form>
                </Col>

                <Col style={{ maxWidth: 795}} form-column-two>
                  <img src='./cabinAssets/sign_up_hero_two.png' alt='Join BASEKMP' />
                </Col>
            </Row>
        </Container>
      </div>
    )
  }
}
