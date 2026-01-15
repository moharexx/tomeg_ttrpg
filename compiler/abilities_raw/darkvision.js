module.exports = {
    name: "Darkvision",
    category: "active",
    type: [
        "Spell",
    ],
    reqs_short: [
        "200 Perception",
        "5 Enchantment | 10 Divination | 20 Transmutation",
    ],
    reqs_full: [
        "<b>Skill:</b> 200 Perception",
        "<b>Spell:</b> (5 INT | 10 WILL | 20 EGO), (5 Enchantment | 10 Divination | 20 Transmutation)",
    ],
    tags: [
        "Utility",
        "Touch, Buff, Sense",
        "Bonus-Action",
    ],
    unlock_cost: 5,
    description: [
        {
            type: "p",
            content: [
                "When used, you Touch an Entity and grant it Darkvision.",
                "The Target Treats Low-Light and Darkness as if it were Bright-Light.",
                "Low-Light and Darkness with more <b>ESS</b> than <box>This Ability's ESS</box> are remain dark.",
            ]
        },
        {
            type: "p",
            content: [
                "When this Ability is Cast as a Skill it's Range is Self.",
            ]
        },
    ],
    stats: [
        {
            type: "table",
            full_width: "100%",
            width: ["30%", "70%"],
            content: [
                ["Ability Stat", "Value"],
                ["Cast Time", "Bonus-Action"],
                ["Duration", "1 Minute (20 Rounds)"],
                ["Range", "Touch"],
            ],
        },
    ],
}