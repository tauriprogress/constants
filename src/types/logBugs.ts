export interface CustomDateObject {
    from: number;
    to: number;
}

export interface IgnoreLogOfId {
    type: "ignoreLogOfId";
    id: number;
    realm: string;
}

export interface IgnoreBossOfDate {
    type: "ignoreBossOfDate";
    date: CustomDateObject;
    bossId: number;
}

export interface ChangeSpecDmgDoneOfDate {
    type: "changeSpecDmgDoneOfDate";
    date: CustomDateObject;
    specId: number;
    changeTo: true;
}

export interface IgnoreLogOfCharacter {
    type: "ignoreLogOfCharacter";
    name: string;
    realm: string;
}

export interface OverwriteSpecOfCharacter {
    type: "overwriteSpecOfCharacter";
    logId: number;
    realm: string;
    characterName: string;
    specId: number;
}

export interface IgnoreCharacter {
    type: "ignoreCharacter";
    name: string;
    realm: string;
}

export interface ChangeKilltimeOfLog {
    type: "changeKilltimeOfLog";
    id: 1608;
    changeTo: 1598564813;
}

export interface ChangeGuildData {
    type: "changeGuildData";
    id: number;
    guildIds: {
        [key: string]: true;
    };
    changeTo: { name: string; faction: number };
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
