module.exports = {
    name: "Collateral",
    category: "meta",
    type: [
        "Single-Target",
    ],
    reqs_short: [
        "200 Total XP",
    ],
    reqs_full: [
        "200 Total XP",
    ],
    tags: [
        "AOE +",
        "Action Cost +",
    ],
    unlock_cost: 20,
    description: [
        {
            type: "p",
            content: [
                `You increase the Cast Time to make a Single-Target Ability have a small Radius.`,
                `Increase the Cast Time by either adding a <b>Bonus-Action</b>, or changing a <b>Bonus-Action</b> into a <b>Main-Action</b>.`,
                `If the Cast Time of the Parent Ability is multiple Rounds then this Meta-Ability cannot be used!`,
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
                ["Type", "Single-Target"],
                ["Radius", "ESS^(1/3)"],
            ],
        },
    ],
}