module.exports = {
    name: "Water Bolas",
    category: "active",
    type: [
        "Skill",
        "Spell",
    ],
    reqs_short: [
        "Melee Weapon | Ballistic | Martial Arts",
        "Evocation | Conjuration | Enchantment",
    ],
    reqs_full: [
        "20 Martial Arts",
        "(10 INT | 10 WILL | 10 EGO), (10 Conjuration | 20 Enchantment | 50 Evocation)",
    ],
    tags: [
        "Offense",
        "Cold Damage, Crowd Control, Debuff",
        "Main-Action",
    ],
    unlock_cost: 10,
    description: [
        {
            type: "p",
            content: [
                "When you use this Ability, you throw a Water Bolas, which can trip the Target Entity.",
                `On Hit, the target must Succeed a STR Save or Gain the <a href="../main/mechanics.html#conditions">Prone Condition.</a>`,
                "The STR Save can be repeated using a Main-Action.",
                "The Prone Condition can only be ended by succeeding a <box>STR Save</box> or by reducing the <box>Bolas HP</box> to 0.",
                "While the Bolas is on an Entity, The Entity takes Damage at the Start of the Casters Turn.",
            ],
        },
        {
            type: "dots",
            content: [
                "The Bolas Takes Double Damage from Heat Damage, and Heals from Cold Damage.",
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
                ["Duration", "1 Minute (20 Rounds)"],
                ["STR Save", "12 × ESS"],
                ["Range", "10 × CS^(1/3)"],
                ["Bolas HP", "10 × ESS"],
                ["Damage", "(2d4 × ESS) Cold"],
            ],
        },
    ],
}