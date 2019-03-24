import React, { Component } from 'react';
import { CardDeck, Card, Button } from 'react-bootstrap';
import BookNowBtn from './BookNowBtn';


export default class NewListingTest extends Component {
  render() {
    return (
      <div>
          <CardDeck>
            <Card>
                <Card.Img variant="top" src="holder.js/100px160" />
                <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in to
                    additional content. This content is a little bit longer.
                </Card.Text>
                </Card.Body>
                <Card.Footer className='listing-card-footer'>
                    <>
                        <style type="text/css">
                        {`
                        .btn-learn {
                            background-color: white;
                            color: #00A388;
                        }
                        `}
                        </style>
                    <BookNowBtn />
                    <Button href='./cabin-demo' variant="learn" >
                        Learn More
                    </Button>
                    </>
                </Card.Footer>
            </Card>
            <Card>
                <Card.Img variant="top" src="holder.js/100px160" />
                <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                    This card has supporting text below as a natural lead-in to additional
                    content.{' '}
                </Card.Text>
                </Card.Body>
                <Card.Footer className='listing-card-footer'>
                    <>
                        <style type="text/css">
                        {`
                        .btn-learn {
                            background-color: white;
                            color: #00A388;
                        }
                        `}
                        </style>
                    <BookNowBtn />
                    <Button href='./cabin-demo' variant="learn" >
                        Learn More
                    </Button>
                    </>
                </Card.Footer>
            </Card>

            <Card>
                <Card.Img variant="top" src="holder.js/100px160" />
                <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in to
                    additional content. This card has even longer content than the first to
                    show that equal height action.
                </Card.Text>
                </Card.Body>
                <Card.Footer className='listing-card-footer'>
                    <>
                        <style type="text/css">
                        {`
                        .btn-learn {
                            background-color: white;
                            color: #00A388;
                        }
                        `}
                        </style>
                    <BookNowBtn />
                    <Button href='./cabin-demo' variant="learn" >
                        Learn More
                    </Button>
                    </>
                </Card.Footer>
            </Card>
        </CardDeck>
      </div>
    )
  }
}
