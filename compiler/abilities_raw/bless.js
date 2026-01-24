module.exports = {
    name: "Bless",
    category: "stance",
    type: [
        "Spell",
    ],
    reqs_short: [
        "10 CS, (5 Enchantment | 10 Anima | 20 Evocation)",
    ],
    reqs_full: [
        "<b>Spell:</b> 10 CS, (5 Enchantment | 10 Anima | 20 Evocation)",
    ],
    tags: [
        "Utility",
        "Ranged, Buff",
        "Main-Action / Continuous",
    ],
    unlock_cost: 10,
    description: [
        {
            type: "p",
            content: [
                `When used, you are put in <b>Bless Stance</b>.`,
                `When Entering <b>Bless Stance</b>, you have a Pool of Blessing, and choose One Type of Blessing to give to the Targets.`,
                `At Cast you Bless Sensed Targets, but Spend no more than <box>2 × ESS</box> from the Pool on a single Target.`,
            ],
        },
        {
            type: "list",
            content: [
                `<b>Blessing of Mastery:</b>`,
                `For each Point of Blessing the Target has a Bonus of 2 on Attacks and Mastery-Checks.`,
            ],
        },
        {
            type: "list",
            content: [
                `<b>Blessing of Power:</b>`,
                `For each Point of Blessing all Damage Instances from the Target are Increased by 1.`,
            ],
        },
        {
            type: "p",
            content: [
                `The Stance Breaks when: <box>Moving, HD Decrease</box>`,
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
                ["Bless Pool", "6 × ESS"],
                ["Max Blessing to Target", "2 × ESS"],
            ],
        },
    ],
}