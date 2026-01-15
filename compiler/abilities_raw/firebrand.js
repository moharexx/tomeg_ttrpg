module.exports = {
    name: "Firebrand",
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
        "Heat Damage",
        "Main-Action",
    ],
    unlock_cost: 10,
    description: [
        {
            type: "p",
            content: [
                "You imbue your Melee Attack with Fire.",
                "On a Hit you deal additional <box>(1d12 × ESS) Heat</box> Damage and inflict the <b>Heat Effect.</b>",
            ],
        },
        {
            type: "list",
            content: [
                "<b>Heat Effect:</b>",
                "At the Start of the Caster's Next Turn the Target takes <box>(1d12 × ESS) Heat</box> Damage.",
                "This Effect Ends after Dealing Damage.",
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
                ["Damage", "(1d12 × ESS) Heat"],
            ],
        },
    ],
}