export default Object.freeze({
    abbreviation: "HM",
    name: "Highmaul",
    lastBoss: "Imperator Mar'gok",
    bossCount: 7,
    completionDifficulties: [16],
    raids: [
        {
            name: "Highmaul",
            lastBoss: "Imperator Mar'gok",
            bossCount: 7,
            id: 1228,
            difficulties: [15, 16],
            image: "hm.png",
            bosses: [
                {
                    name: "Kargath Bladefist",
                    bossIdOfDifficulty: {
                        15: 1721,
                        16: 1721,
                    },
                },
                {
                    name: "The Butcher",
                    bossIdOfDifficulty: {
                        15: 1706,
                        16: 1706,
                    },
                },
                {
                    name: "Brackenspore",
                    bossIdOfDifficulty: {
                        15: 1720,
                        16: 1720,
                    },
                },
                {
                    name: "Tectus, The Living Mountain",
                    bossIdOfDifficulty: {
                        15: 1722,
                        16: 1722,
                    },
                },
                {
                    name: "Twin Ogron",
                    bossIdOfDifficulty: {
                        15: 1719,
                        16: 1719,
                    },
                },
                {
                    name: "Ko'ragh",
                    bossIdOfDifficulty: {
                        15: 1723,
                        16: 1723,
                    },
                },
                {
                    name: "Imperator Mar'gok",
                    bossIdOfDifficulty: {
                        15: 1705,
                        16: 1705,
                    },
                },
            ],
        },
    ],
} as const);
