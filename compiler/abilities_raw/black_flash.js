module.exports = {
    name: "Black Flash",
    category: "stance",
    type: [
        "Skill",
    ],
    reqs_short: [
        "20 WILL",
    ],
    reqs_full: [
        "<b>Innate:</b> 20 WILL",
    ],
    tags: [
        "Offense, Defense",
        "Buff",
        "Bonus-Action / Continuous",
    ],
    unlock_cost: 10,
    description: [
        {
            type: "p",
            content: [
                `When using this Ability, you are put in <b>Black Flash</b> Stance.`,
                `While in this Stance, whenever you score a CRIT, gain <box>6 × ESS</box> <a target="_blank" href="../main/mechanics.html#potency">Potency</a>.`,
                `This Potency can't be Spent on the CRIT itself, but rather on any other Action, till the End of your Next Turn.`,
                `<b>Note:</b> You don't have to be in the Stance to Spend the Potency, only to gain it.`,
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
                ["Stance Trigger", "None"],
                ["Potency on CRIT", "6 × ESS"],
            ],
        },
    ],
}