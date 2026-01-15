module.exports = {
    name: "Icey Marble Bounce",
    category: "active",
    type: [
        "Spell",
    ],
    reqs_short: [
        "10 Conjuration | 20 Transmutation | 50 Abjuration",
    ],
    reqs_full: [
        "<b>Spell:</b> (20 INT | 20 WILL | 20 EGO), (10 Conjuration | 20 Transmutation | 50 Abjuration)",
    ],
    tags: [
        "Offense",
        "Cold Damage, Projectile",
        "Main-Action + Bonus-Action",
    ],
    unlock_cost: 20,
    description: [
        {
            type: "p",
            content: [
                "When used, throw a bouncy Ice Ball which burst of cold each Hit.",
                "When the Ice Ball Hits a Target (can be Terrain), it can Bounce.",
                "Each Bounce Resets the Range it can Travel, and can change the Direction and Target.",
                "The Ice Ball can bounce like this up to 2 times, meaning it Hits a Total of 3 times.",
                "The same Target cannot on a Bounce, but can be after another Bounce.",
            ],
        },
        {
            type: "list",
            content: [
                "<b>Cold Effect:</b>",
                `Damage against Soaked Targets is <a href="../main/mechanics.html#max_value" target="_blank">Maximalized.</a>`,
            ],
        },
        {
            type: "list",
            content: [
                "<b>Potency Boost:</b>",
                `For each <box>3 × ESS</box> points of <a href="../main/mechanics.html#potency" target="_blank">Potency</a> you can have +1 Bounces.`,
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
                ["Cast Time", "Main-Action + Bonus-Action"],
                ["Range", "5 × CS^(1/3)"],
                ["To-Hit Divisor", "2"],
                ["Damage", "(1d10 × ESS) Cold"],
            ],
        },
    ],
}