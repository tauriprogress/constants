export default Object.freeze({
    abbreviation: "MSV",
    name: "Mogu'shan Vaults",
    lastBoss: "Will of the Emperor",
    bossCount: 6,
    completionDifficulties: [5, 6],
    raids: [
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
