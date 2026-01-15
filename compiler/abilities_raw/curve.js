module.exports = {
    name: "Curve",
    category: "meta",
    type: [
        "Any",
        "(Projectile)",
        "(Line)"
    ],
    reqs_short: [
        "50 Ballistic | 50 Anima",
    ],
    reqs_full: [
        "50 Ballistic | 50 Anima",
    ],
    tags: [
        "Range +",
        "Action Cost +, Range -",
    ],
    unlock_cost: 50,
    description: [
        {
            type: "p",
            content: [
                "Using this Meta-Ability on a Projectile, or Line AOE, allows you to curve it however you'd like.",
                "This Meta-Ability can also be put on Attack-Actions.",
            ],
        },
        {
            type: "list",
            content: [
                "<b>Using on Projectile</b> (Free-Action):",
                "The Projectiles Total travel Distance will be Half of it's Original Range.",
            ],
        },
        {
            type: "list",
            content: [
                "<b>Using on Line AOE</b> (Bonus-Action):",
                "The Line's Length will be Half of it's Original Length.",
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
                ["Type", "Projectile or Line AOE"],
            ],
        },
    ],
}