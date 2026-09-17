module.exports = {
    name: "Tapestry Undone",
    category: "active",
    type: [
        "Spell",
    ],
    reqs_short: [
        "10 Abjuration | 20 Evocation | 50 Anima",
    ],
    reqs_full: [
        "<b>Spell:</b> 20 CS, (10 Abjuration | 20 Evocation | 50 Anima)",
    ],
    tags: [
        "Offense",
        "Ranged, VIT Save, Demat Damage, Executing",
        "Main-Action + Bonus-Action",
    ],
    unlock_cost: 20,
    description: [
        {
            type: "p",
            content: [
                `When using this Ability, you gently undo the Pinpointed Entity.`,
                `The Target must make a <b>VIT Save</b> of <box>10 × ESS</box> or take <box>1d8 × ESS</box> <a href="../main/mechanics.html#executing" target="_blank">Executing</a> Demat Damage with <box>10 × ESS</box> Penetration.`,
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
                ["Range", "10 × CS^(1/3)"],
                ["VIT Save", "10 × ESS"],
                ["Demat Damage", "1d8 × ESS"],
                ["Demat-Pen", "10 × ESS"],
            ],
        },
    ],
}