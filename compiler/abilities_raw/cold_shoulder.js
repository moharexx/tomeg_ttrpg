module.exports = {
    name: "Cold Shoulder",
    category: "active",
    type: [
        "Skill",
        "Spell",
    ],
    reqs_short: [
        "20 Martial Arts",
        "5 Abjuration | 10 Transmutation | 20 Evocation",
    ],
    reqs_full: [
        "<b>Skill:</b> 20 Martial Arts",
        "<b>Spell:</b> (10 INT | 10 WILL | 10 EGO), (5 Abjuration | 10 Transmutation | 20 Evocation)",
    ],
    tags: [
        "Offense",
        "Cold Damage, VIT Save, Touch, Crowd Control",
        "Main-Action",
    ],
    unlock_cost: 10,
    description: [
        {
            type: "p",
            content: [
                "When used, Touch an Entity while imbued with Cold.",
                "This is an Attack, which deals Cold Damage, and potentionally freezes the Target.",
            ],
        },
        {
            type: "list",
            content: [
                "<b>Cold Effect:</b>",
                `If the Target is Soaked, the Target must Succeed a <box>VIT Save</box> or get the <a href="../main/mechanics.html#conditions"  target="_blank">Stunned Condition.</a>`,
                "The Condition lasts till the End of the Target's Next Turn.",
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
                ["Range", "Touch"],
                ["VIT Save", "14 × ESS"],
                ["Damage", "(2d8 × ESS) Cold"],
            ],
        },
    ],
}