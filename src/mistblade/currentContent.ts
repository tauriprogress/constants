export default Object.freeze({
    abbreviation: "TOES",
    name: "Terrace of Endless Spring",
    lastBoss: "Sha of Fear",
    bossCount: 4,
    completionDifficulties: [5, 6],
    raids: [
        {
            name: "Terrace of Endless Spring",
            lastBoss: "Sha of Fear",
            bossCount: 4,
            id: 996,
            difficulties: [5, 6],
            image: "toes.png",
            bosses: [
                {
                    name: "Protectors of the Endless",
                    bossIdOfDifficulty: {
                        5: 1409,
                        6: 1409,
                    },
                },
                {
                    name: "Tsulong",
                    bossIdOfDifficulty: {
                        5: 1505,
                        6: 1505,
                    },
                },
                {
                    name: "Lei Shi",
                    bossIdOfDifficulty: {
                        5: 1506,
                        6: 1506,
                    },
                },
                {
                    name: "Sha of Fear",
                    bossIdOfDifficulty: {
                        5: 1431,
                        6: 1431,
                    },
                },
            ],
        },

        {
            name: "Heart of Fear",
            lastBoss: "Grand Empress Shek'zeer",
            bossCount: 6,
            id: 1009,
            difficulties: [5, 6],
            image: "hof.png",
            bosses: [
                {
                    name: "Imperial Vizier Zor'lok",
                    bossIdOfDifficulty: {
                        5: 1507,
                        6: 1507,
                    },
                },
                {
                    name: "Blade Lord Ta'yak",
                    bossIdOfDifficulty: {
                        5: 1504,
                        6: 1504,
                    },
                },
                {
                    name: "Garalon",
                    bossIdOfDifficulty: {
                        5: 1463,
                        6: 1463,
                    },
                },
                {
                    name: "Wind Lord Mel'jarak",
                    bossIdOfDifficulty: {
                        5: 1498,
                        6: 1498,
                    },
                },
                {
                    name: "Amber-Shaper Un'sok",
                    bossIdOfDifficulty: {
                        5: 1499,
                        6: 1499,
                    },
                },
                {
                    name: "Grand Empress Shek'zeer",
                    bossIdOfDifficulty: {
                        5: 1501,
                        6: 1501,
                    },
                },
            ],
        },

        {
            name: "Mogu'shan Vaults",
            lastBoss: "Will of the Emperor",
            bossCount: 6,
            id: 1008,
            difficulties: [5, 6],
            image: "msv.png",
            bosses: [
                {
                    name: "The Stone Guard",
                    bossIdOfDifficulty: {
                        5: 1395,
                        6: 1395,
                    },
                },
                {
                    name: "Feng the Accursed",
                    bossIdOfDifficulty: {
                        5: 1390,
                        6: 1390,
                    },
                },
                {
                    name: "Gara'jal the Spiritbinder",
                    bossIdOfDifficulty: {
                        5: 1434,
                        6: 1434,
                    },
                },
                {
                    name: "The Spirit Kings",
                    bossIdOfDifficulty: {
                        5: 1436,
                        6: 1436,
                    },
                },
                {
                    name: "Elegon",
                    bossIdOfDifficulty: {
                        5: 1500,
                        6: 1500,
                    },
                },
                {
                    name: "Will of the Emperor",
                    bossIdOfDifficulty: {
                        5: 1407,
                        6: 1407,
                    },
                },
            ],
        },
    ],
} as const);
