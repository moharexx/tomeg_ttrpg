module.exports = {
    name: "Life Link",
    category: "stance",
    type: [
        "Spell",
    ],
    reqs_short: [
        "5 Transmutation | 10 Anima | 20 Enchantment",
    ],
    reqs_full: [
        "<b>Spell:</b> 10 CS, (5 Transmutation | 10 Anima | 20 Enchantment)",
    ],
    tags: [
        "Offense",
        "Ranged, Negation, Buff, Unlock",
        "Bonus-Action / Continuous",
    ],
    unlock_cost: 10,
    description: [
        {
            type: "p",
            content: [
                `When using this Ability, you are put in <b>Life Link Stance</b>.`,
                `When Entering <b>Life Link Stance</b>, you link your Life with a Pinpointed Willing Entity.`,
                `When you or the Target take Damage, the post-mitigation Damage gets halved, and split between the two of you as <a href="../main/mechanics.html#true" target="_blank">True Damage</a>.`,
                `If the Damage is odd, you two can decide who gets which result.`,
            ],
        },
        {
            type: "list",
            content: [
                `<b>One Way Channeling</b> (20 Divination, 5 XP):`,
                `On each Damage instance, you can decide to channel the full post-mitigation Damage to the other Entity as True Damage.`,
            ]
        },
        {
            type: "p",
            content: [
                `The Stance Breaks only when the Target gets outside of the Stance's Range.`,
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
                ["Range", "5 × CS^(1/3)"],
            ],
        },
    ],
}