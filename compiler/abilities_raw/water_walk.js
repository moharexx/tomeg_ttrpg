module.exports = {
    name: "Water Walk",
    category: "active",
    type: [
        "Spell",
    ],
    reqs_short: [
        "5 Enchantment | 10 Transmutation",
    ],
    reqs_full: [
        "<b>Spell:</b> (5 INT | 5 WILL | 5 EGO), (5 Enchantment | 10 Transmutation)",
    ],
    tags: [
        "Utility",
        "Touch, Mobility, Buff",
        "Main-Action",
    ],
    unlock_cost: 5,
    description: [
        {
            type: "p",
            content: [
                "When used, the Target Object or Entity will stay on top of any liquid, like if it was a solid surface.",
                "Unwilling Targets can make a <box>Soul Save (12 × ESS)</box> to not be Affected.",
                "When falling onto a liquid surface, fall damage is same as falling onto a solid.",
                `If the surface of the liquid has larger waves, at the Start of the Target's Turn it must succeed on a <box>STR Save 10</box> or get the <a href="../main/mechanics.html#conditions">Prone Condition.</a>`,
                "If the Target is already submerged it will rush to the surface at <box>10 × ESS^(1/3)</box> meters, at each End of their Turns.",
                "Everytime your Target tries to swim deeper by any means it must make an <b>Athletics Check of (20 × ESS)</b>, or Fail.",
                "Note that the Liquid is still in contact with the Target, and can still hurt the Target.",
            ]
        },
        {
            type: "list",
            content: [
                "<b>Jesus</b> (5 XP):",
                "If cast on Self, Duration is Permanent, and Toggleable as a <b>Free-Action Reaction.</b>",
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
                ["Range", "Touch"],
                ["Soul Save", "12 × ESS"],
                ["Duration", "1 Minute (20 Rounds)"],
                ["Max Target Weight", "200kg × ESS"]
            ],
        },
    ],
}