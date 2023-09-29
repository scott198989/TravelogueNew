import React from 'react' 

const regionOptions = [
    "(Required) Select region visited",
    "North America",
    "Central America",
    "Caribbean",
    "South America",
    "Eastern Asia",
    "Southeast Asia",
    "South Asia",
    "West Asia",
    "Central Asia",
    "Oceania",
    "Europe",
    "North Africa",
    "Sub-Saharan Africa",
    "Arctic",
    "Antarctic"
]

const optionWrap = (array) => {
    return(array.map((area, index) => (
        <option key={index}>{area}</option>
    )))
}

const regions = optionWrap(regionOptions)

export default regions