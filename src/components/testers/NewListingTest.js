import React, { Component } from 'react';
import { CardDeck, Card, Button } from 'react-bootstrap';
import BookNowBtn from './BookNowBtn';
import CabinCardIndy from './CabinCardIndy'
import NewCheckboxes from './NewCheckboxes';


export default class NewListingTest extends Component {
    constructor(props) {
        super(props);
    }
  render() {
    return (
      <div className='listing-columns'>
          <NewCheckboxes 
            hikingFilter = {this.props.hikingFilter}
            bikingFilter = {this.props.bikingFilter}
            trailRunningFilter = {this.props.trailRunningFilter}
            skiingFilter = {this.props.skiingFilter}
            kayakingFilter = {this.props.kayakingFilter}
            campingFilter = {this.props.campingFilter}
            lakeFilter = {this.props.lakeFilter}
            starFilter = {this.props.starFilter }
            snowFilter = {this.props.snowFilter}
            walkingFilter = {this.props.walkingFilter}
            // typeTentFilter = {this.props.typeTentFilter}
            // typeCampgroundFilter = {this.props.typeCampgroundFilter}
            // typeYurtFilter = {this.props.typeYurtFilter}
            // typeAFrameFilter = {this.props.typeAFrameFilter}
            // typeLogCabinFilter = {this.props.typeLogCabinFilter}
            // typeCabinFilter={this.props.typeCabinFilter} 
            inputSubmitter={this.props.inputSubmitter}
            searchHandler={this.props.searchHandler} 
            resetSubmitter = {this.props.resetSubmitter}
            // nycLocationFilter={this.props.nycLocationFilter} 
            // bosLocationFilter={this.props.bosLocationFilter} 
            // dcLocationFilter={this.props.dcLocationFilter}
            />
          <CardDeck style={{justifyContent: 'flex-end', marginLeft:'40px'}}>
          {this.props.filteredCabins.length === 0 ? this.props.cabins.map((cabin, index) => (
                <CabinCardIndy key={index} cabin={cabin} />
              )):this.props.filteredCabins.map((cabin, index) => (
                <CabinCardIndy key={index} cabin={cabin} />
              ))}
        </CardDeck>
      </div>
    )
  }
}
