import React, { Component } from 'react'
// import "../bootstrap-ecommerce-uikit/ui-ecommerce/css/ui.css";
// import "../bootstrap-ecommerce-uikit/ui-ecommerce/css/ui.css.map";
// import "../bootstrap-ecommerce-uikit/ui-ecommerce/css/bootstrap.css";
// import "../bootstrap-ecommerce-uikit/ui-ecommerce/css/bootstrap.css.map";
// import "../bootstrap-ecommerce-uikit/ui-ecommerce/css/responsive.css";
// import "../bootstrap-ecommerce-uikit/ui-ecommerce/css/responsive.css.map";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faStar, faSearch } from '@fortawesome/free-solid-svg-icons';
// import BookNowBtn from './testers/BookNowBtn';
// import NewListingTest from './testers/NewListingTest';
// import { CardDeck, Card, Button } from 'react-bootstrap';
// import CabinCardIndy from './CabinCardIndy'
import ListingPage from '../ListingPage';
import NewListingTest from './NewListingTest';


export default class ComboListingNewOld extends Component {
  render() {
    return (
      <div className='combo-listing'>
          <ListingPage />
          <br/>
          <NewListingTest cabins={this.props.cabins} filteredCabins={this.props.filteredCabins}/>
      </div>
    )
  }
}
