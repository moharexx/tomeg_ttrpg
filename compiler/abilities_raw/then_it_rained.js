module.exports = {
    name: "Then It Rained",
    category: "active",
    type: [
        "Skill",
    ],
    reqs_short: [
        "20 Melee Weapon",
    ],
    reqs_full: [
        "<b>Skill:</b> 20 Melee Weapon",
    ],
    tags: [
        "Offense",
        "Melee, Bio Damage, VIT Save, Executing",
        "Main-Action + Bonus-Action",
    ],
    unlock_cost: 20,
    description: [
        {
            type: "p",
            content: [
                `Force your opponent to kneal, then with a single strike, pull all the blood out from their body and split them in half.`,
                `When using this Ability, you make a Melee Attacks against a Target.`,
                `On a Hit, the Target must make a <b>VIT Save</b> of <box>14 × ESS</box> or take <box></box> <a href="../main/mechanics.html#executing" target="_blank">Executing</a> Bio Damage with <box>10 × ESS</box> Bio-Pen.`,
            ],
        },
        {
            type: "p",
            content: [
                `<i>"you should have never set foot on this planet"</i> - Adam`,
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
                ["VIT Save", "14 × ESS"],
                ["Damage", "(1d12 × ESS) Bio"],
                ["Bio-Pen", "10 × ESS"],
            ],
        },
    ],
}