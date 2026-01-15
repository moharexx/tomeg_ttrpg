module.exports = {
    name: "Prowler",
    category: "stance",
    type: [
        "Skill",
    ],
    reqs_short: [
        "Stealth",
    ],
    reqs_full: [
        "10 Stealth",
    ],
    tags: [
        "Offense, Utility",
        "Buff",
        "Main-Action + Bonus-Action / Continuous",
    ],
    unlock_cost: 10,
    description: [
        {
            type: "p",
            content: [
                "When using this Ability, you are put in Prowler Stance.",
                "While in Prowler Stance, your Stealth d10 Checks get a Bonus of <box>5 × ESS</box>",
                "While in this Stance, your CRIT Range is Increased by <box>4</box> Against Unaware Entities.",
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
                ["Cast Time", "Main-Action + Bonus-Action"],
                ["Stance Trigger", "None"],
                ["Stealth Bonus", "5 × ESS"],
                ["CRIT Range Bonus", "4"],
            ],
        },
    ],
}