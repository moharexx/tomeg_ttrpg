module.exports = {
    name: "Ray Of Force",
    category: "active",
    type: [
        "Spell",
    ],
    reqs_short: [
        "10 Evocation | 20 Transmutation | 50 Conjuration",
    ],
    reqs_full: [
        "<b>Spell:</b> 20 CS, (10 Evocation | 20 Transmutation | 50 Conjuration)",
    ],
    tags: [
        "Offense",
        "Ranged, STR Save, Physical Damage, Crowd Control",
        "Main-Action + Bonus-Action",
    ],
    unlock_cost: 20,
    description: [
        {
            type: "p",
            content: [
                "When used, fire a Single Target Ray made of pure force.",
                "A Hit Target gets Knockedbacked on a Faild <b>STR Save</b> of <box>14 × ESS</box>",
                "A Target Knocked to a solid surface takes Physical Damage, exact type determined by the Surface.",
                "The Knockback's Direction is the same as the Ray's Travel Direction.",
            ],
        },
        {
            type: "p",
            content: [
                "When this Ability CRITs, not only it's Damage is Doubled, but it's Knockback Distance as well.",
                "Yes, you can Target Yourself, but it doesn't count as Forced Movement when you do so.",
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
                ["Range", "10 × CS^(1/3)"],
                ["STR Save", "14 × ESS"],
                ["Knockback", "6 × ESS^(1/3)"],
                ["Damage From Surface", "(10 × ESS) Physical"],
            ],
        },
    ],
}