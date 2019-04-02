import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import './App.css';

import ListingPage from './components/ListingPage';
import CabinDemo from './components/cabin/CabinDemo';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import LandingPage from './components/landing/LandingPage';
import SignUpPage from './components/SignUpPage';

//Testers
import NewListingTest from './components/testers/NewListingTest';
import CabinCardIndy from './components/testers/CabinCardIndy';
import ComboListingNewOld from './components/testers/ComboListingNewOld';
import  NewCheckboxes from './components/testers/NewCheckboxes'

import cabinData from './cabinDb'

class App extends Component {
  constructor() {
    super();
    this.state = {
      cabins: [],
      filteredCabins: [],
       //Cabin Location
      // filteredLocation:[],
      // nycLocation: true,
      // bosLocation: true,
      // dcLocation: true,
      // nycCabins:[],
      // bosCabins:[],
      // dcCabins:[],
      //Cabin Type
      filteredType: [],
      // inputCabin: true,
      // inputLogCabin: true,
      // inputAFrame: true,
      // inputYurt: true,
      // inputCampground: true,
      // inputTent: true,
      // typeCabin: [],
      // typeLogCabin: [],
      // typeAFrame: [],
      // typeYurt: [],
      // typeCampground: [],
      // typeTent: [],
      //Activities
      filteredActivities: [],
      inputHiking: true,
      inputBiking: true,
      inputTrailRunning: true,
      inputSkiing: true,
      inputKayaking: true,
      inputCamping: true,
      inputLakeActivities: true,
      inputStarGazing: true,
      inputSnowShoe: true,
      inputWalkingTrails: true,
      hikingActivity: [],
      bikingActivity:[],
      trailRunningActivity:[],
      skiingActivity:[],
      kayakingActivity:[],
      campingActivity:[],
      lakeActivity:[],
      starGazingActivity:[],
      snowShoeingActivity:[],
      walkingActivity:[],
      //Holding Arrays
      // nycTypes: [],
    }

  }


componentDidMount() {
  this.setState({ cabins: cabinData });
}

searchHandler = e => {
  const filtered = this.state.cabins.filter(cabin => {
    // console.log(cabin.activities);
    return (cabin.location.toLowerCase().includes(e.target.value.toLowerCase())
      || cabin.sleeps.toString().includes(e.target.value.toString())
      || cabin.price.toString().includes(e.target.value.toString())
      || cabin.propertytype.toLowerCase().includes(e.target.value.toLowerCase())
      || cabin.activities_1.toLowerCase().includes(e.target.value.toLowerCase())
      || cabin.activities_2.toLowerCase().includes(e.target.value.toLowerCase())
      || cabin.activities_3.toLowerCase().includes(e.target.value.toLowerCase())
      || cabin.features_1.toLowerCase().includes(e.target.value.toLowerCase())
      || cabin.features_2.toLowerCase().includes(e.target.value.toLowerCase())
      || cabin.features_3.toLowerCase().includes(e.target.value.toLowerCase())
    )
  })
  this.setState({filteredCabins: filtered});
}

///Activity Type Filters

// this.state.hikingActivity, this.state.bikingActivity, this.state.trailRunningActivity, this.state.skiingActivity,this.state.kayakingActivity, this.state.campingActivity, this.state.lakeActivity, this.state.starGazingActivity, this.state.snowShoeingActivity, this.state.walkingActivity

hikingFilter = e => {
  this.setState({ inputHiking: !this.state.inputHiking})
  const cabinActivity = this.state.cabins.filter(cabin => {
    if (this.state.inputHiking && cabin.activities_1=== "hiking" || cabin.activities_2=== "hiking" || cabin.activities_3 === "hiking")
      return (
        cabin
      )
  })
  this.setState({ hikingActivity : cabinActivity });
  this.setState({ filteredActivities: [...cabinActivity, ...this.state.bikingActivity, ...this.state.trailRunningActivity, ...this.state.skiingActivity, ...this.state.kayakingActivity, ...this.state.campingActivity, ...this.state.lakeActivity, ...this.state.starGazingActivity, ...this.state.snowShoeingActivity, ...this.state.walkingActivity]})
}

bikingFilter = e => {
  this.setState({ inputBiking: !this.state.inputBiking})
  const cabinActivity = this.state.cabins.filter(cabin => {
    if (this.state.inputBiking && cabin.activities_1=== "bike trails" || cabin.activities_2=== "bike trails" || cabin.activities_3 === "bike trails")
      return (
        cabin
      )
  })
  this.setState({ bikingActivity : cabinActivity });
  this.setState({ filteredActivities: [...cabinActivity, ...this.state.hikingActivity, ...this.state.trailRunningActivity, ...this.state.skiingActivity, ...this.state.kayakingActivity, ...this.state.campingActivity, ...this.state.lakeActivity, ...this.state.starGazingActivity, ...this.state.snowShoeingActivity, ...this.state.walkingActivity ]})
}

trailRunningFilter = e => {
  this.setState({ inputTrailRunning: !this.state.inputTrailRunning})
  const cabinActivity = this.state.cabins.filter(cabin => {
    if (this.state.inputTrailRunning && cabin.activities_1=== "trail running" || cabin.activities_2=== "trail running" || cabin.activities_3 === "trail running")
      return (
        cabin
      )
  })
  this.setState({ trailRunningActivity : cabinActivity });
  this.setState({ filteredActivities: [...cabinActivity, ...this.state.hikingActivity, ...this.state.bikingActivity, ...this.state.skiingActivity, ...this.state.kayakingActivity, ...this.state.campingActivity, ...this.state.lakeActivity, ...this.state.starGazingActivity, ...this.state.snowShoeingActivity, ...this.state.walkingActivity]})
}

skiingFilter = e => {
  this.setState({ inputSkiing: !this.state.inputSkiing})
  const cabinActivity = this.state.cabins.filter(cabin => {
    if (this.state.inputSkiing && cabin.activities_1=== "skiing" || cabin.activities_2=== "skiing" || cabin.activities_3 === "skiing")
      return (
        cabin
      )
  })
  this.setState({ skiingActivity : cabinActivity });
  this.setState({ filteredActivities: [...cabinActivity, ...this.state.hikingActivity, ...this.state.bikingActivity, ...this.state.trailRunningActivity, ...this.state.kayakingActivity, ...this.state.campingActivity, ...this.state.lakeActivity, ...this.state.starGazingActivity, ...this.state.snowShoeingActivity, ...this.state.walkingActivity]})
}

kayakingFilter = e => {
  this.setState({ inputKayaking: !this.state.inputKayaking})
  const cabinActivity = this.state.cabins.filter(cabin => {
    if (this.state.inputKayaking && cabin.activities_1=== "kayaking" || cabin.activities_2=== "kayaking" || cabin.activities_3 === "kayaking")
      return (
        cabin
      )
  })
  this.setState({ kayakingActivity : cabinActivity });
  this.setState({ filteredActivities: [...cabinActivity, ...this.state.hikingActivity, ...this.state.bikingActivity, ...this.state.trailRunningActivity, ...this.state.skiingActivity, ...this.state.campingActivity, ...this.state.lakeActivity, ...this.state.starGazingActivity, ...this.state.snowShoeingActivity, ...this.state.walkingActivity]})
}

campingFilter = e => {
  this.setState({ inputCamping: !this.state.inputCamping})
  const cabinActivity = this.state.cabins.filter(cabin => {
    if (this.state.inputCamping && cabin.activities_1=== "camping" || cabin.activities_2=== "camping" || cabin.activities_3 === "camping")
      return (
        cabin
      )
  })
  this.setState({ campingActivity : cabinActivity });
  this.setState({ filteredActivities: [...cabinActivity, ...this.state.hikingActivity, ...this.state.bikingActivity, ...this.state.trailRunningActivity, ...this.state.skiingActivity, ...this.state.kayakingActivity, ...this.state.lakeActivity, ...this.state.starGazingActivity, ...this.state.snowShoeingActivity, ...this.state.walkingActivity]})
}

lakeFilter = e => {
  this.setState({ inputLakeActivities: !this.state.inputLakeActivities})
  const cabinActivity = this.state.cabins.filter(cabin => {
    if (this.state.inputLakeActivities && cabin.activities_1=== "lake activities" || cabin.activities_2=== "lake activities" || cabin.activities_3 === "lake activities")
      return (
        cabin
      )
  })
  this.setState({ lakeActivity : cabinActivity });
  this.setState({ filteredActivities: [...cabinActivity, ...this.state.hikingActivity, ...this.state.bikingActivity, ...this.state.trailRunningActivity, ...this.state.skiingActivity, ...this.state.kayakingActivity, ...this.state.campingActivity, ...this.state.starGazingActivity, ...this.state.snowShoeingActivity, ...this.state.walkingActivity]})
}

starFilter = e => {
  this.setState({ inputStarGazing: !this.state.inputStarGazing})
  const cabinActivity = this.state.cabins.filter(cabin => {
    if (this.state.inputStarGazing && cabin.activities_1=== "star gazing" || cabin.activities_2=== "star gazing" || cabin.activities_3 === "star gazing")
      return (
        cabin
      )
  })
  this.setState({ starGazingActivity : cabinActivity });
  this.setState({ filteredActivities: [...cabinActivity, ...this.state.hikingActivity, ...this.state.bikingActivity, ...this.state.trailRunningActivity, ...this.state.skiingActivity, ...this.state.kayakingActivity, ...this.state.campingActivity, ...this.state.lakeActivity, ...this.state.snowShoeingActivity, ...this.state.walkingActivity]})
}

snowFilter = e => {
  this.setState({ inputSnowShoe: !this.state.inputSnowShoe})
  const cabinActivity = this.state.cabins.filter(cabin => {
    if (this.state.inputSnowShoe && cabin.activities_1=== "snow shoeing" || cabin.activities_2=== "snow shoeing" || cabin.activities_3 === "snow shoeing")
      return (
        cabin
      )
  })
  this.setState({  snowShoeingActivity : cabinActivity });
  this.setState({ filteredActivities: [...cabinActivity, ...this.state.hikingActivity, ...this.state.bikingActivity, ...this.state.trailRunningActivity, ...this.state.skiingActivity, ...this.state.kayakingActivity, ...this.state.campingActivity, ...this.state.lakeActivity, ...this.state.starGazingActivity, ...this.state.walkingActivity]})
}

walkingFilter = e => {
  this.setState({ inputWalkingTrails: !this.state.inputWalkingTrails})
  const cabinActivity = this.state.cabins.filter(cabin => {
    if (this.state.inputWalkingTrails && cabin.activities_1=== "walking trails" || cabin.activities_2=== "walking trails" || cabin.activities_3 === "walking trails")
      return (
        cabin
      )
  })
  this.setState({  walkingActivity : cabinActivity });
  this.setState({ filteredActivities: [...cabinActivity, ...this.state.hikingActivity, ...this.state.bikingActivity, ...this.state.trailRunningActivity, ...this.state.skiingActivity, ...this.state.kayakingActivity, ...this.state.campingActivity, ...this.state.lakeActivity, ...this.state.starGazingActivity, ...this.state.snowShoeingActivity]})
}


///Cabin Type Filters

typeCabinFilter = e => {
  this.setState({ inputCabin: !this.state.inputCabin})
  const cabinCategory = this.state.cabins.filter(cabin => {
    if (this.state.inputCabin && cabin.cabinType === 'Cabin')
      return (
        cabin
      )
  })
  this.setState({ typeCabin : cabinCategory });
  this.setState({ filteredType: [...cabinCategory, ...this.state.typeLogCabin, ...this.state.typeAFrame, ...this.state.typeYurt, ...this.state.typeCampground, ...this.state.typeTent]}) //added this 3.27
}

// [...this.state.typeLogCabin, ...this.state.typeAFrame, ...this.state.typeYurt, ...this.state.typeCampground, ...this.state.typeTent, ...this.state.typeCabin ]

typeLogCabinFilter = e => {
  this.setState({ inputLogCabin: !this.state.inputLogCabin})
  const cabinCategory = this.state.cabins.filter(cabin => {
    if (this.state.inputLogCabin && cabin.cabinType === 'Log Cabin')
      return (
        cabin
      )
  })
  this.setState({ typeLogCabin : cabinCategory });
  this.setState({ filteredType: [...cabinCategory, ...this.state.typeAFrame, ...this.state.typeYurt, ...this.state.typeCampground, ...this.state.typeTent, ...this.state.typeCabin ]}) //added this 3.27
}

typeAFrameFilter = e => {
  this.setState({ inputAFrame: !this.state.inputAFrame})
  const cabinCategory = this.state.cabins.filter(cabin => {
    if (this.state.inputAFrame && cabin.cabinType === 'A-Frame')
      return (
        cabin
      )
  })
  this.setState({ typeAFrame : cabinCategory });
  this.setState({ filteredType: [...cabinCategory, ...this.state.typeCabin, ...this.state.typeLogCabin, ...this.state.typeYurt, ...this.state.typeCampground, ...this.state.typeTent ]})
}

typeYurtFilter = e => {
  this.setState({ inputYurt: !this.state.inputYurt})
  const cabinCategory = this.state.cabins.filter(cabin => {
    if (this.state.inputYurt && cabin.cabinType === 'Yurt')
      return (
        cabin
      )
  })
  this.setState({ typeYurt : cabinCategory });
  this.setState({ filteredType: [...cabinCategory, ...this.state.typeLogCabin, ...this.state.typeAFrame, ...this.state.typeCampground, ...this.state.typeTent, ...this.state.typeCabin]})
}

typeCampgroundFilter = e => {
  this.setState({ inputCampground: !this.state.inputCampground})
  const cabinCategory = this.state.cabins.filter(cabin => {
    if (this.state.inputCampground && cabin.cabinType === 'Campground')
      return (
        cabin
      )
  })
  this.setState({ typeCampground : cabinCategory });
  this.setState({ filteredType: [...cabinCategory, ...this.state.typeLogCabin, ...this.state.typeAFrame, ...this.state.typeYurt, ...this.state.typeTent, ...this.state.typeCabin]})
}

typeTentFilter = e => {
  this.setState({ inputTent: !this.state.inputTent})
  const cabinCategory = this.state.cabins.filter(cabin => {
    if (this.state.inputTent && cabin.cabinType === 'Tent')
      return (
        cabin
      )
  })
  this.setState({ typeTent : cabinCategory });
  this.setState({ filteredType: [...cabinCategory, ...this.state.typeLogCabin, ...this.state.typeAFrame, ...this.state.typeYurt, ...this.state.typeCampground, ...this.state.typeCabin]})
}

///Location Filters

nycLocationFilter = e => {
  console.log('This location filter works')
  this.setState({ nycLocation: !this.state.nycLocation })
  const category = this.state.cabins.filter(cabin => {
    if (this.state.nycLocation === true && cabin.location === 'New York')
    return (
      cabin
    )
  })
  // console.log(category)
  this.setState({nycCabins : category});
  this.setState({ filteredLocation : [...category, ...this.state.bosCabins, ...this.state.dcCabins]})
  // console.log(this.state.filteredCabins)
}

bosLocationFilter = e => {
  this.setState({ bosLocation: !this.state.bosLocation })
  const category = this.state.cabins.filter(cabin => {
    if (this.state.bosLocation === true && cabin.location === 'Boston')
    return (
      cabin
    )
  })
  this.setState({bosCabins : category});
  this.setState({ filteredLocation : [...category, ...this.state.nycCabins, ...this.state.dcCabins]})
}

dcLocationFilter = e => {
  this.setState({ dcLocation: !this.state.dcLocation })
  const category = this.state.cabins.filter(cabin => {
    if (this.state.dcLocation === true && cabin.location === 'DC')
    return (
      cabin
    )
  })
  this.setState({dcCabins : category});
  this.setState({ filteredLocation : [...category, ...this.state.bosCabins, ...this.state.nycCabins,]})
}

inputSubmitter = e => {
  e.preventDefault();
  console.log('I am firing')

  // this.state.filteredType === 0 && this.state.filteredLocation !== 0 ?
  //   this.setState({ filteredCabins : this.state.filteredLocation}) :

  //   null

    // =====THIS WORKS 3.29.19 ========== 
    const category = this.state.filteredActivities.filter(cabin => {
      if (this.state.filteredActivities.includes(cabin)) {
        return cabin
      }
    })
    this.setState({ filteredCabins : category})
    // ===== END WORKING ====

  }

  resetSubmitter = e => {
    e.preventDefault();
    this.setState({ filteredActivities: []})
    this.setState({ cabins: cabinData})
  }


      // if (this.setState.filteredLocation === 0 && this.setState.filteredType !== 0) {
      //   this.setState({ filteredCabins: filteredType })
      // } else {
        
      // }

    // this.setState({ filteredCabins: [...category]})

  // this.setState({ filteredCabins : [...this.state.typeCabin, ...this.state.nycCabins, ...this.state.bosCabins, ...this.state.dcCabins]})
  
  // was trying to map over the cabins in the arrays and only return those that
  // had the same location. no soup.

  // const category = this.state.cabins.filter(cabin => {
  //   if (this.state.filteredCabins.location === this.state.typeCabin.location)
  //   return (
  //     cabin
  //   )
  // })
  

  // this.setState({ filteredType: [...category, ...this.state.typeCabin ]})


// locationFilter = e => {
//   const category = this.state.cabins.filter(cabin => {
//     if (cabin.location === e.target.location)
//     return (
//       cabin
//     )
//   })
//   this.setState({filteredCabins : category});
// }

  render() {
    return (
      <div className="appContainer">
        <NavBar sticky="top" searchHandler={this.searchHandler} />
        <Route path='/' exact component={LandingPage} />
        {/* <Route path='/listings' exact component={ListingPage} /> */}
        <Route path ='/cabin-demo' exact component={CabinDemo} />
        <Route path ='/sign-up' exact component={SignUpPage} />
        {/* <Route path ='/testers' exact component={NewListingTest} /> */}
        <Route path ='/listings' exact render={ props => <NewListingTest 
          hikingFilter = {this.hikingFilter}
          bikingFilter = {this.bikingFilter}
          trailRunningFilter = {this.trailRunningFilter}
          skiingFilter = {this.skiingFilter}
          kayakingFilter = {this.kayakingFilter}
          campingFilter = {this.campingFilter}
          lakeFilter = {this.lakeFilter}
          starFilter = {this.starFilter }
          snowFilter = {this.snowFilter}
          walkingFilter = {this.walkingFilter}
          inputSubmitter={this.inputSubmitter} 
          cabins={this.state.cabins} 
          filteredCabins={this.state.filteredCabins}
          searchHandler={this.searchHandler} 
          resetSubmitter={this.resetSubmitter}
          // typeTentFilter = {this.typeTentFilter}
          // typeCampgroundFilter = {this.typeCampgroundFilter}
          // typeYurtFilter = {this.typeYurtFilter}
          // typeAFrameFilter = {this.typeAFrameFilter}
          // typeLogCabinFilter = {this.typeLogCabinFilter}
          // typeCabinFilter={this.typeCabinFilter} 
          // nycLocationFilter={this.nycLocationFilter} 
          // bosLocationFilter={this.bosLocationFilter} 
          // dcLocationFilter={this.dcLocationFilter}
          /> }  />
        {/* <Route path ='/testers' exact component={NewCheckboxes} /> */}
        <Footer />
      </div>
    );
  }
}

export default App;
