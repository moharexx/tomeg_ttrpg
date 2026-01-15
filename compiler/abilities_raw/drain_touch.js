module.exports = {
    name: "Drain Touch",
    category: "active",
    type: [
        "Spell",
    ],
    reqs_short: [
        "10 Anima | 20 Enchantment | 50 Transmutation",
    ],
    reqs_full: [
        "<b>spell:</b> (50 INT | 50 WILL | 50 EGO), (10 Anima | 20 Enchantment | 50 Transmutation)",
    ],
    tags: [
        "Offense, Defense, Utility",
        "Touch, Buff, Debuff",
        "Main-Action",
    ],
    unlock_cost: 50,
    description: [
        {
            type: "p",
            content: [
                "When used, you Touch an Entity, who then must make a Save or get Drained.",
                "Each Resource has a Different Save, and Maximum Drain Amount.",
                "The Caster can Also use this Spell, to give their own Resource to an other Touched Entity.",
                "The Caster can Touch two Entities and Drain from one to the other.",
            ],
        },
        {
            type: "dots",
            content: [
                "Grit Drain STR Save, Max Drain: <box>6 × ESS</box>",
                "HD Drain STR Save, Max Drain: <box>10 × ESS</box>",
                "HP Drain VIT Save, Max Drain: <box>4 × ESS</box>",
                "TEMP-HP Drain VIT Save, Max Drain: <box>8 × ESS</box>",
                "REST-HP Drain VIT Save, Max Drain: <box>10 × ESS</box>",
                "SP Drain Soul Save, Max Drain: <box>6 × ESS</box>",
            ],
        },
        {
            type: "p",
            content: [
                "This Ability can CRIT for Double Max Drain.",
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
                ["Save Difficulty", "10 × ESS"],
            ],
        },
    ],
}