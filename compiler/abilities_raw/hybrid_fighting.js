module.exports = {
    name: "Hybrid Fighting",
    category: "passive",
    type: [
        "Innate",
    ],
    reqs_short: [
        "5 STR, 5 AGI",
    ],
    reqs_full: [
        "<b>Innate:</b> 5 STR, 5 AGI",
    ],
    tags: [
        "Utility",
        "Mastery",
    ],
    unlock_cost: 5,
    description: [
        {
            type: "p",
            content: [
                "The To-Hit Modifier of Weapons can be <box>((STR | AGI) + Melee Weapon + Martial Arts) / 4</box>, to a Maximum of <box>Total XP / 20</box>",
                "For Attacks and Abilities with <b>Finesse</b> Weapons, their Main Stat can be the sum of STR and AGI, to a Maximum of <box>Total XP / 10</box>",
                "For being Proficient in using Finesse Weapons (not having Disadvantage), add together your Melee Weapon and Martial Arts Masteries.",
            ],
        },
        {
            type: "p",
            content: [
                "For the Maximum Mastery you can put into Melee Weapon and Martial Arts, add together your STR and AGI, to a Maximum of <box>Total XP / 10</box>",
                "For the purpose of adding to HD, you add together your Melee Weapon, Martial Arts, and Ballistic Masteries, to a Maximum of <box>Total XP / 10</box>",
                "The MS formula can benefit from both STR and AGI; <box>2 × (STR + AGI)^(1/3)</box>, to a Maximum of <box>2 × (Total XP / 10)^(1/3)</box>",
            ],
        },
        {
            type: "p",
            content: [
                "<b>Note:</b> This Ability cannot result in higher stats than a maxxed character without it, hence every formula is limited by Total XP.",
                "So like if someone maxxes STR and Melee Weapon, you cannot have higher To-Hit at the same Total XP with this Ability.",
            ],
        },
    ],
}