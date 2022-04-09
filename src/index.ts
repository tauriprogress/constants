import * as tauri from "./tauri";
import * as crystalsong from "./crystalsong";
import * as shared from "./shared";
import {
    characterClassSpecs,
    characterRaceFaction,
    characterRaceNames,
    characterSpecClass,
    itemSlotNames,
    raidNameId,
    shortRealms,
    realmGroups,
    maxCharacterScore,
} from "./shared";

export { characterClassSpecs };
export { characterRaceFaction };
export { characterRaceNames };
export { characterSpecClass };
export { itemSlotNames };
export { raidNameId };
export { shortRealms };
export { realmGroups };
export { tauri };
export { crystalsong };
export { maxCharacterScore };

export default {
    ...shared,
    tauri,
    crystalsong,
};
