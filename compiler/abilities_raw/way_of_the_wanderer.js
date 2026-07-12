module.exports = {
    name: "Way Of The Wanderer",
    category: "stance",
    type: [
        "Innate",
        "Skill",
    ],
    reqs_short: [
        "10 WILL",
        "20 Melee Weapon | 20 Martial Arts",
    ],
    reqs_full: [
        "<b>Innate:</b> 10 WILL",
        "<b>Skill:</b> 20 Melee Weapon | 20 Martial Arts",
    ],
    tags: [
        "Utility",
        "Buff",
        "Bonus-Action / Free-Action",
    ],
    unlock_cost: 10,
    description: [
        {
            type: "p",
            content: [
                `When using this Ability, you are put in </b>Way Of The Wanderer<b> Stance.`,
                `While in this Stance, your CRIT Range is Increased by <box>1</box>`,
                `On Stance Trigger your CRIT Range is instead Increased by <box>2</box> till the End of Your Turn.`,
            ],
        },
        {
            type: "p",
            content: [
                `The CRIT Range is only Effective on Actions with ESS (or Tier) not higher than 2× this Ability's, for Anti-Exploit reasons.`,
                `<b>Note:</b> After the Trigger you aren't in the Stance, and can get into another Stance without losing the CRIT Range Bonus.`,
            ],
        },
        {
            type: "p",
            content: [
                `The Stance only Breaks when entering any other Stance.`,
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