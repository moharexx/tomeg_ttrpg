module.exports = {
    name: "Blazing Blitz",
    category: "active",
    type: [
        "Skill",
        "Spell",
    ],
    reqs_short: [
        "50 Acrobatics",
        "10 Evocation | 20 Transmutation | 50 Conjuration",
    ],
    reqs_full: [
        "<b>Skill:</b> 50 Acrobatics",
        "<b>Spell:</b> (10 INT | 10 WILL | 10 EGO), (10 Evocation | 20 Transmutation | 50 Conjuration)",
    ],
    tags: [
        "Offense",
        "Heat Damage, Flow Line AOE, Mobility",
        "Main-Action",
    ],
    unlock_cost: 10,
    description: [
        {
            type: "p",
            content: [
                "When used, Dash forward with a fiery jet.",
                "This is a Line AOE Melee Attack, which is Stopped at the First Target which Completely Negates the Attack.",
            ],
        },
        {
            type: "dots",
            content: [
                "Blazing Blitz's Movement does NOT Activate Reactions, or Trigger Stances.",
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
                ["Cast Time", "Main-Action"],
                ["Ability Cost", "10 HD × ESS"],
                ["Dash Distance", "MS × 2"],
                ["Heat-Pen", "6 × ESS"],
                ["Damage", "(2d6 × ESS) Heat"],
            ],
        },
    ],
}