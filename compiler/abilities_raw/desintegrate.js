module.exports = {
    name: "Disintegrate",
    category: "active",
    type: [
        "Spell",
    ],
    reqs_short: [
        "20 Abjuration | 50 Evocation | 200 Transmutation",
    ],
    reqs_full: [
        "<b>Spell:</b> 20 CS, (20 Abjuration | 50 Evocation | 200 Transmutation)",
    ],
    tags: [
        "Offense",
        "Ranged, Demat Damage",
        "Main-Action + Bonus-Action",
    ],
    unlock_cost: 50,
    description: [
        {
            type: "p",
            content: [
                `When used, it fires a Single Target beam of Disintegration, in a straight line.`,
                `This Ability has a Static To-Hit, and can't CRIT.`,
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
                ["Range", "20 × CS^(1/3)"],
                ["Static To-Hit", "10 × ESS"],
                ["Demat Damage", "15 × ESS"],
            ],
        },
    ],
}