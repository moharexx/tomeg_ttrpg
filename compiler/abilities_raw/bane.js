module.exports = {
    name: "Bane",
    category: "stance",
    type: [
        "Spell",
    ],
    reqs_short: [
        "5 Enchantment | 10 Anima | 20 Abjuration",
    ],
    reqs_full: [
        "<b>Spell:</b> (20 INT | 10 WILL | 10 EGO), (5 Enchantment | 10 Anima | 20 Abjuration)",
    ],
    tags: [
        "Utility",
        "Debuff, Targeting",
        "Main-Action / Continuous",
    ],
    unlock_cost: 10,
    description: [
        {
            type: "p",
            content: [
                "When used, you are put in <b>Bane Stance.</b>",
                "When Entering <b>Bane Stance</b>, you have a Pool of Bane, and choose One Type of Bane to give to the Targets.",
                "You can Bane Sensed Targets, but Spend no more than <box>3 × ESS</box> from the Pool on a single Target.",
                "Entities That you Target Must make a <b>Soul Save</b> of <box>10 × ESS</box> or get the Bane Debuff.",
            ],
        },
        {
            type: "list",
            content: [
                "<b>Bane of Incompetence:</b>",
                "For each Point of Bane the Target has a d10 Check Reduction of 1.",
            ],
        },
        {
            type: "list",
            content: [
                "<b>Bane of Weakness:</b>",
                "For each Point of Bane all Damage Instances from the Target are Reduced by 1, to a Minimum of 0.",
            ],
        },
        {
            type: "p",
            content: [
                "The Stance Breaks when: <box>Moving | HD Decrease</box>",
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
                ["Stance Trigger", "None"],
                ["Range", "10 × CS^(1/3)"],
                ["Bane Pool", "9 × ESS"],
                ["Max Baning to Target", "3 × ESS"],
                ["Soul Save", "10 × ESS"],
            ],
        },
    ],
}