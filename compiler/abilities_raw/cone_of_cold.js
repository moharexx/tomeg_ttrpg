module.exports = {
    name: "Cone Of Cold",
    category: "active",
    type: [
        "Spell",
    ],
    reqs_short: [
        "10 Abjuration | 20 Transmutation | 50 Evocation",
    ],
    reqs_full: [
        "<b>Spell:</b> (20 INT | 20 WILL | 20 EGO), (10 Abjuration | 20 Transmutation | 50 Evocation)",
    ],
    tags: [
        "Offense",
        "Ranged, Flow Cone AOE, VIT Save, Cold Damage",
        "Main-Action + Bonus-Action",
    ],
    unlock_cost: 20,
    description: [
        {
            type: "p",
            content: [
                "When used, shoot a Cone of cold.",
                "This is a Flow Cone AOE Ranged Save, flowing out from the Caster.",
                "All Targets Inside the Cone must make a <b>VIT Save</b> or get Hit.",
            ],
        },
        {
            type: "list",
            content: [
                "<b>Cold Effect:</b>",
                `Damage against Soaked Targets is <a href="../main/mechanics.html#max_value" target="_blank">Maximalized.</a>`,
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
                ["Cone Length", "4 × CS^(1/3)"],
                ["Cone Width", "60° (~2 Forward = +2 Width)"],
                ["VIT Save", "10 × ESS"],
                ["Damage", "(2d8 × ESS) Cold"],
            ],
        },
    ],
}