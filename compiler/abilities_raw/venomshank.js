module.exports = {
    name: "Venomshank",
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
        "Bio Damage",
        "Main-Action",
    ],
    unlock_cost: 10,
    description: [
        {
            type: "p",
            content: [
                "You imbue your Melee Attack with Poison.",
                "Upon dealing Damage the Target is inflicted with the <b>Poison Effect.</b>",
            ],
        },
        {
            type: "list",
            content: [
                "<b>Poison Effect:</b>",
                "At the Start of the Caster's Next Turn the Target takes <box>(2d12 × ESS) Bio</box> Damage.",
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
                ["Poison Damage", "(2d12 × ESS) Bio"],
            ],
        },
    ],
}