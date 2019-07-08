const characterClasses = require("./characterClasses");
const characterRaces = require("./characterRaces");
const classToSpec = require("./classToSpec");
const currentContent = require("./currentContent");
const difficultyLabels = require("./difficultyLabels");
const durumuId = require("./durumuId");
const realms = require("./realms");
const soo = require("./Siege of Orgrimmar");
const specs = require("./specs");
const specToClass = require("./specToClass");
const tot = require("./Throne of Thunder");
const urls = require("./urls");
const valuesCorrectSince = require("./valuesCorrectSince");
const shortRealms = require("./shortRealms");
const raceToFaction = require("./raceToFaction");

module.exports = {
    characterClasses,
    characterRaces,
    classToSpec,
    currentContent,
    difficultyLabels,
    durumuId,
    realms,
    "Siege of Orgrimmar": soo,
    specs,
    specToClass,
    "Throne of Thunder": tot,
    urls,
    valuesCorrectSince,
    shortRealms,
    raceToFaction
};
