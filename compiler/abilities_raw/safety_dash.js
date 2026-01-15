module.exports = {
    name: "Safety Dash",
    category: "active",
    type: [
        "Spell",
    ],
    reqs_short: [
        "5 Enchantment | 10 Transmutation | 20 Anima",
    ],
    reqs_full: [
        "<b>Spell:</b> (10 INT | 20 WILL | 20 EGO), (5 Enchantment | 10 Transmutation | 20 Anima)",
    ],
    tags: [
        "Utility",
        "Targeting, Soul Save, Mobility, Crowd Control",
        "Main-Action",
    ],
    unlock_cost: 10,
    description: [
        {
            type: "p",
            content: [
                "When Cast on an Entity you can Pinpoint, the Entity Moves Instantly, out of Turn Order.",
                "The Caster can determine the Move, or let the Target determine it themselves.",
                "The Target is elegable to a <b>Soul Save</b> against the Effect.",
                "This Free Movement does NOT Break Stances or Activate Triggers and Reactions, can be curved, but cannot be made if the Entity has <box>0 MS</box>",
                "This Ability has reduced effectiveness when carrying heavy load, exact ruling determined by GM.",
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
                ["Cast Time", "Main-Action"],
                ["Range", "10 × CS^(1/3)"],
                ["Soul Save", "10 × ESS"],
                ["Instant Movement", "4 × ESS^(1/3)"],
            ],
        },
    ],
}