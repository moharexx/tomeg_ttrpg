module.exports = {
    name: "Instant Reload",
    category: "active",
    type: [
        "Skill",
    ],
    reqs_short: [
        "10 Ballistic",
    ],
    reqs_full: [
        "<b>Skill:</b> 10 Ballistic",
    ],
    tags: [
        "Offense, Cooldown",
        "Reload",
        "Free-Action",
    ],
    unlock_cost: 5,
    description: [
        {
            type: "p",
            content: [
                "When used, you Instantly Reload your currently Wielded Weapons.",
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
                ["Cast Time", "Free-Action"],
                ["Cooldown", "1 Minute (20 Rounds)"]
            ],
        },
    ],
}