module.exports = {
    name: "Shield Bash",
    category: "active",
    type: [
        "Skill",
    ],
    reqs_short: [
        "Melee Weapon",
    ],
    reqs_full: [
        "10 Melee Weapon",
    ],
    tags: [
        "Offense",
        "Debuff, Mobility",
        "Main-Action",
    ],
    unlock_cost: 5,
    description: [
        {
            type: "p",
            content: [
                "When you use this Ability, you Dash and Bash your Shield into an Entity.",
                `The Entity that you Bash gets <a href="../main/mechanics.html#conditions">Dazed Condition</a> on a Failed STR Save.`,
                "The Dazed Condition lasts till End of Target's Next Turn.",
            ],
        },
        {
            type: "list",
            content: [
                "Using this Ability with a Heavy Shield:",
                "The Ability STR Save is <box>12 × ESS</box> But The Dash Distance is <box>MS / 2</box>",
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
                ["STR Save", "8 × ESS"],
                ["Dash Distance", "MS"],
            ],
        },
    ],
}