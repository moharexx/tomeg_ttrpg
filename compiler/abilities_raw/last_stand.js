module.exports = {
    name: "Last Stand",
    category: "reactive",
    type: [
        "Innate",
    ],
    reqs_short: [
        "50 VIT",
    ],
    reqs_full: [
        "<b>Innate:</b> 50 VIT",
    ],
    tags: [
        "Defense, Cooldown",
        "Self",
        "Free-Action, REST-HP",
    ],
    unlock_cost: 50,
    description: [
        {
            type: "p",
            content: [
                `<i><b>"A Miracle! How are you standing!?"</b></i>`,
                `Using this Ability, you treat your REST-HP Pool as a Buffer to Damage.`,
                `Up to <box>20 × ESS</box> Post-Mitigation Damage you Recieve goes into REST-HP.`,
                `This Ability does NOT work on SP Damage.`,
            ],
        },
        {
            type: "p",
            content: [
                `This Ability CANNOT CRIT.`,
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
                ["Cast Time", "Free-Action"],
                ["Cooldown", "Short-Rest"],
                ["Trigger", "Get Damaged"],
                ["Max REST-HP", "20 × ESS"],
            ],
        },
    ],
}