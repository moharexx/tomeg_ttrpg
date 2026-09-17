module.exports = {
    name: "Peacekeeper",
    category: "stance",
    type: [
        "Innate",
    ],
    reqs_short: [
        "200 Total XP",
    ],
    reqs_full: [
        "<b>Innate:</b> 200 Total XP",
    ],
    tags: [
        "Defense",
        "Self, Negation, Buff",
        "1 Minute (20 Rounds) / Continuous",
    ],
    unlock_cost: 20,
    description: [
        {
            type: "p",
            content: [
                `When using this Ability, you are put in <b>Peacekeeper Stance</b>.`,
                `While in <b>Peacekeeper Stance</b>, Reduced To-Hit against you by <box>50 × ESS</box>, Reduce incoming Damage Instances by <box>20 × ESS</box>, and have <box>10 × ESS</box> Bonus on Saves.`,
                `If you attempt to directly harm anyone else, you gain the <a href="../main/mechanics.html#conditions" target="_blank">Paralyzed Condition</a> Until the End of your Next Turn, and the Stance Breaks.`,
                `Leaving this Stance takes <b>ALL</b> of your Actions on this Turn.`,
            ],
        },
        {
            type: "p",
            content: [
                `The Stance Breaks only when you attempt to directly harm anyone else.`,
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
                ["Cast Time", "1 Minute (20 Rounds)"],
                ["Stance Trigger", "None"],
                ["To-Hit Reduction", "50 × ESS"],
                ["Damage Reduction", "20 × ESS"],
                ["Save Bonus", "10 × ESS"],
            ],
        },
    ],
}