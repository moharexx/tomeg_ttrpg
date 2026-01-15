module.exports = {
    name: "Wall Walk",
    category: "active",
    type: [
        "Skill",
        "Spell",
    ],
    reqs_short: [
        "1000 Athletics",
        "5 Enchantment | 10 Transmutation | 20 Abjuration",
    ],
    reqs_full: [
        "<b>Skill:</b> 1000 Athletics",
        "<b>Spell:</b> (5 INT | 10 WILL | 20 EGO), (5 Enchantment | 10 Transmutation | 20 Abjuration)",
    ],
    tags: [
        "Utility",
        "Touch, Mobility, Buff",
        "Bonus-Action",
    ],
    unlock_cost: 5,
    description: [
        {
            type: "p",
            content: [
                "When used, you Touch a Target Object or Entity and grant it Wall Walk.",
                "The Target Sticks to solid surfaces, and can walk on even vertical, and upside down solid surfaces.",
                "If the Target experiences more Forced Movement than <box>CS^(1/3) meters</box> then the Target is pushed off the Surface, and no longer Sticks.",
                "If the Target connects it's body to a solid surface while falling, it instantly stop the fall, but still takes Fall Damage.",
            ]
        },
        {
            type: "p",
            content: [
                "If you use this as a <b>Skill</b>, it's Range is <b>Self</b>, Duration is Permanent, and Toggleable as a <b>Free-Action Reaction.</b>",
                "When used as a Skill, the CS of this Ability is STR.",
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
                ["Forced Movement Threshold", "CS^(1/3)"],
            ],
        },
    ],
}