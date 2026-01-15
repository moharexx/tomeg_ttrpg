module.exports = {
    name: "Brace Yourself!",
    category: "stance",
    type: [
        "Innate",
        "Spell",
    ],
    reqs_short: [
        "50 INT | 50 WILL | 50 EGO",
        "5 Abjuration | 10 Anima | 20 Enchantment",
    ],
    reqs_full: [
        "<b>Innate:</b> 50 INT | 50 WILL | 50 EGO",
        "<b>Spell:</b> (5 INT | 5 WILL | 5 DES), (5 Abjuration | 10 Anima | 20 Enchantment)",
    ],
    tags: [
        "Defense",
        "Self, Negation",
        "Bonus-Action / Continuous",
    ],
    unlock_cost: 5,
    description: [
        {
            type: "p",
            content: [
                "When using this Ability, you are put in <b>Brace Yourself! Stance.</b>",
                "While in <b>Brace Yourself! Stance</b>, you gain <box>(6 × ESS) Psychic, Radiant, Necrotic</box> <b>Resitance</b>, and make <b>Soul Saves</b> with Advantage.",
            ],
        },
        {
            type: "p",
            content: [
                "The Stance Breaks when: <box>Using Abilities, Moving, HD Decrease</box>",
            ],
        },
        {
            type: "p",
            content: [
                "<b>Note:</b> This Ability CANNOT CRIT.",
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
                ["Stance Trigger", "None"],
                ["Resistance Bonus", "(6 × ESS) Psychic, Radiant, Necrotic"],
            ],
        },
    ],
}