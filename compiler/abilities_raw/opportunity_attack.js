module.exports = {
    name: "Opportunity Attack",
    category: "reactive",
    type: [
        "Skill",
    ],
    reqs_short: [
        "10 Melee Weapon | 10 Martial Arts",
    ],
    reqs_full: [
        "10 Melee Weapon | 10 Martial Arts",
    ],
    tags: [
        "Offense",
        "Variable Damage",
        "Bonus-Action",
    ],
    unlock_cost: 5,
    description: [
        {
            type: "p",
            content: [
                `You can React to someone else moving inside your Melee Reach to make an Attack.`,
                `When an Entity begins moving inside, or moves outside of your Melee Reach you can use this Ability to make a Melee Attack-Action.`,
                `You can't make more than 1 Opportunity Attack against the same Target in a Turn.`,
                `If the Attack-Action would Cost you only a Bonus-Action, you make this Attack with Advantage.`,
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
                ["Trigger", "Entity begins moving inside, or moves outside of Melee Reach."],
            ],
        },
    ],
}