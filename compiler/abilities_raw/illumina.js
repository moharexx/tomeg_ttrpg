module.exports = {
    name: "Illumina",
    category: "on_attack",
    type: [
        "Skill",
        "(Melee)",
    ],
    reqs_short: [
        "10 Melee Weapon",
    ],
    reqs_full: [
        "<b>Skill:</b> 10 Melee Weapon",
    ],
    tags: [
        "Offense",
        "Mobility",
        "Main-Action",
    ],
    unlock_cost: 10,
    description: [
        {
            type: "p",
            content: [
                "When you make a Melee Attack you can immediately Dash before it, or after it.",
                "The Dash itself can make a Single Attack against one Target in Melee Reach while you pass.",
                "This Attack has the same Finalized To-Hit as the Parent Attack.",
            ],
        },
        {
            type: "p",
            content: [
                "When you use <b>Illumina</b> you can apply a <b>Light Effect</b> on Yourself till the Start of Your Next Turn.",
                "This Effect is only for interacting with other Effects and Entities.",
            ],
        },
        {
            type: "list",
            content: [
                "<b>COMBO:</b>",
                "You can use this On-Attack on any Dash Type Ability, to Extend the Dash.",
                "The Extension is immediately before or after the Parent Dash, and allows a single bend in the Dash Direction.",
                "If the Dash has any Special Properties (Flash Strike making an Attack in a line), the Extended part will inherit it.",
                "Using it this way will not have the Dash make it's own Attack.",
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
                ["Special Condition", "Melee"],
                ["Dash Length", "MS"],
                ["Dash Damage", "(4 × ESS) Radiant"],
            ],
        },
    ],
}