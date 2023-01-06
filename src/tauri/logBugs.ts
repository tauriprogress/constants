import { LogBugs } from "../globalTypes";
import { Realm, SpecId } from "./types";

export default [
    {
        type: "ignoreLogOfId",
        id: 115067,
        realm: "[HU] Warriors of Darkness",
    },
    {
        type: "ignoreLogOfId",
        id: 149325,
        realm: "[EN] Evermoon",
    },
    {
        type: "ignoreLogOfId",
        id: 472222,
        realm: "[EN] Evermoon",
    },
    {
        type: "ignoreLogOfId",
        id: 1116062,
        realm: "[HU] Tauri WoW Server",
    },
    {
        type: "ignoreLogOfId",
        id: 1997393,
        realm: "[HU] Tauri WoW Server",
    },
    {
        type: "ignoreLogOfId",
        id: 2037960,
        realm: "[HU] Tauri WoW Server",
    },
    {
        type: "ignoreLogOfId",
        id: 3010912,
        realm: "[EN] Evermoon",
    },
    {
        type: "ignoreLogOfId",
        id: 2148332,
        realm: "[HU] Tauri WoW Server",
    },
    {
        type: "ignoreBossOfDate",
        date: {
            from: 0,
            to: 1546950226,
        },
        bossId: 1572,
    },
    {
        type: "changeSpecDmgDoneOfDate",
        date: {
            from: 1565187719,
            to: 1573639200,
        },
        specId: 71,
        changeTo: true,
    },
    {
        type: "ignoreLogOfCharacter",
        name: "Rippedx",
        realm: "[HU] Warriors of Darkness",
    },
    {
        type: "ignoreLogOfCharacter",
        name: "Senedek",
        realm: "[HU] Warriors of Darkness",
    },
    {
        type: "ignoreLogOfCharacter",
        name: "Spinëbreaker",
        realm: "[HU] Warriors of Darkness",
    },
    {
        type: "ignoreLogOfCharacter",
        name: "Minøru",
        realm: "[HU] Warriors of Darkness",
    },
    {
        type: "ignoreLogOfCharacter",
        name: "Ignocia",
        realm: "[EN] Evermoon",
    },
    {
        type: "ignoreLogOfCharacter",
        name: "Braah",
        realm: "[HU] Warriors of Darkness",
    },
    {
        type: "ignoreLogOfCharacter",
        name: "Kigami",
        realm: "[HU] Warriors of Darkness",
    },
    {
        type: "ignoreLogOfCharacter",
        name: "Arrchangel",
        realm: "[HU] Warriors of Darkness",
    },
    {
        type: "ignoreLogOfCharacter",
        name: "Madcuzbad",
        realm: "[HU] Warriors of Darkness",
    },
    {
        type: "ignoreLogOfCharacter",
        name: "Blåckhand",
        realm: "[HU] Warriors of Darkness",
    },
    {
        type: "overwriteSpecOfCharacter",
        logId: 1625732,
        realm: "[EN] Evermoon",
        characterName: "Shrekky",
        specId: 265,
    },
    {
        type: "overwriteSpecOfCharacter",
        logId: 1625944,
        realm: "[EN] Evermoon",
        characterName: "Shrekky",
        specId: 265,
    },
    {
        type: "overwriteSpecOfCharacter",
        logId: 1626046,
        realm: "[EN] Evermoon",
        characterName: "Shrekky",
        specId: 265,
    },
    {
        type: "ignoreCharacter",
        name: "Koala",
        realm: "[HU] Warriors of Darkness",
    },
    {
        type: "ignoreCharacter",
        name: "Goatgeezus",
        realm: "[HU] Warriors of Darkness",
    },
    {
        type: "ignoreCharacter",
        name: "Imlikepewpew",
        realm: "[HU] Tauri WoW Server",
    },
    {
        type: "ignoreCharacter",
        name: "Mywar",
        realm: "[EN] Evermoon",
    },
    {
        type: "ignoreCharacter",
        name: "Aoitori",
        realm: "[EN] Evermoon",
    },
    {
        type: "ignoreCharacter",
        name: "Tinygiant",
        realm: "[EN] Evermoon",
    },
    {
        type: "ignoreCharacter",
        name: "Fitzpleasure",
        realm: "[EN] Evermoon",
    },
    {
        type: "ignoreCharacter",
        name: "Fairplay",
        realm: "[EN] Evermoon",
    },
    {
        type: "ignoreCharacter",
        name: "Pocketpick",
        realm: "[EN] Evermoon",
    },
    {
        type: "removeCharacterFromLogs",
        characterName: "Curser",
        realm: "[EN] Evermoon",
        date: {
            from: 1649228400,
            to: 1654679173,
        },
    },
    {
        type: "removeCharacterFromLogs",
        characterName: "Convoke",
        realm: "[EN] Evermoon",
        date: {
            from: 0,
            to: 1670921104,
        },
    },
] as LogBugs<Realm, SpecId>;
