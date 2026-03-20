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
                `While in this Stance, whenever you score a CRIT, you gain back the Action Cost of the Action which was a CRIT.`,
                `This includes On-Attacks, and Meta-Ability Cast Time modifications.`,
                `Black Flash doesn't work if the CRIT Action's ESS (or Tier) was higher than it, or if the Cast Time is multiple Rounds.`,
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
            ],
        },
    ],
}