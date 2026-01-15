module.exports = {
    name: "Defender's Leap",
    category: "reactive",
    type: [
        "Skill",
    ],
    reqs_short: [
        "10 Martial Arts | 20 Athletics | 50 Acrobatics",
    ],
    reqs_full: [
        "<b>Skill:</b> 10 Martial Arts | 20 Athletics | 50 Acrobatics",
    ],
    tags: [
        "Defense, Cooldown",
        "Negation, Mobility",
        "Bonus-Action",
    ],
    unlock_cost: 10,
    description: [
        {
            type: "p",
            content: [
                "When Sensing an Entity getting Attacked, you can dash to said Entity, Displacing them.",
                "You will get Attacked instead of the original Target.",
                "This Ability can only be used on Willing Targets.",
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
                ["Activation Requirement", "Entity Gets Attacked In Range"],
                ["Cooldown", "1 Minute (20 Rounds)"],
                ["Range", "MS × 2"],
                ["Displacement", "STR^(1/3)"],
            ],
        },
    ],
}