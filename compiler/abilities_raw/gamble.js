module.exports = {
    name: "Gamble",
    category: "meta",
    type: [
        "Any",
    ],
    reqs_short: [
        "None",
    ],
    reqs_full: [
        "None",
    ],
    tags: [
        "CRIT",
        "Gambling, Cooldown +",
    ],
    unlock_cost: 10,
    description: [
        {
            type: "p",
            content: [
                `When the Parent Ability doesn't CRIT it Fails and does nothing.`,
                `But when you CRIT the CRIT Multiplier is increased by 1, from ×2 to ×3 Damage, Healing, ect...`,
                `When you Succeed and CRIT with this, you cannot use it again until you Short-Rest.`,
                `If you use some feature which guarantees a CRIT, then this Meta-Ability does nothing.`,
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
                ["Type", "Any"],
                ["Cooldown on Success", "Short-Rest"],
            ],
        },
    ],
}