module.exports = {
    name: "Repair Soul",
    category: "active",
    type: [
        "Spell",
    ],
    reqs_short: [
        "Conjuration | Enchantment | Anima",
    ],
    reqs_full: [
        "(200 INT | 50 WILL | 20 EGO), (10 Anima | 20 Enchantment | 50 Conjuration)",
    ],
    tags: [
        "Defense",
        "SP, Touch",
        "1 Minute (20 Rounds) | (Main-Action + Bonus-Action, REST-HP)",
    ],
    unlock_cost: 20,
    description: [
        {
            type: "p",
            content: [
                "When used, you Touch an Entity and restore SP.",
                "If you spend <box>10 REST-HP × ESS</box>, then the <b>Cast Time<b> will be lowered to <box>Main-Action + Bonus-Action</box>",
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
                ["Cast Time", "1 Minute (20 Rounds) | Main-Action + Bonus-Action"],
                ["Ability Cost", "None | 10 REST-HP × ESS"],
                ["Range", "Touch"],
                ["SP Restoration", "3d6 × ESS"],
            ],
        },
    ],
}