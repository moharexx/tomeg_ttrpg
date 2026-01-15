module.exports = {
    name: "Flash Strike",
    category: "stance",
    type: [
        "Skill",
    ],
    reqs_short: [
        "20 Melee Weapon | 20 Martial Arts",
    ],
    reqs_full: [
        "<b>Skill:</b> 20 Melee Weapon | 20 Martial Arts",
    ],
    tags: [
        "Offense",
        "Weapon Damage, Flow Line AOE, Mobility",
        "Main-Action / Main-Action",
    ],
    unlock_cost: 20,
    description: [
        {
            type: "p",
            content: [
                "When using this Ability, you are put in <b>Flash Strike Stance.</b>",
                "The Next Turn you can Trigger the <b>Flash Strike.</b>",
                "On Trigger you flash in a Flow Line AOE Melee Attack, you are the Flow of the AOE.",
                "This means when your Hit is Fully Negated you stop midway.",
            ],
        },
        {
            type: "p",
            content: [
                "The Stance Breaks when: <box>Using Abilities, Moving, HD Decrease, Taking Damage</box>",
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
                ["Stance Trigger", "Main-Action at Your Next Turn"],
                ["Line Length", "2 × MS"],
                ["Damage", "(2d12 × ESS) Weapon Damage"],
            ],
        },
    ],
}