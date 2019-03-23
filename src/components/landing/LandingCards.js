import React from 'react';
import { Card, Button } from "react-bootstrap";

export default function LandingCards() {
  return (
    <div>
        <div className='card-info'> 
            <Card style={{ width: '350px' }}>
                <Card.Img variant="top" src="./cabinAssets/Card_1.png" />
                <Card.Body>
                    <Card.Title>Explore</Card.Title>
                    <Card.Text>
                    Find your adventure-ready home today!
                    </Card.Text>
                    <br/>
                    <>
                        <style type="text/css">
                        {`
                        .btn-info {
                            background-color: #00A388;
                            color: white;
                        }

                        .btn-xxl {
                        padding: 1rem 1.5rem;
                        font-size: 1.5rem;
                        }
                        `}
                        </style>
                    <Button variant="info">Start Your Adventure</Button>
                    </>
                </Card.Body>
            </Card>
            <Card style={{ width: '350px' }}>
                <Card.Img variant="top" src="./cabinAssets/Card_2.png" />
                <Card.Body>
                    <Card.Title>Adventure First</Card.Title>
                    <Card.Text>
                    See where your favorite activities can take you
                    </Card.Text>
                    <>
                        <style type="text/css">
                        {`
                        .btn-info {
                            background-color: #00A388;
                            color: white;
                        }

                        .btn-xxl {
                        padding: 1rem 1.5rem;
                        font-size: 1.5rem;
                        }
                        `}
                        </style>
                    <Button variant="info">Discover</Button>
                    </>
                </Card.Body>
            </Card>
            <Card style={{ width: '350px' }}>
                <Card.Img variant="top" src="./cabinAssets/Card_3.png" />
                <Card.Body>
                    <Card.Title>List Your Home</Card.Title>
                    <Card.Text>
                    Join the Basekmp community and connect with those who will most value your home
                    </Card.Text>
                    <>
                        <style type="text/css">
                        {`
                        .btn-info {
                        background-color: #00A388;
                        color: white;
                        }

                        .btn-xxl {
                        padding: 1rem 1.5rem;
                        font-size: 1.5rem;
                        }
                        `}
                        </style>
                    <Button variant="info">Join Today</Button>
                    </>
                </Card.Body>
            </Card>
        </div>
    </div>
  )
}