module.exports = {
    name: "Aurora Blink",
    category: "active",
    type: [
        "Spell",
    ],
    reqs_short: [
        "10 Transmutation | 20 Evocation | 50 Enchantment",
    ],
    reqs_full: [
        "<b>Spell:</b> (20 INT | 20 WILL | 20 EGO), (10 Transmutation | 20 Evocation | 50 Enchantment)",
    ],
    tags: [
        "Offense",
        "Heat Damage, AGI Save, Static Pillar AOE, Mobility",
        "Main-Action",
    ],
    unlock_cost: 20,
    description: [
        {
            type: "p",
            content: [
                "When used, You Blink and release a pillar of aurora where you land.",
                "This is a Static Pillar AOE Melee Attack.",
                "When arriving to your new location, Entities inside the Pillar must succeed an <b>AGI Save</b> of <box>8 × ESS</box> or take Heat Damage.",
            ]
        },
        {
            type: "list",
            content: [
                "<b>COMBO:</b>",
                "If you Damage an Entity with this Ability, The Ability's <box>Cast Time</box> will be lowered to a <box>Bonus-Action</box> Untill the End of your Next Turn.",
                "Damaging Entities with less <box>Total XP</box> than <box>10 × ESS</box> put into this Ability will not Activate <b>COMBO.</b>",
            ],
        },
        {
            type: "dots",
            content: [
                "Aurora Blink's Movement does NOT Activate Reactions, or Trigger Stances.",
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
                ["Dash Distance", "3 × ESS^(1/3)"],
                ["AGI Save", "8 × ESS"],
                ["Pillar Radius", "CS^(1/3) / 2"],
                ["Pillar Height", "5 × CS^(1/3)"],
                ["Damage", "(2d4 × ESS) Heat"],
            ],
        },
    ],
}