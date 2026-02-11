module.exports = {
    name: "Rush",
    category: "active",
    type: [
        "Skill",
    ],
    reqs_short: [
        "10 Athletics",
    ],
    reqs_full: [
        "<b>Skill:</b> 10 Athletics",
    ],
    tags: [
        "Offense",
        "Melee, Weapon Damage, Mobility",
        "Main-Action + Bonus-Action",
    ],
    unlock_cost: 5,
    description: [
        {
            type: "p",
            content: [
                `You Rush in a Straight Line, and make an <box>Melee Attack-Action | Grapple | Shove</box> against a Target.`,
                `If you are <b>Sprinting</b>, Double the Rush Distance.`,
                `Rush's Movement cannot curve.`,
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
                ["Cast Time", "Main-Action + Bonus-Action"],
                ["Rush Distance", "2 × MS"],
            ],
        },
    ],
}