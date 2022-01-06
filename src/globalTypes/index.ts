export type Faction = 0 | 1;
export type Role = "damage" | "heal" | "tank";
export type RangeType = "melee" | "ranged";

export interface CustomDateObject {
    from: number;
    to: number;
}

export interface IgnoreLogOfId<Realm> {
    type: "ignoreLogOfId";
    id: number;
    realm: Realm;
}

export interface IgnoreBossOfDate {
    type: "ignoreBossOfDate";
    date: CustomDateObject;
    bossId: number;
}

export interface ChangeSpecDmgDoneOfDate<SpecId> {
    type: "changeSpecDmgDoneOfDate";
    date: CustomDateObject;
    specId: SpecId;
    changeTo: true;
}

export interface IgnoreLogOfCharacter<Realm> {
    type: "ignoreLogOfCharacter";
    name: string;
    realm: Realm;
}

export interface OverwriteSpecOfCharacter<Realm, SpecId> {
    type: "overwriteSpecOfCharacter";
    logId: number;
    realm: Realm;
    characterName: string;
    specId: SpecId;
}

export interface IgnoreCharacter<Realm> {
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

export type LogBugs<Realm, SpecId> = (
    | IgnoreLogOfId<Realm>
    | IgnoreBossOfDate
    | ChangeSpecDmgDoneOfDate<SpecId>
    | IgnoreLogOfCharacter<Realm>
    | OverwriteSpecOfCharacter<Realm, SpecId>
    | IgnoreCharacter<Realm>
    | ChangeKilltimeOfLog
    | ChangeGuildData
)[];
