module.exports = {
    name: "Way Of The Wanderer",
    category: "stance",
    type: [
        "Skill",
    ],
    reqs_short: [
        "WILL",
    ],
    reqs_full: [
        "10 WILL",
    ],
    tags: [
        "Offense, Defense",
        "Buff",
        "Bonus-Action / Free-Action",
    ],
    unlock_cost: 10,
    description: [
        {
            type: "p",
            content: [
                "When using this Ability, you are put in Prowler Stance.",
                "While in this Stance, your CRIT Range is Increased by <box>1</box>",
                "On Stance Trigger your CRIT Range is Increased by <box>2</box> till the End of Your Turn.",
            ],
        },
        {
            type: "p",
            content: [
                "The Stance only Breaks when entering any other Stance.",
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
                ["Cast Time", "Bonus-Action"],
                ["Stance Trigger", "Free-Action"],
                ["CRIT Range Bonus", "1"],
                ["Trigger Bonus", "2"],
            ],
        },
    ],
}