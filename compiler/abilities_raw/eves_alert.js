module.exports = {
    name: "Eve's Alert",
    category: "reactive",
    type: [
        "Spell",
    ],
    reqs_short: [
        "20 Enchantment | 50 Divination | 200 Anima",
    ],
    reqs_full: [
        "<b>Spell:</b> (200 INT | 200 WILL | 50 DES), (20 Enchantment | 50 Divination | 200 Anima)",
    ],
    tags: [
        "Utility, Cooldown",
        "Buff, Touch",
        "Bonus-Action",
    ],
    unlock_cost: 50,
    description: [
        {
            type: "p",
            content: [
                "When the Ability is used, for the Duration the Targeted Entity's <b>INIT</b> is Increased.",
                "Additionally the Target is not Surprised or Unaware of Entities you are aware of.",
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
                ["Trigger", "None"],
                ["Cooldown", "Short-Rest"],
                ["Duration", "Start of Casters Next Turn"],
                ["Range", "Touch"],
                ["Bonus INIT", "10 × ESS"],
            ],
        },
    ],
}