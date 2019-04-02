import React, { Component } from 'react';
import { Navbar, Button, Nav, Form, FormControl } from 'react-bootstrap';


export default class NewCheckboxes extends Component {

  render() {
    return (
    <div className='fixed-top' style={{ zIndex: '5' }}>
      <div className='input-column'>
        <form onSubmit={this.props.inputSubmitter}>

        <FormControl style={{ marginBottom: '18px' }} onChange={this.props.searchHandler} type="text" placeholder="Search by keyword..." className="mr-sm-2" />

            {/* <header>Locations:</header>
            <div className='input-filters'>
            <input
                type='checkbox'
                location="New York"
                // onClick={this.props.locationFilter}
                onInput={this.props.nycLocationFilter}
            />
            <p>NYC</p>
            <p className='input-count'>(187)</p>
            </div>
            <div className='input-filters'>
            <input
                type='checkbox'
                location="Boston"
                onInput={this.props.bosLocationFilter} 
            />
            <p>Boston</p>
            <p className='input-count'>(187)</p>
            </div>
            <div className='input-filters'>
            <input
                type='checkbox'
                location="DC"
                onInput={this.props.dcLocationFilter}
            />
            <p>DC</p>
            <p className='input-count'>(187)</p>
            </div>
    
        <br/>
       
            <header>Cabin Type:</header>
            <br/>
            <div className='input-filters'>
            <input
                type='checkbox'
                cabinType= "Cabin"
                onChange={this.props.typeCabinFilter}
            />
            <p>Cabin</p>
            <p className='input-count'>(187)</p>
            </div>

            <div className='input-filters'>
            <input
                type='checkbox'
                onChange={this.props.typeLogCabinFilter}
            />
            <p>Log Cabin</p>
            <p className='input-count'>(187)</p>
            </div>

            <div className='input-filters'>
            <input
                type='checkbox'
                onChange={this.props.typeAFrameFilter}
            />
            <p>A-Frame</p>
            <p className='input-count'>(187)</p>
            </div>

            <div className='input-filters'>
            <input
                type='checkbox'
                onChange={this.props.typeYurtFilter}
            />
            <p>Yurt</p>
            <p className='input-count'>(187)</p>
            </div>
            <div className='input-filters'>
            <input
                type='checkbox'
                onChange={this.props.typeCampgroundFilter}
            />

            <p>Campground</p>
            <p className='input-count'>(187)</p>
            </div>
            
            <div className='input-filters'>
            <input
                type='checkbox'
                onChange={this.props.typeTentFilter}
            />
            <p>Tent</p>
            <p className='input-count'>(187)</p>
            </div>
      
        <br/> */}
      
        <header>Find By Activities:</header>
            <div className='input-filters'>
            <input
                type='checkbox'
                onChange={this.props.hikingFilter}
            />
            <p>Hiking</p>
            </div>


            <div className='input-filters'>
            <input
                type='checkbox'
                onChange={this.props.bikingFilter}
            />
            <p>Bike Trails</p>
            </div>

            <div className='input-filters'>
            <input
                type='checkbox'
                onChange={this.props.trailRunningFilter}
            />
            <p>Trail Running</p>
            </div>

            <div className='input-filters'>
            <input
                type='checkbox'
                onChange={this.props.skiingFilter}
            />
            <p>Skiing</p>
            </div>

            <div className='input-filters'>
            <input
                type='checkbox'
                onChange={this.props.kayakingFilter}
            />
            <p>Kayaking</p>
            </div>

            <div className='input-filters'>
            <input
                type='checkbox'
                onChange= {this.props.campingFilter}
            />
            <p>Camping</p>
            </div>
            
            <div className='input-filters'>
            <input
                type='checkbox'
                onChange= {this.props.lakeFilter}
            />
            <p>Lake Activities</p>
            </div>

            <div className='input-filters'>
            <input
                type='checkbox'
                onChange= {this.props.starFilter }
            />
            <p>Star Gazing</p>
            </div>

            <div className='input-filters'>
            <input
                type='checkbox'
                onChange= {this.props.snowFilter}
            />
            <p>Snow Shoeing</p>
            </div>
            <div className='input-filters'>
            <input
                type='checkbox'
                onChange= {this.props.walkingFilter}
            />
            <p>Walking Trails</p>
            </div>

            <>
                        <style type="text/css">
                        {`
                        .btn-search {
                            background-color: white;
                            color: #00A388;
                            border: 1px solid #00A388;
                        }

                        .btn-xxl {
                        padding: 1rem 1.5rem;
                        font-size: 1.5rem;
                        }
                        `}
                        </style>
            <Button type='submit' variant="search">See Available Basekmps</Button>
            {/* <Button type='submit' variant="search">Search</Button> */}
            </>
        </form>

        {/* <>
                        <style type="text/css">
                        {`
                        .btn-reset {
                            background-color: #00A388;
                            color: white;
                            border: 1px solid #00A388;
                        }

                        .btn-xxl {
                        padding: 1rem 1.5rem;
                        font-size: 1.5rem;
                        }
                        `}
                        </style>
            <Button onClick={this.props.resetSubmitter} type='submit' variant="reset">Reset Filters</Button>
            </> */}

      </div>
      </div>
    )
  }
}
