import * as logBugs from "./logBugs.json";

interface CustomDateObject {
    from: number;
    to: number;
}

interface IgnoreLogOfId {
    type: "ignoreLogOfId";
    id: number;
    realm: string;
}

interface IgnoreBossOfDate {
    type: "ignoreBossOfDate";
    date: CustomDateObject;
    bossId: number;
}

interface ChangeSpecDmgDoneOfDate {
    type: "changeSpecDmgDoneOfDate";
    date: CustomDateObject;
    specId: number;
    changeTo: true;
}

interface IgnoreLogOfCharacter {
    type: "ignoreLogOfCharacter";
    name: string;
    realm: string;
}

interface OverwriteSpecOfCharacter {
    type: "overwriteSpecOfCharacter";
    logId: number;
    realm: string;
    characterName: string;
    specId: number;
}

interface IgnoreCharacter {
    type: "ignoreCharacter";
    name: string;
    realm: string;
}

type LogBugs = (
    | IgnoreLogOfId
    | IgnoreBossOfDate
    | ChangeSpecDmgDoneOfDate
    | IgnoreLogOfCharacter
    | OverwriteSpecOfCharacter
    | IgnoreCharacter
)[];

export default logBugs as LogBugs;
