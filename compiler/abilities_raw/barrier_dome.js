module.exports = {
    name: "Barrier Dome",
    category: "stance",
    type: [
        "Spell",
    ],
    reqs_short: [
        "5 Abjuration | 10 Conjuration | 20 Enchantment",
    ],
    reqs_full: [
        "<b>Spell:</b> (10 INT | 10 WILL | 20 EGO), (5 Abjuration | 10 Conjuration | 20 Enchantment)",
    ],
    tags: [
        "Defense",
        "Negation, Self, Static Sphere AOE, Shielding",
        "Main-Action + Bonus-Action / Continuous",
    ],
    unlock_cost: 10,
    description: [
        {
            type: "p",
            content: [
                "When using this Ability, you are put in <b>Barrier Dome Stance.</b>",
                "When Entering <b>Barrier Dome Stance</b>, a See-Through Barrier Dome appears around Yourself.",
                "The Dome doesn't move with the Caster, it stays where it was put!",
                "The Dome has HP and Armor VS All, and provides Full-Cover.",
                "Abilities which can be placed, can be placed inside the Dome.",
            ],
        },
        {
            type: "dots",
            content: [
                `This Dome can be repaired with the <a href="../abilities/mending.html" target="_blank">Mending Ability</a>, up to Dome Max HP`,
                "This Ability counts as Shielding for the purpose of other Abilities.",
            ],
        },
        {
            type: "p",
            content: [
                "The Stance only Breaks when entering any other Stance.",
                "This Ability can CRIT for 3× Dome Starting HP, throw your d10 pls.",
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
                ["Radius", "CS^(1/3)"],
                ["Dome Starting HP", "10 × ESS"],
                ["Dome Max HP", "30 × ESS"],
                ["Dome Armor VS All", "6 × ESS"],
            ],
        },
    ],
}