module.exports = {
    name: "Heart Shot",
    category: "on_attack",
    type: [
        "Skill",
        "(Ranged)",
    ],
    reqs_short: [
        "20 Ballistic",
    ],
    reqs_full: [
        "<b>Skill:</b> 20 Ballistic",
    ],
    tags: [
        "Offense",
        "Debuff",
        "Main-Action",
    ],
    unlock_cost: 5,
    description: [
        {
            type: "p",
            content: [
                `When you use a Ranged Attack, you can use this Ability to make it pierce shielding and reduce defenses.`,
                `Each point of Damage the Parent does against BUFFERs and Shielding counts as 2 points of Damage.`,
                `If the Attack Deals Damage, all Healing, Shielding, and BUFFERs the Target recieve is Reduced by <box>4 × ESS</box> until the End of their Next Turn.`,
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
                ["Cast Time", "Main-Action"],
                ["Requirement", "Ranged"],
                ["Reductions", "4 × ESS"],
            ],
        },
    ],
}