module.exports = {
    name: "Slowfall",
    category: "active",
    type: [
        "Spell",
    ],
    reqs_short: [
        "Transmutation | Enchantment | Abjuration",
    ],
    reqs_full: [
        "(5 INT | 5 WILL | 5 EGO), (5 Transmutation | 10 Enchantment | 20 Abjuration)",
    ],
    tags: [
        "Defense, Utility, Unlock",
        "Buff, Debuff, Touch",
        "Bonus-Action",
    ],
    unlock_cost: 5,
    description: [
        {
            type: "p",
            content: [
                "You Touch the Target, and it falls slowly, like a feather. This also makes the Target much easier to lift and carry.",
                "Unwilling Targets can make a (VIT | Soul) Save to not be Affected.",
                "The Target can be an Object.",
                "The Target falls slowly, Overridding the regular Distance of falling at the End of their Turn.",
                "The Target also does not take Fall Damage.",
                "The Caster can Choose to End the Effect as a Free-Action Reaction.",
                "The Caster can give the Target the Ability to End the Effect.",
            ],
        },
        {
            type: "list",
            content: [
                "<b>Mass Slowfall</b> ((10 Transmutation | 20 Enchantment | 50 Abjuration), 5 XP):",
                "As a <b>Main-Action + Bonus-Action</b> you can Target any Choosen Entities within <box>5 × CS^(1/3)</box> Meters.",
            ],
        },
        {
            type: "list",
            content: [
                "<b>Toggle</b> (50 Anima, 5 XP):",
                "The Caster can make the Ability Toggleable, and can give the Targets the Ability to Toggle their Slowfall.",
                "Toggling Slowfall is a Free-Action Reaction.",
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
                ["Duration", "1 Minute (20 Rounds)"],
                ["Range", "Touch"],
                ["(VIT | Soul) Save", "10 × ESS"],
                ["Fall Distance / Round", "Between 15 and 1 Meters (Caster's Choice)"],
                ["Max Mass", "200 × ESS kg"],
            ],
        },
    ],
}