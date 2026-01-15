module.exports = {
    name: "Sharpshooter",
    category: "passive",
    type: [
        "Innate",
    ],
    reqs_short: [
        "5 AGI, (5 INT | 5 WILL | 5 EGO)",
    ],
    reqs_full: [
        "5 AGI, (5 INT | 5 WILL | 5 EGO)",
    ],
    tags: [
        "Offense",
        "Mastery",
    ],
    unlock_cost: 5,
    description: [
        {
            type: "p",
            content: [
                "The Maximum Mastery you can put into Ballistics can be equal to your <box>AGI + CS</box>, to a Maximum of <box>Total XP / 10</box>",
                "Ballistic Mastery's Modifier (and To-Hit) can be <box>(AGI | CS) / 4 + Ballistic / 2</box>, to a Maximum of <box>Total XP / 20</box>",
                "For Ranged Abilities (Including Attack-Actions) you can replace AGI Scalings with <box>AGI + CS + Ballistic Mastery</box>, to a Maximum of <box>Total XP / 10</box>",
            ],
        },
        {
            type: "p",
            content: [
                "<b>Note:</b> This Ability cannot result in higher stats than a maxxed character without it, hence every formula is limited by Total XP.",
                "So like if someone maxxes AGI and Ballistic, you cannot have higher To-Hit at the same Total XP with this Ability.",
            ],
        },
    ],
}