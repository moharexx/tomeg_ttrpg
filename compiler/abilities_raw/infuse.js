module.exports = {
    name: "Infuse",
    category: "meta",
    type: [
        "Skill",
    ],
    reqs_short: [
        "5 Anima | 10 Enchantment",
    ],
    reqs_full: [
        "5 Anima | 10 Enchantment",
    ],
    tags: [
        "Offense +",
        "SP Cost +",
    ],
    unlock_cost: 10,
    description: [
        {
            type: "p",
            content: [
                "You override the Properties of any Skill Type Ability, including Attack-Action, Grapple and Shove.",
                "The Skill or Attack-Action will be treated as if you had <box>Weapon Mastery of CS</box>, <box>Martial Mastery of CS</box>, <box>STR of CS</box>, and <box>AGI of CS</box>",
                "Any Weapon used is Up-Tiered to being <box>Tier of ESS</box> for that Skill.",
                "For each Action Infused with this Power you Spend the SP written in the Table Below.",
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
                ["Type", "Skill"],
                ["SP Cost per Free-Action", "1 × Parent ESS"],
                ["SP Cost per Bonus-Action", "1 × Parent ESS"],
                ["SP Cost per Main-Action", "2 × Parent ESS"],
            ],
        },
    ],
}