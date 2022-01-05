import { Faction } from "../globalTypes";
import { Realm } from "./types";

export default [
    {
        guildName: "Public enemies",
        realm: "[HU] Tauri WoW Server",
        faction: 1,
    },
    {
        guildName: "Echo",
        realm: "[HU] Tauri WoW Server",
        faction: 1,
    },
] as {
    guildName: string;
    realm: Realm;
    faction: Faction;
}[];
