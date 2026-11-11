module.exports = {
    name: "Dexterity Bank",
    category: "active",
    type: [
        "Innate",
        "Skill",
    ],
    reqs_short: [
        "20 AGI",
        "10 Acrobatics",
    ],
    reqs_full: [
        "<b>Innate:</b> 20 AGI",
        "<b>Skill:</b> 10 Acrobatics",
    ],
    tags: [
        "Defense",
        "Negation, Self, HD",
        "Free-Action, HD",
    ],
    unlock_cost: 5,
    description: [
        {
            type: "p",
            content: [
                `You either take a HD Loan or a HD Interest`,
                `This Ability doesn't Break your Stance, even if it would Break by using Abilities or Spending HD.`,
            ],
        },
        {
            type: "list",
            content: [
                `<b>Loan:</b>`,
                `You gain <box>(20 × ESS) HD</box> but lose <box>(25 × ESS) HD</box> at the End of your Next Turn.`,
                `If you cannot pay back the Loan your HD drops to 0, and you gain the <a href="../main/mechanics.html#conditions" target="_blank">Staggered Condition.</a>`,
            ],
        },
        {
            type: "list",
            content: [
                `<b>Interest:</b>`,
                `You lose <box>(10 × ESS) HD</box> but gain <box>(20 × ESS) HD</box> at the Start of Your Next Turn.`,
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
                ["Cooldown", "1 Minute (20 Rounds)"],
                ["Range", "Self"],
                ["Loan HD Gain", "20 × ESS"],
                ["Loan HD Loss", "25 × ESS"],
                ["Interest HD Loss", "10 × ESS"],
                ["Interest HD Gain", "20 × ESS"],
            ],
        },
    ],
}