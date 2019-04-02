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



export default class ListingPage extends Component {
  render() {
    return (
      <div>
        <body>

{/* <section class="section-content bg padding-y"/> */}
<div class="container" style={{marginTop:'20px'}}>

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

	<main class="col-sm-9">

	<div class="card">
	<div class="row no-gutters">
		<aside class="col-sm-5 border-right">
<article class="gallery-wrap"> 
<div class="img-big-wrap">
  <div> <a href="images/items/1.jpg" data-fancybox=""><img src="./cabinAssets/derek-sears-1364406-unsplash.jpg"/></a></div>
</div> 

</article> 
		</aside>
		<aside class="col-sm-7">
<article class="p-5">
	<h3 class="title mb-3">Get off the grid</h3>

<div class="mb-3"> 
	<var class="price h3 text-warning"> 
		<span class="currency">US $</span><span class="num">129</span>
	</var> 
	<span>/night</span> 
</div> 
<dl>
  <dt>Description</dt>
  <dd><p>Here is your chance to get away from it all! Come on up to New Hampshire and be in the White Mountains within 20 minutes! </p></dd>
</dl>
<dl class="row">
  <dt class="col-sm-3">Location</dt>
  <dd class="col-sm-9">White Mountains</dd>

  <dt class="col-sm-3">Activities</dt>
  <dd class="col-sm-9">Hiking, Bike Trails, Skiing </dd>

  <dt class="col-sm-3">Setting</dt>
  <dd class="col-sm-9">Solitude </dd>
</dl>
<div class="rating-wrap">

	<ul class="rating-stars">
		<li style={{width:'80%'}} class="stars-active"> 
		<FontAwesomeIcon icon={faStar} color='#FF6138'/> <FontAwesomeIcon icon={faStar} color='#FF6138' />
		<FontAwesomeIcon icon={faStar} color='#FF6138'/> <FontAwesomeIcon icon={faStar}  color='#FF6138'/>
		<FontAwesomeIcon icon={faStar} color='#FF6138' />
		</li>
		<li>
		<FontAwesomeIcon icon={faStar} color='#FF6138' /> <FontAwesomeIcon icon={faStar} color='#FF6138'/>
		<FontAwesomeIcon icon={faStar} color='#FF6138' /> <FontAwesomeIcon icon={faStar} color='#FF6138' />
		<FontAwesomeIcon icon={faStar} color='#FF6138' />
		</li>
	</ul>
	<div class="label-rating"> 132 reviews</div>
	{/* <div class="label-rating">154 orders </div> */}
</div>
<hr/>
	{/* <hr/> */}
	{/* <a href="#" class="btn  btn-primary"> Book now </a>
	<a href="#" class="btn  btn-outline-primary"> <i class="fas fa-shopping-cart"></i> Learn More </a> */}
		<div className='listing-card-footer'>
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

</article> 
		</aside> 
	</div> 
</div> 

<div class="card">
	<div class="row no-gutters">
		<aside class="col-sm-5 border-right">
<article class="gallery-wrap"> 
<div class="img-big-wrap">
  <div> <a href="images/items/1.jpg" data-fancybox=""><img src="./cabinAssets/dane-deaner-284387-unsplash.jpg"/></a></div>
</div> 

</article> 
		</aside>
		<aside class="col-sm-7">
<article class="p-5">
	<h3 class="title mb-3">Getaway Cabin</h3>

<div class="mb-3"> 
	<var class="price h3 text-warning"> 
		<span class="currency">US $</span><span class="num">129</span>
	</var> 
	<span>/night</span> 
</div> 
<dl>
  <dt>Description</dt>
  <dd><p>Here is your chance to get away from it all! Come on up to New Hampshire and be in the White Mountains within 20 minutes! </p></dd>
</dl>
<dl class="row">
  <dt class="col-sm-3">Location</dt>
  <dd class="col-sm-9">Vermont</dd>

  <dt class="col-sm-3">Activities</dt>
  <dd class="col-sm-9">Hiking, Bike Trails, Skiing </dd>

  <dt class="col-sm-3">Setting</dt>
  <dd class="col-sm-9">Mountain View </dd>
</dl>

<div class="rating-wrap">

	<div class="rating-wrap">

	<ul class="rating-stars">
		<li style={{width:'80%'}} class="stars-active"> 
		<FontAwesomeIcon icon={faStar} color='#FF6138'/> <FontAwesomeIcon icon={faStar} color='#FF6138' />
		<FontAwesomeIcon icon={faStar} color='#FF6138'/> <FontAwesomeIcon icon={faStar}  color='#FF6138'/>
		<FontAwesomeIcon icon={faStar} color='#FF6138' />
		</li>
		<li>
		<FontAwesomeIcon icon={faStar} color='#FF6138' /> <FontAwesomeIcon icon={faStar} color='#FF6138'/>
		<FontAwesomeIcon icon={faStar} color='#FF6138' /> <FontAwesomeIcon icon={faStar} color='#FF6138' />
		<FontAwesomeIcon icon={faStar} color='#FF6138' />
		</li>
	</ul>
	<div class="label-rating"> 132 reviews</div>
	{/* <div class="label-rating">154 orders </div> */}
</div>
<hr/>
		<div className='listing-card-footer'>
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
			</div>

</article> 
		</aside> 
	</div> 
</div> 

<div class="card">
	<div class="row no-gutters">
		<aside class="col-sm-5 border-right">
<article class="gallery-wrap"> 
<div class="img-big-wrap">
  <div> <a href="images/items/1.jpg" data-fancybox=""><img src="./cabinAssets/eric-ward-715294-unsplash.jpg"/></a></div>
</div> 

</article> 
		</aside>
		<aside class="col-sm-7">
<article class="p-5">
	<h3 class="title mb-3">Sleep Under the Stars</h3>

<div class="mb-3"> 
	<var class="price h3 text-warning"> 
		<span class="currency">US $</span><span class="num">189</span>
	</var> 
	<span>/night</span> 
</div> 
<dl>
  <dt>Description</dt>
  <dd><p>Here is your chance to get away from it all! Come on up to New Hampshire and be in the White Mountains within 20 minutes! </p></dd>
</dl>
<dl class="row">
  <dt class="col-sm-3">Location</dt>
  <dd class="col-sm-9">Maine</dd>

  <dt class="col-sm-3">Activities</dt>
  <dd class="col-sm-9">Hiking, Star Gazing, Fishing </dd>

  <dt class="col-sm-3">Setting</dt>
  <dd class="col-sm-9">Off the Grid </dd>
</dl>

<div class="rating-wrap">

	<div class="rating-wrap">

	<ul class="rating-stars">
		<li style={{width:'80%'}} class="stars-active"> 
		<FontAwesomeIcon icon={faStar} color='#FF6138'/> <FontAwesomeIcon icon={faStar} color='#FF6138' />
		<FontAwesomeIcon icon={faStar} color='#FF6138'/> <FontAwesomeIcon icon={faStar}  color='#FF6138'/>
		<FontAwesomeIcon icon={faStar} color='#FF6138' />
		</li>
		<li>
		<FontAwesomeIcon icon={faStar} color='#FF6138' /> <FontAwesomeIcon icon={faStar} color='#FF6138'/>
		<FontAwesomeIcon icon={faStar} color='#FF6138' /> <FontAwesomeIcon icon={faStar} color='#FF6138' />
		<FontAwesomeIcon icon={faStar} color='#FF6138' />
		</li>
	</ul>
	<div class="label-rating"> 132 reviews</div>
	{/* <div class="label-rating">154 orders </div> */}
</div>
<hr/>
		<div className='listing-card-footer'>
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
			</div>

</article> 
		</aside> 
	</div> 
</div> 

<div class="card">
	<div class="row no-gutters">
		<aside class="col-sm-5 border-right">
<article class="gallery-wrap"> 
<div class="img-big-wrap">
  <div> <a href="images/items/1.jpg" data-fancybox=""><img src="./cabinAssets/ian-keefe-449093-unsplash (1).jpg"/></a></div>
</div> 

</article> 
		</aside>
		<aside class="col-sm-7">
<article class="p-5">
	<h3 class="title mb-3">Lodge On the Lake</h3>

<div class="mb-3"> 
	<var class="price h3 text-warning"> 
		<span class="currency">US $</span><span class="num">329</span>
	</var> 
	<span>/night</span> 
</div> 
<dl>
  <dt>Description</dt>
  <dd><p>Here is your chance to get away from it all! Come on up to New Hampshire and be in the White Mountains within 20 minutes! </p></dd>
</dl>
<dl class="row">
  <dt class="col-sm-3">Location</dt>
  <dd class="col-sm-9">Finger Lakes</dd>

  <dt class="col-sm-3">Activities</dt>
  <dd class="col-sm-9">Kayaking, Canoeing, Fishing, Paddle Boarding </dd>

  <dt class="col-sm-3">Setting</dt>
  <dd class="col-sm-9">On the Water </dd>
</dl>

<div class="rating-wrap">

	<div class="rating-wrap">

	<ul class="rating-stars">
		<li style={{width:'80%'}} class="stars-active"> 
		<FontAwesomeIcon icon={faStar} color='#FF6138'/> <FontAwesomeIcon icon={faStar} color='#FF6138' />
		<FontAwesomeIcon icon={faStar} color='#FF6138'/> <FontAwesomeIcon icon={faStar}  color='#FF6138'/>
		<FontAwesomeIcon icon={faStar} color='#FF6138' />
		</li>
		<li>
		<FontAwesomeIcon icon={faStar} color='#FF6138' /> <FontAwesomeIcon icon={faStar} color='#FF6138'/>
		<FontAwesomeIcon icon={faStar} color='#FF6138' /> <FontAwesomeIcon icon={faStar} color='#FF6138' />
		<FontAwesomeIcon icon={faStar} color='#FF6138' />
		</li>
	</ul>
	<div class="label-rating"> 132 reviews</div>
	{/* <div class="label-rating">154 orders </div> */}
</div>
<hr/>
		<div className='listing-card-footer'>
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
			</div>

</article> 
		</aside> 
	</div> 
</div> 

<div class="card">
	<div class="row no-gutters">
		<aside class="col-sm-5 border-right">
<article class="gallery-wrap"> 
<div class="img-big-wrap">
  <div> <a href="images/items/1.jpg" data-fancybox=""><img src="./cabinAssets/daniil-silantev-307694-unsplash.jpg"/></a></div>
</div> 

</article> 
		</aside>
		<aside class="col-sm-7">
<article class="p-5">
	<h3 class="title mb-3">Secret Chalet</h3>

<div class="mb-3"> 
	<var class="price h3 text-warning"> 
		<span class="currency">US $</span><span class="num">179</span>
	</var> 
	<span>/night</span> 
</div> 
<dl>
  <dt>Description</dt>
  <dd><p>Here is your chance to get away from it all! Come on up to New Hampshire and be in the White Mountains within 20 minutes! </p></dd>
</dl>
<dl class="row">
  <dt class="col-sm-3">Location</dt>
  <dd class="col-sm-9">White Mountains</dd>

  <dt class="col-sm-3">Activities</dt>
  <dd class="col-sm-9">Hiking, Bike Trails, Skiing </dd>

  <dt class="col-sm-3">Setting</dt>
  <dd class="col-sm-9">Solitude </dd>
</dl>

<div class="rating-wrap">

	<div class="rating-wrap">

	<ul class="rating-stars">
		<li style={{width:'80%'}} class="stars-active"> 
		<FontAwesomeIcon icon={faStar} color='#FF6138'/> <FontAwesomeIcon icon={faStar} color='#FF6138' />
		<FontAwesomeIcon icon={faStar} color='#FF6138'/> <FontAwesomeIcon icon={faStar}  color='#FF6138'/>
		<FontAwesomeIcon icon={faStar} color='#FF6138' />
		</li>
		<li>
		<FontAwesomeIcon icon={faStar} color='#FF6138' /> <FontAwesomeIcon icon={faStar} color='#FF6138'/>
		<FontAwesomeIcon icon={faStar} color='#FF6138' /> <FontAwesomeIcon icon={faStar} color='#FF6138' />
		<FontAwesomeIcon icon={faStar} color='#FF6138' />
		</li>
	</ul>
	<div class="label-rating"> 132 reviews</div>
	{/* <div class="label-rating">154 orders </div> */}
</div>
<hr/>
		<div className='listing-card-footer'>
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
			</div>

</article> 
		</aside> 
	</div> 
</div> 
<br/>
<div class="card">
	<div class="row no-gutters">
		<aside class="col-sm-5 border-right">
<article class="gallery-wrap"> 
<div class="img-big-wrap">
  <div> <a href="images/items/1.jpg" data-fancybox=""><img src="./cabinAssets/kyle-glenn-600172-unsplash.jpg"/></a></div>
</div> 
</article> 
		</aside>
		<aside class="col-sm-7">
<article class="p-5">
	<h3 class="title mb-3">Comfy Yurt</h3>

<div class="mb-3"> 
	<var class="price h3 text-warning"> 
		<span class="currency">US $</span><span class="num">137</span>
	</var> 
	<span>/night</span> 
</div> 
<dl>
  <dt>Description</dt>
  <dd><p>Here is your chance to get away from it all! Come on up to New Hampshire and be in the White Mountains within 20 minutes! </p></dd>
</dl>
<dl class="row">
  <dt class="col-sm-3">Location</dt>
  <dd class="col-sm-9">White Mountains</dd>

  <dt class="col-sm-3">Activities</dt>
  <dd class="col-sm-9">Hiking, Bike Trails, Skiing </dd>

  <dt class="col-sm-3">Setting</dt>
  <dd class="col-sm-9">Solitude </dd>
</dl>

<div class="rating-wrap">

	<div class="rating-wrap">

	<ul class="rating-stars">
		<li style={{width:'80%'}} class="stars-active"> 
		<FontAwesomeIcon icon={faStar} color='#FF6138'/> <FontAwesomeIcon icon={faStar} color='#FF6138' />
		<FontAwesomeIcon icon={faStar} color='#FF6138'/> <FontAwesomeIcon icon={faStar}  color='#FF6138'/>
		<FontAwesomeIcon icon={faStar} color='#FF6138' />
		</li>
		<li>
		<FontAwesomeIcon icon={faStar} color='#FF6138' /> <FontAwesomeIcon icon={faStar} color='#FF6138'/>
		<FontAwesomeIcon icon={faStar} color='#FF6138' /> <FontAwesomeIcon icon={faStar} color='#FF6138' />
		<FontAwesomeIcon icon={faStar} color='#FF6138' />
		</li>
	</ul>
	<div class="label-rating"> 132 reviews</div>
	{/* <div class="label-rating">154 orders </div> */}
</div>
<hr/>
		<div className='listing-card-footer'>
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
			</div>

</article> 
		</aside> 
	</div> 
</div> 
<br/>
<div class="card">
	<div class="row no-gutters">
		<aside class="col-sm-5 border-right">
<article class="gallery-wrap"> 
<div class="img-big-wrap">
  <div> <a href="images/items/1.jpg" data-fancybox=""><img src="./cabinAssets/evan-leith-1150188-unsplash.jpg"/></a></div>
</div> 

</article> 
		</aside>
		<aside class="col-sm-7">
<article class="p-5">
	<h3 class="title mb-3">A-frame in the Woods</h3>

<div class="mb-3"> 
	<var class="price h3 text-warning"> 
		<span class="currency">US $</span><span class="num">159</span>
	</var> 
	<span>/night</span> 
</div> 
<dl>
  <dt>Description</dt>
  <dd><p>Here is your chance to get away from it all! Come on up to New Hampshire and be in the White Mountains within 20 minutes! </p></dd>
</dl>
<dl class="row">
  <dt class="col-sm-3">Location</dt>
  <dd class="col-sm-9">Catskill</dd>

  <dt class="col-sm-3">Activities</dt>
  <dd class="col-sm-9">Hiking, Walking Trails, Skiing </dd>

  <dt class="col-sm-3">Setting</dt>
  <dd class="col-sm-9">Mountain View </dd>
</dl>

<div class="rating-wrap">

	<div class="rating-wrap">

	<ul class="rating-stars">
		<li style={{width:'80%'}} class="stars-active"> 
		<FontAwesomeIcon icon={faStar} color='#FF6138'/> <FontAwesomeIcon icon={faStar} color='#FF6138' />
		<FontAwesomeIcon icon={faStar} color='#FF6138'/> <FontAwesomeIcon icon={faStar}  color='#FF6138'/>
		<FontAwesomeIcon icon={faStar} color='#FF6138' />
		</li>
		<li>
		<FontAwesomeIcon icon={faStar} color='#FF6138' /> <FontAwesomeIcon icon={faStar} color='#FF6138'/>
		<FontAwesomeIcon icon={faStar} color='#FF6138' /> <FontAwesomeIcon icon={faStar} color='#FF6138' />
		<FontAwesomeIcon icon={faStar} color='#FF6138' />
		</li>
	</ul>
	<div class="label-rating"> 132 reviews</div>
	{/* <div class="label-rating">154 orders </div> */}
</div>
<hr/>
		<div className='listing-card-footer'>
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
			</div>

</article> 
		</aside> 
	</div> 
</div> 
<br/>
<div class="card">
	<div class="row no-gutters">
		<aside class="col-sm-5 border-right">
<article class="gallery-wrap"> 
<div class="img-big-wrap">
  <div> <a href="images/items/1.jpg" data-fancybox=""><img src="./cabinAssets/debra-warwick-1389956-unsplash.jpg"/></a></div>
</div> 

</article> 
		</aside>
		<aside class="col-sm-7">
<article class="p-5">
	<h3 class="title mb-3">Perfect Writer's Cabin</h3>

<div class="mb-3"> 
	<var class="price h3 text-warning"> 
		<span class="currency">US $</span><span class="num">117</span>
	</var> 
	<span>/night</span> 
</div> 
<dl>
  <dt>Description</dt>
  <dd><p>Here is your chance to get away from it all! Come on up to New Hampshire and be in the White Mountains within 20 minutes! </p></dd>
</dl>
<dl class="row">
  <dt class="col-sm-3">Location</dt>
  <dd class="col-sm-9">Blue  Mountains</dd>

  <dt class="col-sm-3">Activities</dt>
  <dd class="col-sm-9">Hiking, Bike Trails </dd>

  <dt class="col-sm-3">Setting</dt>
  <dd class="col-sm-9">Woods </dd>
</dl>

<div class="rating-wrap">

	<div class="rating-wrap">

	<ul class="rating-stars">
		<li style={{width:'80%'}} class="stars-active"> 
		<FontAwesomeIcon icon={faStar} color='#FF6138'/> <FontAwesomeIcon icon={faStar} color='#FF6138' />
		<FontAwesomeIcon icon={faStar} color='#FF6138'/> <FontAwesomeIcon icon={faStar}  color='#FF6138'/>
		<FontAwesomeIcon icon={faStar} color='#FF6138' />
		</li>
		<li>
		<FontAwesomeIcon icon={faStar} color='#FF6138' /> <FontAwesomeIcon icon={faStar} color='#FF6138'/>
		<FontAwesomeIcon icon={faStar} color='#FF6138' /> <FontAwesomeIcon icon={faStar} color='#FF6138' />
		<FontAwesomeIcon icon={faStar} color='#FF6138' />
		</li>
	</ul>
	<div class="label-rating"> 132 reviews</div>
	{/* <div class="label-rating">154 orders </div> */}
</div>
<hr/>
		<div className='listing-card-footer'>
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
			</div>

</article> 
		</aside> 
	</div> 
</div> 
<br/>
<div class="card">
	<div class="row no-gutters">
		<aside class="col-sm-5 border-right">
<article class="gallery-wrap"> 
<div class="img-big-wrap">
  <div> <a href="images/items/1.jpg" data-fancybox=""><img src="./cabinAssets/damiano-baschiera-779294-unsplash.jpg"/></a></div>
</div> 
</article> 
		</aside>
		<aside class="col-sm-7">
<article class="p-5">
	<h3 class="title mb-3">Idyllic Lakeside Cabin</h3>

<div class="mb-3"> 
	<var class="price h3 text-warning"> 
		<span class="currency">US $</span><span class="num">209</span>
	</var> 
	<span>/night</span> 
</div> 
<dl>
  <dt>Description</dt>
  <dd><p>Here is your chance to get away from it all! Come on up to New Hampshire and be in the White Mountains within 20 minutes! </p></dd>
</dl>
<dl class="row">
  <dt class="col-sm-3">Location</dt>
  <dd class="col-sm-9">Berkshires</dd>

  <dt class="col-sm-3">Activities</dt>
  <dd class="col-sm-9">Kayaking, Canoeing, Fishing </dd>

  <dt class="col-sm-3">Setting</dt>
  <dd class="col-sm-9">On the Water </dd>
</dl>

<div class="rating-wrap">

	<div class="rating-wrap">

	<ul class="rating-stars">
		<li style={{width:'80%'}} class="stars-active"> 
		<FontAwesomeIcon icon={faStar} color='#FF6138'/> <FontAwesomeIcon icon={faStar} color='#FF6138' />
		<FontAwesomeIcon icon={faStar} color='#FF6138'/> <FontAwesomeIcon icon={faStar}  color='#FF6138'/>
		<FontAwesomeIcon icon={faStar} color='#FF6138' />
		</li>
		<li>
		<FontAwesomeIcon icon={faStar} color='#FF6138' /> <FontAwesomeIcon icon={faStar} color='#FF6138'/>
		<FontAwesomeIcon icon={faStar} color='#FF6138' /> <FontAwesomeIcon icon={faStar} color='#FF6138' />
		<FontAwesomeIcon icon={faStar} color='#FF6138' />
		</li>
	</ul>
	<div class="label-rating"> 132 reviews</div>
	{/* <div class="label-rating">154 orders </div> */}
</div>
<hr/>
		<div className='listing-card-footer'>
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
			</div>

</article> 
		</aside> 
	</div> 
</div> 
</main> 
</div>

</div> 

</body>
      </div>
    )
  }
}
