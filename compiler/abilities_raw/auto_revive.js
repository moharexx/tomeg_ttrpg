module.exports = {
    name: "Auto-Revive",
    category: "active",
    type: [
        "Spell",
    ],
    reqs_short: [
        "5 Transmutation | 10 Enchantment | 20 Abjuration",
    ],
    reqs_full: [
        "<b>Spell:</b> (20 INT | 10 WILL | 5 EGO), (5 Transmutation | 10 Enchantment | 20 Abjuration)",
    ],
    tags: [
        "Defense",
        "Healing, Targeting",
        "Main-Action",
    ],
    unlock_cost: 5,
    description: [
        {
            type: "p",
            content: [
                "You give a protective halo to a chosen Entity, if your Target falls, the halo brings them back.",
                "When used, the Target Entity will be effected by this spell until the Start of Your Next Turn.",
                "Healing from this Spell can put the Soul back in the body, and thus Revive the Target.",
                `On a Successful Revival, or save from the <a href="../main/mechanics.html#conditions" target="_blank">Dying Condition</a>, the Target is also saved from the <a href="../main/mechanics.html#conditions" target="_blank">Prone Condition</a>.`,
            ],
        },
        {
            type: "list",
            content: [
                "<b>Halo Triggers:</b>",
                "<b>Target gets Reduced from Over 0 HP, to 0 or Less HP:</b> Target recieves normal amount of Healing.",
                "<b>Target gets Reduced below Negative Max HP, and Dies:</b> Double the Healing.",
            ],
        },
        {
            type: "p",
            content: [
                "This Ability cannot CRIT!",
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
                ["Range", "10 × CS^(1/3)"],
                ["Healing", "6 × ESS"],
            ],
        },
    ],
}