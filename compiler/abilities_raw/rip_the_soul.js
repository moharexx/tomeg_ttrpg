module.exports = {
    name: "Rip The Soul",
    category: "active",
    type: [
        "Spell",
    ],
    reqs_short: [
        "10 Anima | 20 Enchantment | 50 Abjuration",
    ],
    reqs_full: [
        "<b>Spell:</b> (20 INT | 20 WILL | 20 EGO), (10 Anima | 20 Enchantment | 50 Abjuration)",
    ],
    tags: [
        "Offense",
        "Targeting, Soul Save",
        "Main-Action",
    ],
    unlock_cost: 20,
    description: [
        {
            type: "p",
            content: [
                "When used, you rip out the Soul of a Pinpointed Entity or more.",
                "You have <b>Targeting Points</b> equal to <box>4 × ESS</box>, you can spend <b>Targeting Points</b> on Entities to Target them.",
                "The Soul Save's Difficulty is equal to the <b>Targeting Points</b> spent on the Target.",
                `On a Failed Save the Target's Soul is ripped out, floating right above their Body.`,
                "Yes, this is basically an instakill effect if the Soul cannot get back somehow...",
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
                ["Soul Save", "Targeting Points spent on Entity"],
                ["Targeting Points", "4 × ESS"],
            ],
        },
    ],
}