module.exports = {
    name: "Hyper Sleep",
    category: "active",
    type: [
        "Innate",
    ],
    reqs_short: [
        "20 VIT, 50 WILL",
    ],
    reqs_full: [
        "<b>Innate:</b> 20 VIT, 50 WILL",
    ],
    tags: [
        "Utility",
        "Self, Buff, Debuff",
        "Free-Action",
    ],
    unlock_cost: 20,
    description: [
        {
            type: "p",
            content: [
                `When used, you gain the fall into deep sleep and your body and soul starts to recover.`,
                `For the Duration of this Ability, you have the <a href="../main/mechanics.html#conditions">Unconscious Condition</a>.`,
                `While this Abiltiy is active, your Perception is 0 and none of your Senses are active.`,
                `When the Duration of this Ability expires, you gain the benefits of a <a href="../main/mechanics.html#resting">Long-Rest</a>.`,
                `If the <b>Unconscious Condition</b> Ends Early, you gain no benefits from this Ability.`,
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
                ["Duration", "4 Hours (4800 Rounds)"],
            ],
        },
    ],
}