module.exports = {
    name: "Magic Missile",
    category: "stance",
    type: [
        "Spell",
    ],
    reqs_short: [
        "Evocation | Abjuration",
    ],
    reqs_full: [
        "(5 INT | 5 WILL | 5 EGO), (5 Evocation | 10 Abjuration)",
    ],
    tags: [
        "Offense",
        "Demat Damage, Projectile",
        "Bonus-Action / Bonus-Action",
    ],
    unlock_cost: 5,
    description: [
        {
            type: "p",
            content: [
                "When using this Ability you are put in Magic Missile Stance.",
                "When Entering or Stacking this stance, you gain 3 Orbs.",
                "While in Magic Missile Stance, Your MS is Halved.",
                "On Stance Trigger you shoot out the Orbs.",
                "Each Orb is it's own Attack, but Roll only a single d10 Check for all of them, still Roll Damage seperately.",
                "MAX Orb Count: <box>12</box>",
            ],
        },
        {
            type: "p",
            content: [
                "The Stance Breaks when: <box>Using Abilities, HD Decrease, Taking Damage</box>",
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
                ["Stance Trigger", "Bonus-Action at Your Next Turn"],
                ["Range", "20 / 40 × CS^(1/3)"],
                ["Orb Damage", "(1d4 × ESS) Demat"],
            ],
        },
    ],
}