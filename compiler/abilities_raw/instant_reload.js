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
                `When used, till the Start of your Next Turn, you ignore Reload Property of Ranged Weapons.`,
                `The <b>ESS</b> you Cast this Ability at is <box>Total XP / 100</box>, and if somehow it's less, the Ability Fails.`,
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
                ["Resource Cost", "10 × HD"]
            ],
        },
    ],
}