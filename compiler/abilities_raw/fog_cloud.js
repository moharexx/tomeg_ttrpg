module.exports = {
    name: "Fog Cloud",
    category: "active",
    type: [
        "Spell",
    ],
    reqs_short: [
        "5 Conjuration | 10 Transmutation | 20 Enchantment",
    ],
    reqs_full: [
        "<b>Spell:</b> (5 INT | 10 WILL | 10 EGO), (5 Conjuration | 10 Transmutation | 20 Enchantment)",
    ],
    tags: [
        "Utility, Unlock",
        "Obscurance, Static Sphere AOE",
        "Main-Action",
    ],
    unlock_cost: 5,
    description: [
        {
            type: "p",
            content: [
                "When used, you create a cloud of fog, which Sight based detection cannot see through.",
            ]
        },
        {
            type: "p",
            content: [
                "A Wind or Shockwave based Attack with at least <box>20 × ESS</box> Damage disperses the Fog Cloud.",
                "If that Attack is an AOE then <box>5 × ESS</box> Damage is enough to disperse the Fog Cloud.",
            ]
        },
        {
            type: "list",
            content: [
                "<b>Shaped Cloud</b> (50 Transmutation):",
                "This Ability can be Shaped in whatever way the Caster desires, still fitting inside the Radius.",
            ],
        },
        {
            type: "p",
            content: [
                `<i>Be gone beholder!</i>`,
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
                ["Range", "5 × CS^(1/3)"],
                ["Radius", "4 × ESS^(1/3)"],
            ],
        },
    ],
}