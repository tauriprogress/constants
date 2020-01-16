const characterClasses = require("./characterClasses");
const characterRaces = require("./characterRaces");
const classToSpec = require("./classToSpec");
const currentContent = require("./currentContent");
const difficultyLabels = require("./difficultyLabels");
const realms = require("./realms");
const soo = require("./Siege of Orgrimmar");
const specs = require("./specs");
const specToClass = require("./specToClass");
const tot = require("./Throne of Thunder");
const urls = require("./urls");
const shortRealms = require("./shortRealms");
const raceToFaction = require("./raceToFaction");
const tauriLogBugs = require("./tauriLogBugs");
const inventoryType = require("./inventoryType");

module.exports = {
    characterClasses,
    characterRaces,
    classToSpec,
    currentContent,
    difficultyLabels,
    realms,
    "Siege of Orgrimmar": soo,
    specs,
    specToClass,
    "Throne of Thunder": tot,
    urls,
    shortRealms,
    raceToFaction,
    tauriLogBugs,
    inventoryType
};
