module.exports = {
    name: "Vicious Pull",
    category: "active",
    type: [
        "Spell",
    ],
    reqs_short: [
        "5 Transmutation | 10 Evocation | 20 Conjuration",
    ],
    reqs_full: [
        "<b>Spell:</b> 10 CS, (5 Enchantment | 10 Evocation | 20 Conjuration)",
    ],
    tags: [
        "Offense",
        "Ranged, STR Save, Debuff, Crowd Control",
        "Main-Action",
    ],
    unlock_cost: 10,
    description: [
        {
            type: "p",
            content: [
                `When used, you Pull a Pinpointed Entity within Range towards yourself.`,
                `The Target gets Pulled <box>3 × ESS^(1/3)</box> meters on a Failed <b>STR Save</b> of <box>8 × ESS</box>`,
                `Additionally, the Target can also get the <a href="../main/mechanics.html#conditions" target="_blank">Prone Condition</a>.`,
            ]
        }
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
                ["STR Save", "8 × ESS"],
                ["Pull Distance", "3 × ESS^(1/3)"],
            ],
        },
    ],
}