module.exports = {
    name: "Delayed Falter",
    category: "active",
    type: [
        "Spell",
    ],
    reqs_short: [
        "5 Evocation | 10 Transmutation | 20 Enchantment",
    ],
    reqs_full: [
        "<b>Spell:</b> (10 INT | 10 WILL | 10 EGO), (5 Evocation | 10 Transmutation | 20 Enchantment)",
    ],
    tags: [
        "Offense",
        "Flow Sphere AOE, Debuff, Crowd Control",
        "Main-Action",
    ],
    unlock_cost: 10,
    description: [
        {
            type: "p",
            content: [
                "When used, you create a Delayed Explosion, that Staggers Entities.",
                "Choose a point within Range, the center of the Explosion is visible and obvious.",
                "On the chosen point, the Explosion will detonate at the start of Your Next Turn.",
                "This is a Flow Sphere AOE Ranged Attack, flowing out from the chosen position.",
            ],
        },
        {
            type: "dots",
            content: [
                `If the Entities would take Damage from this Ability Post-Mitigation, they take no Damage but gain the <a href="../main/mechanics.html#conditions" target="_blank">Staggered Condition.</a>`,
                "The Staggered Condition lasts till the End of the Target's Next Turn.",
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
                ["Range", "10 × CS^(1/3)"],
                ["Radius", "CS^(1/3)"],
                ["Damage Threshold", "(1d12 × ESS) Physical"],
            ],
        },
    ],
}