module.exports = {
    name: "X-Slash",
    category: "active",
    type: [
        "Skill",
    ],
    reqs_short: [
        "10 Melee Weapon | 10 Martial Arts",
    ],
    reqs_full: [
        "<b>Skill:</b> 10 Melee Weapon | 10 Martial Arts",
    ],
    tags: [
        "Offense",
        "Variable Damage",
        "Main-Action + Bonus-Action, GRIT",
    ],
    unlock_cost: 10,
    description: [
        {
            type: "p",
            content: [
                "When using this Ability, you make Two Melee Attacks against a Single Target.",
                "If at least one of the Two Attacks Hit, the Target takes Damage.",
                "If both Attacks Hit the Target does NOT take Extra Damage.",
                "If any Hit is a CRIT, this Ability CRITs.",
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
                ["Ability Cost", "5 GRIT × ESS"],
                ["Damage", "((1d12 + 10) × ESS) Weapon Damage"],
            ],
        },
    ],
}