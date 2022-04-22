export default Object.freeze({
    abbreviation: "ICC",
    name: "Icecrown Citadel",
    lastBoss: "The Lich King",
    bossCount: 12,
    completionDifficulties: [3],
    raids: [
        {
            name: "Icecrown Citadel",
            lastBoss: "The Lich King",
            bossCount: 12,
            id: 631,
            difficulties: [0, 1, 2, 3],
            image: "icc.png",
            bosses: [
                {
                    name: "Lord Marrowgar",
                    bossIdOfDifficulty: {
                        0: 845,
                        1: 857,
                        2: 845,
                        3: 857,
                    },
                },
                {
                    name: "Lady Deathwhisper",
                    bossIdOfDifficulty: {
                        0: 846,
                        1: 858,
                        2: 846,
                        3: 858,
                    },
                },
                {
                    name: "Icecrown Gunship Battle",
                    bossIdOfDifficulty: {
                        0: 847,
                        1: 859,
                        2: 847,
                        3: 859,
                    },
                },
                {
                    name: "Deathbringer Saurfang",
                    bossIdOfDifficulty: {
                        0: 848,
                        1: 860,
                        2: 848,
                        3: 860,
                    },
                },
                {
                    name: "Festergut",
                    bossIdOfDifficulty: {
                        0: 849,
                        1: 861,
                        2: 849,
                        3: 861,
                    },
                },
                {
                    name: "Rotface",
                    bossIdOfDifficulty: {
                        0: 850,
                        1: 862,
                        2: 850,
                        3: 862,
                    },
                },
                {
                    name: "Professor Putricide",
                    bossIdOfDifficulty: {
                        0: 851,
                        1: 863,
                        2: 851,
                        3: 863,
                    },
                },
                {
                    name: "Blood Council",
                    bossIdOfDifficulty: {
                        0: 852,
                        1: 864,
                        2: 852,
                        3: 864,
                    },
                },
                {
                    name: "Queen Lana'thel",
                    bossIdOfDifficulty: {
                        0: 853,
                        1: 865,
                        2: 853,
                        3: 865,
                    },
                },
                {
                    name: "Valithria Dreamwalker",
                    bossIdOfDifficulty: {
                        0: 854,
                        1: 866,
                        2: 854,
                        3: 866,
                    },
                },
                {
                    name: "Sindragosa",
                    bossIdOfDifficulty: {
                        0: 855,
                        1: 867,
                        2: 855,
                        3: 867,
                    },
                },
                {
                    name: "The Lich King",
                    bossIdOfDifficulty: {
                        0: 856,
                        1: 868,
                        2: 856,
                        3: 868,
                    },
                },
            ],
        },
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
