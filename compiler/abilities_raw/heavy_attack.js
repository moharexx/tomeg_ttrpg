module.exports = {
    name: "Heavy Attack",
    category: "on_attack",
    type: [
        "Skill",
        "(Strength)",
    ],
    reqs_short: [
        "10 STR",
    ],
    reqs_full: [
        "<b>Skill:</b> 10 STR",
    ],
    tags: [
        "Offense, Cooldown",
        "Variable Damage, GRIT",
        "Free-Action",
    ],
    unlock_cost: 5,
    description: [
        {
            type: "p",
            content: [
                "Spend GRIT to give Parent Attack On-Hit Damage of the same type.",
            ],
        },
        {
            type: "dots",
            content: [
                "This Ability can only be used if the Parent Attack uses STR as it's Main Stat.",
                "The Bonus Damage is equal to GRIT spent.",
                "An Attack-Action using a Heavy or Solo-Wielded Weapon can Spend up to ×2 the GRIT.",
                "This Ability can only be used once per Round.",
            ],
        },
        {
            type: "p",
            content: [
                "<b>Note:</b> Abilities which use STR as a Stat in any of their formulas can benefit from Heavy Attack.",
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
                ["Cooldown", "Can use Next Round"],
                ["Requirement", "Strength based Attack"],
                ["Max GRIT Spent", "STR / 5"],
                ["(Heavy | Solo-Wield) Max GRIT", "×2"],
            ],
        },
    ],
}