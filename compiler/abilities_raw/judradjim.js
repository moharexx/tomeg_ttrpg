module.exports = {
    name: "Judradjim",
    category: "stance",
    type: [
        "Spell",
    ],
    reqs_short: [
        "10 Evocation | 20 Conjuration | 50 Transmutation",
    ],
    reqs_full: [
        "<b>Spell:</b> (20 INT | 20 WILL | 20 EGO), (10 Evocation | 20 Conjuration | 50 Transmutation)",
    ],
    tags: [
        "Offense",
        "Electric Damage, Self, Static Sphere AOE, Projectile",
        "Main-Action + Bonus-Action / Continuous",
    ],
    unlock_cost: 20,
    description: [
        {
            type: "p",
            content: [
                "When using this Ability, you are put in <b>Judradjim Stance.</b>",
                "When entering this Stance, you create a Zone of electricity at your current location.",
                "The Zone doesn't move with the Caster, it stays where it was put!",
                "When entering this Stance, and at the Start of Your Turns, Entities in this Zone must make an AGI Save, or take Zone Damage.",
                "While in this Stance, at the Start of your Turns, once as a Free-Action you can shoot a Lightning Bolt from the center of the Zone.",
            ],
        },
        {
            type: "dots",
            content: [
                "The Zone is considered as a Static Sphere AOE Ranged Save.",
                "This Lightning Bolt is a Projectile Ranged Attack, has a Static To-Hit, and cannot CRIT!",
            ],
        },
        {
            type: "p",
            content: [
                "The Stance Breaks when: <box>Taking Damage</box>",
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
                ["Stance Trigger", "None"],
                ["Range", "Self"],
                ["AGI Save", "10 × ESS"],
                ["Zone Radius", "CS^(1/3)"],
                ["Zone Damage", "(1d12 × ESS) Electric"],
                ["Lightning Bolt Range", "10 × CS^(1/3)"],
                ["Lightning Bolt Static To-Hit", "CS / 2"],
                ["Lightning Bolt Damage", "(1d8 × ESS) Electric"],
            ],
        },
    ],
}