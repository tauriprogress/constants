import realms from "./realms";
import specs from "./specs";

export type Realm = typeof realms[number];

export type SpecId = keyof typeof specs;

export interface CustomDateObject {
    from: number;
    to: number;
}

export interface IgnoreLogOfId {
    type: "ignoreLogOfId";
    id: number;
    realm: Realm;
}

export interface IgnoreBossOfDate {
    type: "ignoreBossOfDate";
    date: CustomDateObject;
    bossId: number;
}

export interface ChangeSpecDmgDoneOfDate {
    type: "changeSpecDmgDoneOfDate";
    date: CustomDateObject;
    specId: SpecId;
    changeTo: true;
}

export interface IgnoreLogOfCharacter {
    type: "ignoreLogOfCharacter";
    name: string;
    realm: Realm;
}

export interface OverwriteSpecOfCharacter {
    type: "overwriteSpecOfCharacter";
    logId: number;
    realm: Realm;
    characterName: string;
    specId: SpecId;
}

export interface IgnoreCharacter {
    type: "ignoreCharacter";
    name: string;
    realm: Realm;
}

export interface ChangeKilltimeOfLog {
    type: "changeKilltimeOfLog";
    id: number;
    changeTo: number;
}

export interface ChangeGuildData {
    type: "changeGuildData";
    id: number;
    guildIds: {
        [key: string]: true;
    };
    changeTo: { name: string; faction: 0 | 1 };
}

export type LogBugs = (
    | IgnoreLogOfId
    | IgnoreBossOfDate
    | ChangeSpecDmgDoneOfDate
    | IgnoreLogOfCharacter
    | OverwriteSpecOfCharacter
    | IgnoreCharacter
    | ChangeKilltimeOfLog
    | ChangeGuildData
)[];
