import React, { Component } from 'react';
import { Card, ListGroup, ListGroupItem, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed, faCampground } from '@fortawesome/free-solid-svg-icons';


import BookNowBtn from '../testers/BookNowBtn';


export default class CabinCardIndy extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
          <Card style={{ width: '18rem', display:'flex', marginBottom: '10px'}}>
            <Card.Img variant="top" src={this.props.cabin.thumbnailURL} height={'350'}/>
            <Card.Body>
              <Card.Title>{this.props.cabin.name}</Card.Title>
              <Card.Text>Outside of {this.props.cabin.location} </Card.Text>
              <Card.Text>${this.props.cabin.price} /night</Card.Text>
                <div className='card-indy-profile'>
                  <FontAwesomeIcon icon={faBed} color='#00A388'/>
                  <p>
                     Sleeps: {this.props.cabin.sleeps}
                  </p>
                  </div>
                  <div className='card-indy-profile' >
                  <FontAwesomeIcon icon={faCampground} color='#00A388'/>
                  <p>
                     Property Type: {this.props.cabin.propertytype}
                  </p>
                </div>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroupItem><strong>Activities:</strong> {this.props.cabin.activities_1}, {this.props.cabin.activities_2}, {this.props.cabin.activities_3} </ListGroupItem>
              <ListGroupItem><strong>Distance to Activities:</strong> {this.props.cabin.distance} </ListGroupItem>
              <ListGroupItem><strong>Cabin Features:</strong> {this.props.cabin.features_1}, {this.props.cabin.features_2}, {this.props.cabin.features_3}</ListGroupItem>
              {/* <ListGroupItem>Vestibulum at eros</ListGroupItem> */}
            </ListGroup>
            <Card.Body>
            <div className="card-btns">
            <>
                        <style type="text/css">
                        {`
                        .btn-learn {
                            background-color: white;
														color: #00A388;
														border: 1px solid #00A388;
                        }
                        `}
                        </style>
                    <BookNowBtn />
                    <Button href='./cabin-demo' variant="learn" >
                        Learn More
                    </Button>
              </>
              </div>
            </Card.Body>
          </Card>
      </div>
    )
  }
}
