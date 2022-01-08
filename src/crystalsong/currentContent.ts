export default Object.freeze({
    abbreviation: "TOC",
    name: "Trial of the Crusader",
    lastBoss: "Anub'arak",
    bossCount: 5,
    completionDifficulties: [3],
    raids: [
        {
            name: "Trial of the Crusader",
            lastBoss: "Anub'arak",
            bossCount: 5,
            id: 649,
            difficulties: [0, 1, 2, 3],
            image: "toc.png",
            bosses: [
                {
                    name: "Northrend Beasts",
                    bossIdOfDifficulty: {
                        0: 629,
                        1: 630,
                        2: 631,
                        3: 632,
                    },
                },
                {
                    name: "Lord Jaraxxus",
                    bossIdOfDifficulty: {
                        0: 633,
                        1: 634,
                        2: 635,
                        3: 636,
                    },
                },
                {
                    name: "Faction Champions",
                    bossIdOfDifficulty: {
                        0: 637,
                        1: 638,
                        2: 639,
                        3: 640,
                    },
                },
                {
                    name: "Val'kyr Twins",
                    bossIdOfDifficulty: {
                        0: 641,
                        1: 642,
                        2: 643,
                        3: 644,
                    },
                },
                {
                    name: "Anub'arak",
                    bossIdOfDifficulty: {
                        0: 645,
                        1: 646,
                        2: 647,
                        3: 648,
                    },
                },
            ],
        },
    ],
} as const);
