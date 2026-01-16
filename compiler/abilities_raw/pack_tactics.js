module.exports = {
    name: "Pack Tactics",
    category: "stance",
    type: [
        "Skill",
    ],
    reqs_short: [
        "5 Melee Weapon | 5 Ballistic | 5 Martial Arts",
    ],
    reqs_full: [
        "<b>Skill:</b> 5 Melee Weapon | 5 Ballistic | 5 Martial Arts",
    ],
    tags: [
        "Offense",
        "Self, Parent Damage, Negation",
        "Bonus-Action / Continuous",
    ],
    unlock_cost: 20,
    description: [
        {
            type: "p",
            content: [
                `When using this Ability, you are put in <b>Pack Tactics Stance</b>.`,
                `While in <b>Pack Tactics Stance</b> for every other ally Entity in <b>Pack Tactics Stance</b>, you gain Bonus <box># × 1 × ESS</box> Damage on any initial Damage.`,
            ],
        },
        {
            type: "p",
            content: [
                `The Stance Breaks only when entering any other Stance.`,
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
                ["Stance Trigger", "None"],
                ["Tactics Ragne", "5 × ESS^(1/3)"],
                ["Bonus Damage", "(# × 1 × ESS) Parent"],
            ],
        },
    ],
}