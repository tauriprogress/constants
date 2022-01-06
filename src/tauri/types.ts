import realms from "./realms";
import specs from "./specs";

export type Realm = typeof realms[number];

export type SpecId = keyof typeof specs;
