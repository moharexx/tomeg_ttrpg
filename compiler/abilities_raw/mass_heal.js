module.exports = {
    name: "Mass Heal",
    category: "stance",
    type: [
        "Spell",
    ],
    reqs_short: [
        "Evocation | Transmutation | Enchantment",
    ],
    reqs_full: [
        "(200 INT | 50 WILL | 20 EGO), (10 Transmutation | 20 Enchantment | 50 Evocation)",
    ],
    tags: [
        "Defense",
        "Healing, Targeting 5",
        "Main-Action + Bonus-Action / Main-Action + Bonus-Action",
    ],
    unlock_cost: 20,
    description: [
        {
            type: "p",
            content: [
                "When using this Ability, you are put in Mass Heal Stance.",
                "On Stance Trigger, you Heal up to 5 Chosen Entities withing Range which you can Pinpoint.",
            ],
        },
        {
            type: "dots",
            content: [
                "This does not regrow lost body parts.",
                "This only works on Biological, Non-Undead Targets.",
                "Yes, you can heal a corpse. No, it won't revive them.",
            ],
        },
        {
            type: "p",
            content: [
                "The Stance Breaks when: <box>Using Abilities | Moving | HD Decrease | Taking Damage</box>",
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
                ["Cast Time", "Main-Action + Bonus-Action"],
                ["Stance Trigger", "Main-Action + Bonus-Action at your next Turn."],
                ["Range", "5 × CS^(1/3)"],
                ["Healing", "(1d6 + 8) × ESS"],
            ],
        },
    ],
}