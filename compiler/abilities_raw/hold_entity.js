module.exports = {
    name: "Hold Entity",
    category: "active",
    type: [
        "Spell",
    ],
    reqs_short: [
        "10 Enchantment | 20 Abjuration | 50 Transmutation",
    ],
    reqs_full: [
        "<b>Spell:</b> (20 INT | 20 WILL | 20 DES), (10 Enchantment | 20 Abjuration | 50 Transmutation)",
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
                "When used, you Paralyze a Pinpointed Entity or more.",
                "You have <b>Targeting Points</b> equal to <box>6 × ESS</box>, you can spend <b>Targeting Points</b> on Entities to Target them.",
                "The Soul Save's Difficulty is equal to the <b>Targeting Points</b> spent on the Target.",
                `On a Failed Save the Target gain the <a href="../main/mechanics.html#conditions">Paralyzed Condition.</a>`,
                "Entities at the End of Their Turn can repeat the <b>Soul Save</b>, Ending the Paralyzed Condition on a success.",
            ],
        },
        {
            type: "p",
            content: [
                "The Paralyzed Target is stiffened, but can be knocked over.",
            ],
        },
        {
            type: "p",
            content: [
                "<b>Note:</b> Making a Save doesn't count as an Action if Action Cost isn't specified, so can be done while Paralyzed.",
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
                ["Duration", "1 Minute (20 Rounds)"],
                ["Range", "5 × CS^(1/3)"],
                ["Soul Save", "Targeting Points spent on Entity"],
                ["Targeting Points", "6 × ESS"],
            ],
        },
    ],
}