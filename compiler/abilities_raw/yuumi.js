module.exports = {
    name: "Yuumi!",
    category: "stance",
    type: [
        "Spell",
    ],
    reqs_short: [
        "10 Enchantment | 20 Anima | 50 Transmutation",
    ],
    reqs_full: [
        "<b>Spell:</b> 20 CS, (10 Enchantment | 20 Anima | 50 Transmutation)",
    ],
    tags: [
        "Utility",
        "Self, Soul Save, Mobility",
        "Main-Action / Continuous",
    ],
    unlock_cost: 20,
    description: [
        {
            type: "p",
            content: [
                `When using this Ability, you are put in <b>Yuumi! Stance</b>.`,
                `When Entering <b>Yuumi! Stance</b> you attach your self to a Sensed Entity on a Failed Soul Save of <box>6 × ESS</box>`,
                `When attaching to an Entity you choose a point within <box>CS^(1/3)</box> Radius around the target to be at.`,
                `You always stay at that relative position around the Target.`,
                `You move along with them, and can choose a new position within the Radius.`,
                `You can also choose a new position with a <b>Bonus-Action</b>.`,
                `An Entity that Failed the Save can repeat it as a <b>Bonus-Action</b>.`,
            ],
        },
        {
            type: "p",
            content: [
                "The Stance Breaks only when entering any other Stance.",
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
                ["Range", "MS"],
                ["Soul Save", "6 × ESS"],
                ["Radius", "CS^(1/3)"],
            ],
        },
    ],
}