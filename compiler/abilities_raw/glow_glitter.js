module.exports = {
    name: "Glow Glitter",
    category: "active",
    type: [
        "Spell",
    ],
    reqs_short: [
        "5 Enchantment | 10 Divination | 20 Evocation",
    ],
    reqs_full: [
        "<b>Spell:</b> (5 INT | 5 WILL | 5 EGO), (5 Enchantment | 10 Divination | 20 Evocation)",
    ],
    tags: [
        "Utility",
        "Static Cube AOE, Sense",
        "Main-Action",
    ],
    unlock_cost: 10,
    description: [
        {
            type: "p",
            content: [
                "You choose an Area, glowing glitter emerges and covers everything.",
                "Targets in the Area can make a <b>(VIT | Soul) Save</b> of <box>10 × ESS</box>, or get the <b>Light Effect.</b>",
            ],
        },
        {
            type: "list",
            content: [
                "<b>Light Effect:</b>",
                "Targets have a faint glow, revealing them in Darkness, and Invisibility.",
                "Lasts 1 Minute (20 Rounds).",
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
                ["Range", "5 × CS^(1/3)"],
                ["(VIT | Soul) Save", "12 × ESS"],
                ["Cube Side Length", "4 × ESS^(1/3)"],
            ],
        },
    ],
}