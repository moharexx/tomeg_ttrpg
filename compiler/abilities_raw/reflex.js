module.exports = {
    name: "Reflex",
    category: "meta",
    type: [
        "Any",
    ],
    reqs_short: [
        "20 INIT",
    ],
    reqs_full: [
        "20 INIT",
    ],
    tags: [
        "Reaction +",
        "Action Cost +",
    ],
    unlock_cost: 20,
    description: [
        {
            type: "p",
            content: [
                `You make an Ability into a Reaction by increasing its <b>Cast Time</b>.`,
                `You increase the Cast Time by either adding a <b>Bonus-Action</b>, or changing a <b>Bonus-Action</b> into a <b>Main-Action</b>.`,
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
                ["Type", "Any"],
            ],
        },
    ],
}