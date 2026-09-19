module.exports = {
    name: "Star Cannon",
    category: "active",
    type: [
        "Spell",
    ],
    reqs_short: [
        "10 Evocation | 20 Transmutation | 50 Conjuration",
    ],
    reqs_full: [
        "Spell: 20 CS, (10 Evocation | 20 Transmutation | 50 Conjuration)",
    ],
    tags: [
        "Offense",
        "Ranged, Heat Damage, Projectile, To-Hit",
        "Main-Action",
    ],
    unlock_cost: 20,
    description: [
        {
            type: "p",
            content: [
                "When used, you summon a Star Cannon in Summon Range.",
                "On your Next Turn you can make the Star Cannon shoot out a beam of light, as a Free-Action.",
                "If you don't it just dissipates into nothing, and gets wasted.",
            ],
        },
        {
            type: "p",
            content: [
                `<i>"dodge all you want, one hit will turn you into a cloud of blood"</i> - Adam`,
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
                ["Summon Range", "5 × CS^(1/3)"],
                ["Cannon Range", "20 × CS^(1/3)"],
                ["To-Hit Bonus", "10 × ESS"],
                ["Heat Damage", "5 × ESS"],
            ],
        },
    ],
}