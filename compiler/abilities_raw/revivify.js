module.exports = {
    name: "Revivify",
    category: "active",
    type: [
        "Spell",
    ],
    reqs_short: [
        "10 Anima | 20 Enchantment | 50 Transmutation",
    ],
    reqs_full: [
        "<b>Spell:</b> 20 CS, (10 Anima | 20 Enchantment | 50 Transmutation)",
    ],
    tags: [
        "Defense",
        "Buff, Touch",
        "Main-Action",
    ],
    unlock_cost: 20,
    description: [
        {
            type: "p",
            content: [
                `When used, you Touch a Vessel, and Target a Soul to force into said Vessel.`,
                `The Soul is instantly effected by this Ability if it gets in Soul Range and isn't already in a Vessel.`,
                `If the Soul doesn't want to Return, it's entitled to a Soul Save, on a Success the Ability Fails, and Ends.`,
            ],
        },
        {
            type: "list",
            content: [
                `There are 3 ways you can Target a Soul:`,
                `Directly by Targeting a Pinpointed Soul, via Essence Sensing.`,
                `Thinking about a Soul you know.`,
                `Targeting the last Soul that was inhabiting the Vessel.`,
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
                ["Vessel Range", "Touch"],
                ["Soul Range", "100 × CS^(1/3)"],
                ["Duration", "1 Minute (20 Rounds)"],
                ["Soul Save", "14 × ESS"],
            ],
        },
    ],
}