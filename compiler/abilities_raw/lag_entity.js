module.exports = {
    name: "Lag Entity",
    category: "active",
    type: [
        "Spell",
    ],
    reqs_short: [
        "10 Enchantment | 20 Abjuration | 50 Transmutation",
    ],
    reqs_full: [
        "<b>Spell:</b> (20 INT | 20 WILL | 20 DES), (10 Enchantment | 20 Divination | 50 Anima)",
    ],
    tags: [
        "Offense",
        "Soul Save, Targeting, Crowd Control",
        "Main-Action",
    ],
    unlock_cost: 20,
    description: [
        {
            type: "p",
            content: [
                "When used, you Lag a Pinpointed Entity or more.",
                "You have <b>Targeting Points</b> equal to <box>8 × ESS</box>, you can spend <b>Targeting Points</b> on Entities to Target them.",
                "The Soul Save's Difficulty is equal to the <b>Targeting Points</b> spent on the Target.",
                "On a Failed Save the Targets gain the <b>Lag Effect.</b>",
            ],
        },
        {
            type: "list",
            content: [
                "<b>Lag Effect:</b>",
                "The Target cannot use Reactions.",
                "Every Action the Target takes in their Next Turn will happen only at the Turn after that.",
                "After the Actions finally come out for real, the Target takes no Actions that Turn.",
                "On the 3rd Turn the Target is no longer Effected by Lag.",
                `Lag has NO Effect on Entities in <a href="../abilities/monolithic_style.html">Monolithic Style.<a>`,
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
                ["Targeting Points", "8 × ESS"],
            ],
        },
    ],
}