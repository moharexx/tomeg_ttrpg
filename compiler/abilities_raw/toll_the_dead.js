module.exports = {
    name: "Toll The Dead",
    category: "active",
    type: [
        "Spell",
    ],
    reqs_short: [
        "5 Anima | 10 Enchantment | 20 Abjuration",
    ],
    reqs_full: [
        "<b>Spell:</b> (10 INT | 10 WILL | 10 EGO), (5 Anima | 10 Enchantment | 20 Abjuration)",
    ],
    tags: [
        "Offense",
        "Targeting, Soul Save, Necrotic Damage, Executing",
        "Main-Action",
    ],
    unlock_cost: 5,
    description: [
        {
            type: "p",
            content: [
                `When used, you wither the Soul and Body of a Pinpointed Target.`,
                `On a Failed <b>Soul Save</b> the Target takes <a href="../main/mechanics.html#executing" target="_blank">Executing</a> Necrotic Damage.`,
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
                ["Soul Save", "10 × ESS"],
                ["Executing Damage", "(1d6 × ESS) Necrotic"],
            ],
        },
    ],
}