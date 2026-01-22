module.exports = {
    name: "Ghostwalker ",
    category: "on_attack",
    type: [
        "Skill",
        "(Melee)",
    ],
    reqs_short: [
        "10 Melee Weapon",
    ],
    reqs_full: [
        "<b>Skill:</b> 10 Melee Weapon",
    ],
    tags: [
        "Offense",
        "Psychic Damage",
        "Main-Action",
    ],
    unlock_cost: 10,
    description: [
        {
            type: "p",
            content: [
                "You imbue your Melee Attack with Ghostly Energy.",
                "On a Hit you deal additional <box>(1d8 × ESS) Psychic</box> Damage and become Transparent until the End of Your Next Turn.",
                "While being Transparent, you cannot be Pinpoint by any Sense, unless Perception Check is at least <box>10 × ESS</box>",
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
                ["Special Condition", "Melee"],
                ["Damage", "(1d8 × ESS) Psychic "],
            ],
        },
    ],
}