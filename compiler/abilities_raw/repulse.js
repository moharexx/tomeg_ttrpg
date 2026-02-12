module.exports = {
    name: "Repulse",
    category: "active",
    type: [
        "Spell",
    ],
    reqs_short: [
        "5 Evocation | 10 Transmutation | 20 Conjuration",
    ],
    reqs_full: [
        "<b>Spell:</b> (5 INT | 5 WILL | 5 EGO), (5 Evocation | 10 Transmutation | 20 Conjuration)",
    ],
    tags: [
        "Offense, Utility",
        "Ranged, STR Save, Physical Damage, Crowd Control",
        "Main-Action",
    ],
    unlock_cost: 5,
    description: [
        {
            type: "p",
            content: [
                `When used, fire a Single Target Projectile of Force.`,
                `A Hit Target must make a <b>STR Save</b> or be Knocked back.`,
                `If the Knockbacked Entity Hits a Solid Surface, it takes Physical Damage.`,
                `The Knockback's Direction is the same as the Projectile's Travel Direction.`,
            ],
        },
        {
            type: "p",
            content: [
                `When this Ability CRITs, not only its Damage is Doubled, but its Knockback Distance as well.`,
                `Yes, you can Target Yourself, but it doesn't count as Forced Movement when you do so.`,
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
                ["Range", "2 × CS^(1/3)"],
                ["STR Save", "14 × ESS"],
                ["Knockback", "6 × ESS^(1/3)"],
                ["Damage From Surface", "(2d4 × ESS) Physical"],
            ],
        },
    ],
}