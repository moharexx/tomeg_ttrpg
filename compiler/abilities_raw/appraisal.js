module.exports = {
    name: "Appraisal (WIP, do not touch, worse than Familiar, rework imminent, trust me fr fr.)",
    category: "active",
    type: [
        "Skill",
        "Spell",
    ],
    reqs_short: [
        "200 Perception | 200 Intuition",
        "5 Divination",
    ],
    reqs_full: [
        "<b>Skill:</b> 200 Perception | 200 Intuition",
        "<b>Spell:</b> (5 INT | 10 WILL | 20 EGO), (5 Divination)",
    ],
    tags: [
        "Utility",
        "Sense",
        "Variable",
    ],
    unlock_cost: 5,
    description: [
        {
            type: "p",
            content: "When cast, Touch a Target and aquire basic information.",
        },
        {
            type: "p",
            content: "When casting this Ability you chose a Cast Time, and it determines the rest of the Ability Stats.",
        },
        {
            type: "table",
            full_width: "70%",
            width: ["20%", "40%", "40%"],
            content: [
                ["Cast Time", "Appraisal Power", "Range"],
                ["Free Action", "50 × ESS", "CS^(1/3)"],
                ["Main Action", "100 × ESS", "Touch"],
                ["1 Minute", "200 × ESS", "Touch"],
                ["1 Hour", "400 × ESS", "Touch"],
                ["1 Day", "800 × ESS", "Touch"],
            ],
        },
        {
            type: "list",
            content: [
                "<b>Appraising an Entity:</b>",
                "When you Appraise an Entity, you can get basic meta information, such as Health, Total XP, ect...",
                "You can also get generally known information, such as Species, Size, Weight, ect...",
                "The Ability Fails and returns if the Appraised Entity's Total XP is over <box>Appraisal Power</box>",
            ],
        },
        {
            type: "list",
            content: [
                "<b>Appraising an Item:</b>",
                "When you Appraise an Item, you can get basic information, such as Material, Size, Weight, General Quality, ect...",
            ],
        },
        {
            type: "list",
            content: [
                "<b>Appraising Magical Effects:</b>",
                "When you Appraise a Magical Effect, you get to know what it does, and how it works.",
                "The Ability Fails if the Magical Effect's Tier or Casted ESS is over <box>Appraisal Power / 100</box>",
            ],
        },
    ],
    stats: [
        {
            type: "table",
            full_width: "100%",
            width: ["30%", "70%"],
            content: [
                ["Ability Stat", "Value"],
                ["Cast Time", "Variable"],
                ["Range", "Variable"],
            ],
        },
    ],
}