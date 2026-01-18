module.exports = {
    name: "Indomitable",
    category: "reactive",
    type: [
        "Innate",
        "Spell",
    ],
    reqs_short: [
        "50 CS",
        "20 CS, (10 Abjuration | 20 Anima | 50 Enchantment)",
    ],
    reqs_full: [
        "<b>Innate:</b> 50 CS",
        "<b>Spell:</b> 20 CS, (10 Abjuration | 20 Anima | 50 Enchantment)",
    ],
    tags: [
        "Defense, Cooldown",
        "Self, Negation",
        "Free-Action, SP",
    ],
    unlock_cost: 20,
    description: [
        {
            type: "p",
            content: [
                "Spend <b>SP</b> to give Your <b>Soul Save</b> a small Bonus.",
                "This Ability can be used after determiming if the Save is a Fail or not.",
            ],
        },
        {
            type: "list",
            content: [
                "<b>Potency Boost:</b>",
                `For each 2 points of <a href="../main/mechanics.html#potency" target="_blank">Potency</a> you can add +1 to Save Bonus.`,
                `This does not have additional <b>SP</b> Cost.`,
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
                ["Cast Time", "Free-Action"],
                ["Cooldown", "Start of Next Turn"],
                ["Trigger", "Make an Soul Save"],
                ["SP to Soul Save Bonus", "2 to 1"],
                ["Max SP Spent", "4 × ESS"],
            ],
        },
    ],
}