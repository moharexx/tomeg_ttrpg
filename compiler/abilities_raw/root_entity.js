module.exports = {
    name: "Root Entity",
    category: "active",
    type: [
        "Spell",
    ],
    reqs_short: [
        "10 CS, (5 Enchantment | 10 Abjuration | 20 Transmutation)",
    ],
    reqs_full: [
        "10 CS, (5 Enchantment | 10 Abjuration | 20 Transmutation)",
    ],
    tags: [
        "Offense",
        "Soul Save, Targeting, Crowd Control",
        "Main-Action",
    ],
    unlock_cost: 10,
    description: [
        {
            type: "p",
            content: [
                "When used, you Root a Pinpointed Entity or more.",
                "You have <b>Targeting Points</b> equal to <box>10 × ESS</box>, you can spend <b>Targeting Points</b> on Entities to Target them.",
                "The Soul Save's Difficulty is equal to the <b>Targeting Points</b> spent on the Target.",
                `On a Failed Save the Target gain the <a href="../main/mechanics.html#conditions">Paralyzed Condition.</a>`,
                "Entities at the End of Their Turn can repeat the <b>Soul Save</b>, Ending the Paralyzed Condition on a success.",
            ],
        },
        {
            type: "p",
            content: [
                "The Rooted Target is stiffened, but can be knocked over.",
            ],
        },
        {
            type: "p",
            content: [
                "<b>Note:</b> Making a Save doesn't count as an Action if Action Cost isn't specified.",
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
                ["Targeting Point", "10 × ESS"],
            ],
        },
    ],
}