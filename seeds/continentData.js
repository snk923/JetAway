const { Continent } = require('../models');

const continentData = [
    {
        "continentName": "Europe",
        "timeZone": "idk"
    },
    {
        "continentName": "Asia",
        "timeZone": "idk"
    },
    {
        "continentName": "Africa",
        "timeZone": "idk"
    },
    {
        "continentName": "Oceania",
        "timeZone": "idk"
    },
    {
        "continentName": "North America",
        "timeZone": "idk"
    },
    {
        "continentName": "South America",
        "timeZone": "idk"
    }
];

const seedContinents = () => Continent.bulkCreate(continentData);

module.exports = seedContinents