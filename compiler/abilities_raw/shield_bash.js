module.exports = {
    name: "Shield Bash",
    category: "active",
    type: [
        "Skill",
    ],
    reqs_short: [
        "10 Melee Weapon",
    ],
    reqs_full: [
        "<b>Skill:</b> 10 Melee Weapon",
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
                `When you use this Ability, you Dash and Bash your Shield into a Target.`,
                `The Bash has Reach equal to your Natural Melee Reach, and the Dash can be made before or after the Bash.`,
                `The Target must make a STR Save of <box>8 × ESS</box>; on a Fail they get the <a href="../main/mechanics.html#conditions">Dazed Condition</a>.`,
                `The Dazed Condition lasts till End of Target's Next Turn.`,
            ],
        },
        {
            type: "list",
            content: [
                `<b>Using this Ability with a Heavy Shield:</b>`,
                `The STR Save increases to <box>12 × ESS</box>, but The Dash Distance reduces to <box>MS / 2</box>`,
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