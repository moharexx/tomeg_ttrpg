module.exports = {
    name: "Earth Armor",
    category: "active",
    type: [
        "Spell",
    ],
    reqs_short: [
        "5 Conjuration | 10 Transmutation | 20 Enchantment",
    ],
    reqs_full: [
        "<b>Spell:</b> (10 INT | 10 WILL | 10 EGO), (5 Conjuration | 10 Transmutation | 20 Enchantment)",
    ],
    tags: [
        "Defense",
        "Negation, Touch",
        "Main-Action",
    ],
    unlock_cost: 10,
    description: [
        {
            type: "p",
            content: [
                "When used, Cover yourself with Enhanced Earth, which Protects from Physical Attacks.",
                "Unwilling Entities cannot be Targeted.",
                "While the Armor is on, MS is Halved, but gain <box>(6 × ESS) Armor</box>, this protects from Physical Damage. (Slashing, Piercing, Bludgeoning)",
            ],
        },
        {
            type: "dots",
            content: [
                "If an Attack Hits with more than <box>(20 × ESS) Premitigated Damage</box> the Earth Armor Shatters, and the Ability Ends.",
                "Against Thunder Damage, or while Soaked with water, the Break Threshold is Halved.",
            ],
        },
        {
            type: "p",
            content: [
                "<b>Note:</b> This Ability cannot CRIT! duh!",
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
                ["Range", "Touch"],
                ["Duration", "1 Minute (20 Round)"],
                ["Armor", "6 × ESS"],
                ["Break Threshold", "20 × ESS"],
                ["MS Divisor", "2"],
            ],
        },
    ],
}