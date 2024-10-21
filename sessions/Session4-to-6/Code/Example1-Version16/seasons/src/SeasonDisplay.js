import React from 'react';

const seasonConfig = {
    summer: {
        text: "Let's hit the beach",
        iconName: 'sun'
    },
    winter: {
        text: 'Burr it is cold!',
        iconName: 'snowflake'
    }
}
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
    
 //   const text = season === 'winter' ? 'Burr, it is chilly' : 'Lets hit the beach';
 //   const icon = season === 'winter' ? 'snowflake' : 'sun';

    //seasonConfig[season]; //return our object { text, iconName }
    console.log("seasonConfig[season]:",seasonConfig[season]);
    
    const {text, iconName } = seasonConfig[season];
    
    console.log("text:",text);
    console.log("iconName:",iconName);
    
    return (
        <div>
                <i className={`${iconName} icon`} />
                <h1>{text}</h1>
                <i className={`${iconName} icon`} />
        </div>
    );
};

export default SeasonDisplay;