module.exports = {
    name: "Overheal",
    category: "meta",
    type: [
        "Any",
    ],
    reqs_short: [
        "10 Enchantment | 10 Anima",
    ],
    reqs_full: [
        "10 Enchantment | 10 Anima",
    ],
    tags: [
        "Action Cost -, + BUFFER",
        "Action Cost +",
    ],
    unlock_cost: 10,
    description: [
        {
            type: "p",
            content: [
                `You make a Healing Ability turn excess Healing into a BUFFER, by increasing the Parent Ability's <b>Cast Time</b>.`,
                `If the Healing goes above the Target's Max HP, then they gain the remaining Healing as a <b>BUFFER</b> which Ends at the End of their Next Turn.`,
                `You increase the <b>Cast Time</b> by either adding a <b>Bonus-Action</b>, or changing a <b>Bonus-Action</b> into a <b>Main-Action</b>.`,
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