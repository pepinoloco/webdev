import React from 'react';

const getSeason = (lat, month) => {
    //handle summer months in northern hemisphere month > 2 && month < 9 && lat > 0
    //handle winter months in southern hemisphere month > 2 && month < 9 && lat <= 0

    if (month > 2 && month < 9) {
       return  lat > 0 ? 'summer' : 'winter';
    } 
    else 
    {
        //handle winter months in northern hemisphere month <=2 && month >= 9 && lat > 0 
        //handle summer months in southern hemisphere month <=2 && month >= 9 && lat <= 0 
        return lat > 0 ? 'winter' : 'summer';
    }

}
const SeasonDisplay = props => {
    console.log("SeasonDisplay props.lat:"+props.lat);
    const season = getSeason(props.lat, new Date().getMonth());
    console.log("season:"+season);
    return <div>Season Display</div>;
};

export default SeasonDisplay;