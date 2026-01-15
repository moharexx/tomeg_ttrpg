module.exports = {
    name: "Kinetic Outburst",
    category: "active",
    type: [
        "Spell",
    ],
    reqs_short: [
        "10 Transmutation | 20 Evocation | 50 Conjuration",
    ],
    reqs_full: [
        "<b>Spell:</b> (20 INT | 20 WILL | 20 EGO), (10 Transmutation | 20 Evocation | 50 Conjuration)",
    ],
    tags: [
        "Offense",
        "Physical Damage, Self, Flow Sphere AOE, Crowd Control",
        "Main-Action + Bonus-Action",
    ],
    unlock_cost: 20,
    description: [
        {
            type: "p",
            content: [
                "When used, a burst of intense force explodes out from you, flinging everything back around you.",
                `A Target inside the Radius must make a <b>STR Save</b> or be Knocked Back, and recieve the <a href="../main/mechanics.html#conditions">Prone Condition.</a>`,
                "A Target Knocked to a solid surface takes Physical Damage, exact type determined by the Surface.",
            ],
        },
        {
            type: "dots",
            content: [
                "Kinetic Outburst is considered a Flow Sphere AOE Melee Save.",
            ],
        },
        {
            type: "list",
            content: [
                "<b>Potent Outburst</b> (10 XP):",
                "You can make the Ability a Stance, with a Trigger of a Free-Action on Your Next Turn.",
                "This Stance Breaks from: <box>Using Abilities, Moving, HD Decrease</box>",
            ],
        },
        {
            type: "table",
            full_width: "100%",
            width: ["30%", "70%"],
            content: [
                ["Potent Outburst", "Stats"],
                ["Trigger", "Free-Action at Your Next Turn"],
                ["STR Save", "12 × ESS"],
                ["Radius", "CS^(1/3)"],
                ["Knockback Distance", "6 × ESS^(1/3)"],
                ["Impact Damage", "(8 × ESS) Physical"],
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
                ["Range", "Self"],
                ["Radius", "CS^(1/3)"],
                ["STR Save", "10 × ESS"],
                ["Knockback Distance", "4 × ESS^(1/3)"],
                ["Impact Damage", "(6 × ESS) Physical"],
            ],
        },
    ],
}