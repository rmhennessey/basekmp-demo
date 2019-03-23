import React, { Component } from 'react'
import { Card, Button } from 'react-bootstrap';

export default class Footer extends Component {
  render() {
    return (
      <div>
        <Card className='footer-div'>
            <Card.Footer style={{backgroundColor: '#00A388', color:'white'}} as="h5">BASEKMP - Your Home for Adventure</Card.Footer>
            <Card.Body>
                <Card.Title>Founded By: Andrea & Rory</Card.Title>
                <Card.Text>
                Get in touch with us below
                </Card.Text>
                <div className='footer-btn'>
                    <>
                        <style type="text/css">
                        {`
                        .btn-info {
                            background-color: #00A388;
                            color: white;
                        }
                        `}
                        </style>
                    <Button className='footer-btn-indy' variant="info" href="mailto:andrea.n.pagnanelli@gmail.com" target="_blank">Email Andrea</Button>
                    <Button className='footer-btn-indy' variant="info" href="mailto:rory.hennessey@gmail.com" target="_blank" >Email Rory</Button>
                    </>
                </div>
            </Card.Body>
        </Card>
      </div>
    )
  }
}