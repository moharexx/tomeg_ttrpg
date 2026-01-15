module.exports = {
    name: "Fiery Spiral",
    category: "stance",
    type: [
        "Spell",
    ],
    reqs_short: [
        "5 Evocation | 10 Conjuration | 20 Transmutation",
    ],
    reqs_full: [
        "<b>Spell:</b> (10 INT | 10 WILL | 10 EGO), (5 Evocation | 10 Conjuration | 20 Transmutation)",
    ],
    tags: [
        "Offense",
        "Heat Damage, Flow Disk AOE",
        "Main-Action + Bonus-Action / Main-Action",
    ],
    unlock_cost: 10,
    description: [
        {
            type: "p",
            content: [
                "When using this Ability, you are put in <b>Fiery Spiral Stance.</b>",
                "When entering this Stance, you lift yourself up with Fire up to <box>CS^(1/3) × 2</box> meters, and start hovering.",
                "While in this Stance, you eject a jet of Fire downwards which disperses in a Disk Shape on the Ground.",
                "At the Start of the Stance and Start of your subsequent Turns Entities touching the Disk must Succeed a <b>VIT Save</b> or take Damage.",
                "When the Stance is Triggered, you smash down, and Entities in the Disk must Succeed a <b>VIT Save</b> or take Increased Damage.",
                "Even on the Turn in which the Stance is Triggered, the Hover Damage still normally procs on the Turn's Start.",
            ],
        },
        {
            type: "p",
            content: [
                "The Stance Breaks when: <box>Using Abilities, Moving</box>",
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
                ["Stance Trigger", "Main-Action at your next Turn."],
                ["Hover Height", "CS^(1/3) × 2"],
                ["Disk Radius", "CS^(1/3)"],
                ["Disk Hight", "CS^(1/3) / 5"],
                ["VIT Save", "12 × ESS"],
                ["Damage", "(1d12 × ESS) Heat"],
                ["Trigger Damage", "(8 × ESS) Heat"],
            ],
        },
    ],
}