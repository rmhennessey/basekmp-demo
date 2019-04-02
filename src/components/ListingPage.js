import React, { Component } from 'react'
import "../bootstrap-ecommerce-uikit/ui-ecommerce/css/ui.css";
import "../bootstrap-ecommerce-uikit/ui-ecommerce/css/ui.css.map";
import "../bootstrap-ecommerce-uikit/ui-ecommerce/css/bootstrap.css";
import "../bootstrap-ecommerce-uikit/ui-ecommerce/css/bootstrap.css.map";
import "../bootstrap-ecommerce-uikit/ui-ecommerce/css/responsive.css";
import "../bootstrap-ecommerce-uikit/ui-ecommerce/css/responsive.css.map";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faSearch } from '@fortawesome/free-solid-svg-icons';
import BookNowBtn from './testers/BookNowBtn';
import { Button } from 'react-bootstrap';
import NewListingTest from './testers/NewListingTest';



export default class ListingPage extends Component {
  render() {
    return (
      <div style={{marginTop:'20px', width:'120px'}}>
        <body>

{/* <section class="section-content bg padding-y"/> */}
<div class="container" >

<div class="row">
	<aside class="col-sm-3">
<div class="sticky">
<div class="card card-filter">
	<article class="card-group-item">
		<header class="card-header">
			<a class="" aria-expanded="true" href="#" data-toggle="collapse" data-target="#collapse22">
				<i class="icon-action fa fa-chevron-down"></i>
				<h6 class="title">By Activity</h6>
			</a>
		</header>
		<div style={{  }} class="filter-content collapse show" id="collapse22">
			<div class="card-body">
				<form class="pb-3">
				<div class="input-group">
				  <input class="form-control" placeholder="Search" type="text"/>
				  <div class="input-group-append">
				    <button class="btn btn-primary" type="button"><FontAwesomeIcon icon={faSearch} color='white'/></button>
				  </div>
				</div>
				</form>

				<ul class="list-unstyled list-lg" >
					<li className='list-color'><a href="#">Hiking <span class="float-right badge badge-light round">142</span> </a></li>
					<li className='list-color'><a href="#">Bike Trails  <span class="float-right badge badge-light round">3</span>  </a></li>
          <li className='list-color'><a href="#">Skiing <span class="float-right badge badge-light round">12</span>  </a></li>
          <li className='list-color'><a href="#">Snow Shoeing <span class="float-right badge badge-light round">12</span>  </a></li>
					<li className='list-color'><a href="#">Kayaking <span class="float-right badge badge-light round">32</span>  </a></li>
					<li className='list-color'><a href="#">Dark Sky <span class="float-right badge badge-light round">12</span>  </a></li>
          <li className='list-color'><a href="#">Walking Trails <span class="float-right badge badge-light round">12</span>  </a></li>
          <li className='list-color'><a href="#">Fishing <span class="float-right badge badge-light round">12</span>  </a></li>
				</ul>  
			</div> 
		</div>
	</article> 
	<article class="card-group-item">
		<header class="card-header">
			<a href="#" data-toggle="collapse" data-target="#collapse33">
				<i class="icon-action fa fa-chevron-down"></i>
				<h6 class="title">By Price  </h6>
			</a>
		</header>
		<div class="filter-content collapse show" id="collapse33">
			<div class="card-body">
				<input type="range" class="listing-slider" min="0" max="100" name=""/>
				<div class="form-row">
				<div class="form-group col-md-6">
				  <label>Min</label>
				  <input class="form-control" placeholder="$0" type="number"/>
				</div>
				<div class="form-group text-right col-md-6">
				  <label>Max</label>
				  <input class="form-control" placeholder="$1,0000" type="number"/>
				</div>
				</div>
				<>
						<style type="text/css">
						{`
						.btn-apply {
								background-color: white;
								color: #00A388;
								border: 1px solid #00A388;
						}
						`}
						</style>
				<Button className='listing-price-btn' href='./cabin-demo' variant="apply" size="sm">
						Apply
				</Button>
              </>
			</div> 
		</div> 
	</article> 
	<article class="card-group-item">
		<header class="card-header">
			<a href="#" data-toggle="collapse" data-target="#collapse44">
				<i class="icon-action fa fa-chevron-down"></i>
				<h6 class="title">By Setting </h6>
			</a>
		</header>
		<div class="filter-content collapse show" id="collapse44">
			<div class="card-body">
			<form>
				<label class="form-check">
				  <input class="form-check-input" value="" type="checkbox"/>
				  <span class="form-check-label">
				  	<span class="float-right badge badge-light round">5</span>
				    Woods
				  </span>
				</label>  
				<label class="form-check">
				  <input class="form-check-input" value="" type="checkbox"/>
				  <span class="form-check-label">
				  	<span class="float-right badge badge-light round">13</span>
				    On Water
				  </span>
				</label> 
				<label class="form-check">
				  <input class="form-check-input" value="" type="checkbox"/>
				  <span class="form-check-label">
				  	<span class="float-right badge badge-light round">12</span>
				    Mountain Views
				  </span>
				</label> 
				<label class="form-check">
				  <input class="form-check-input" value="" type="checkbox"/>
				  <span class="form-check-label">
				  	<span class="float-right badge badge-light round">32</span>
				    Secluded
				  </span>
				</label>  
			</form>
			</div> 
		</div> 
	</article> 
</div> 
</div> 
	</aside> 


</div>

</div> 

</body>
      </div>
    )
  }
}
