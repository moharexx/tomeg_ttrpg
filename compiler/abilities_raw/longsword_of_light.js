module.exports = {
    name: "Longsword Of Light",
    category: "stance",
    type: [
        "Skill",
    ],
    reqs_short: [
        "Melee Weapon",
    ],
    reqs_full: [
        "50 Melee Weapon",
    ],
    tags: [
        "Offense",
        "Variable Damage, AOE, Mobility",
        "Bonus-Action / Free-Action",
    ],
    unlock_cost: 50,
    description: [
        {
            type: "p",
            content: [
                "When using this Ability, you are put in Longsword Of Light Stance.",
                "The Next Round you can Trigger the Longsword Of Light.",
                "This Ability does NOT Activate Triggers if Target's INIT is less than your Weapon Mastery.",
                "When Longsword Of Light is Triggered you blink in a Line and make an Attack onto every Entity which touched the Line.",
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
                ["Cast Time", "Bonus-Action"],
                ["Stance Trigger", "Free-Action at Your Next Turn"],
                ["Line Length", "MS"],
                ["Damage", "(1d8 × ESS) Weapon Damage"],
                ["Penetration", "6 × ESS"],
            ],
        },
    ],
}