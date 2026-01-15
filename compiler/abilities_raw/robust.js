module.exports = {
    name: "Robust",
    category: "stance",
    type: [
        "Innate",
        "Skill",
    ],
    reqs_short: [
        "50 VIT",
        "10 Martial Arts",
    ],
    reqs_full: [
        "<b>Innate:</b> 50 VIT",
        "<b>Skill:</b> 10 Martial Arts",
    ],
    tags: [
        "Offense",
        "Self, Negation",
        "Main-Action / Main-Action",
    ],
    unlock_cost: 10,
    description: [
        {
            type: "p",
            content: [
                `When using this Ability, you are put in <b>Robust Stance</b>.`,
                `When Entering <b>Robust Stance</b>, and on subsequent Turns, gain <a href="../main/mechanics.html#buffer" target="_blank">BUFFER</a> equal to a <box>4 × ESS</box>`,
            ],
        },
        {
            type: "list",
            content: [
                "<b>Stance Trigger</b> (Main-Action):",
                "When this Stance is Triggered, gain <box>12 × ESS</box> <b>BUFFER</b>.",
                "This BUFFER lasts 1 Minute (20 Rounds).",
            ],
        },
        {
            type: "p",
            content: [
                "The Stance Breaks only when entering any other Stance.",
            ],
        },
        {
            type: "p",
            content: [
                "<b>Note:</b> This Ability CANNOT CRIT!",
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
                ["Stance Trigger", "Main-Action"],
                ["BUFFER / Turn", "4 × ESS"],
                ["Trigger BUFFER", "12 × ESS"],
            ],
        },
    ],
}