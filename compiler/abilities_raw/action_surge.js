module.exports = {
    name: "Action Surge (WIP)",
    category: "active",
    type: [
        "Innate",
    ],
    reqs_short: [
        "10 INIT",
    ],
    reqs_full: [
        "<b>Innate:</b> 10 INIT",
    ],
    tags: [
        "Offense, Defense, Utility, Cooldown",
        "Self, Buff, Debuff, Action Economy",
        "Free-Action",
    ],
    unlock_cost: 10,
    description: [
        {
            type: "p",
            content: [
                "Your horizon expands, everything around you slows.",
                "You gain a Main-Action, but at Your Next Turn you gain no Actions.",
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
                ["Cooldown", "Short-Rest"],
                ["Range", "Self"]
            ],
        },
    ],
}