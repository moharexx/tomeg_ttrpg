module.exports = {
    name: "Pulsar",
    category: "active",
    type: [
        "Spell",
    ],
    reqs_short: [
        "(Evocation | Transmutation), Anima",
    ],
    reqs_full: [
        "(20 INT | 20 WILL | 20 EGO), (20 Transmutation | 50 Evocation), 20 Anima",
    ],
    tags: [
        "Offense",
        "Variable Damage, AOE",
        "Main-Action + Bonus-Action",
    ],
    unlock_cost: 20,
    description: [
        {
            type: "p",
            content: [
                "When used, fire a Moving Projectile which Exlodes multiple times as it moves.",
                "On Cast, and on subsequent Caster Turn Starts the Pulsar Moves <box>Pulsar Speed</box>, then makes an Explosion.",
                "The Radius is centered on the Projectile.",
                "Entities within the Radius of the Explosion make a Save based on Pulsar Type or take Damage.",
            ],
        },
        {
            type: "dots",
            content: [
                "The Pulsar has HP, if it is Reduced to 0 the Spell Ends.",
                "When you Unlock this Ability Choose a Starting Type which you have the Requirements for, you get it without spending XP.",
            ],
        },
        {
            type: "list",
            content: [
                "<b>Unlocks:</b>",
                "Thundurus Pulsar (20 Transmutation, 10 XP)",
                "Electric Pulsar (20 Evocation, 10 XP)",
                "Dematerializing Pulsar (20 Evocation, 10 XP)",
                "Psionic Pulsar (10 XP)",
            ],
        },
        {
            type: "table",
            full_width: "70%",
            width: ["30%", "70%"],
            content: [
                ["Thundurus", "Value"],
                ["Pulsar Speed", "2 × ESS^(1/3)"],
                ["Radius", "2 × ESS^(1/3)"],
                ["VIT Save", "8 × ESS"],
                ["Damage", "1d8 × ESS Thunder"],
            ],
        },
        {
            type: "table",
            full_width: "70%",
            width: ["30%", "70%"],
            content: [
                ["Electric", "Value"],
                ["Pulsar Speed", "4 × ESS^(1/3)"],
                ["Radius", "ESS^(1/3)"],
                ["(AGI | VIT) Save", "8 × ESS"],
                ["Damage", "1d12 × ESS Electric"],
            ],
        },
        {
            type: "table",
            full_width: "70%",
            width: ["30%", "70%"],
            content: [
                ["Dematerializing", "Value"],
                ["Pulsar Speed", "2 × ESS^(1/3)"],
                ["Radius", "ESS^(1/3)"],
                ["AGI Save", "8 × ESS"],
                ["Damage", "2d4+5 × ESS Demat"],
            ],
        },
        {
            type: "table",
            full_width: "70%",
            width: ["30%", "70%"],
            content: [
                ["Psionic", "Value"],
                ["Pulsar Speed", "2 × ESS^(1/3)"],
                ["Radius", "ESS^(1/3)"],
                ["Soul Save", "8 × ESS"],
                ["Damage", "1d12 × ESS Psychic"],
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
                ["Duration", "1 Minute (20 Rounds)"],
                ["Pulsar HP", "CS"],
            ],
        },
    ],
}