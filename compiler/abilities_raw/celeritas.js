module.exports = {
    name: "Celeritas",
    category: "active",
    type: [
        "Spell",
    ],
    reqs_short: [
        "5 Enchantment | 10 Transmutation | 20 Anima",
    ],
    reqs_full: [
        "<b>Spell:</b> (5 INT | 10 WILL | 10 EGO), (5 Enchantment | 10 Transmutation | 20 Anima)",
    ],
    tags: [
        "Utility",
        "Soul Save, Targeting, Mobility, Crowd Control",
        "Bonus-Action",
    ],
    unlock_cost: 5,
    description: [
        {
            type: "p",
            content: [
                "When Cast on an Entity you can Pinpoint, the Entity Moves Instantly, out of Turn Order.",
                "The Caster can determine the Move, or let the Target determine it themselves.",
                "The Target is elegable to a <b>Soul Save</b> against the Effect.",
                "This Free Movement does NOT count as Forced Movement, can be curved, but cannot be made if the Entity has <box>0 MS</box>",
            ]
        },
        {
            type: "p",
            content: [
                "This Ability has reduced effectiveness when carrying heavy load, exact ruling determined by GM.",
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
                ["Range", "10 × CS^(1/3)"],
                ["Soul Save", "8 × ESS"],
                ["Instant Movement", "3 × ESS^(1/3)"],
            ],
        },
    ],
}