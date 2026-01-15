module.exports = {
    name: "Mockery",
    category: "active",
    type: [
        "Spell",
    ],
    reqs_short: [
        "Enchantment | Divination | Anima",
    ],
    reqs_full: [
        "(20 INT | 10 WILL | 5 EGO), (5 Enchantment | 10 Divination | 20 Anima)",
    ],
    tags: [
        "Offense",
        "Psychic Damage",
        "Main-Action",
    ],
    unlock_cost: 5,
    description: [
        {
            type: "p",
            content: [
                "When used, you insult an Entity.",
                "You don't need to be able to <b>Pinpoint</b> the Target, you only need to be aware of it's existance.",
                "This Ability requires speech, if the Target cannot hear and understand, or the Caster cannot speak this Ability will not work.",
            ],
        },
        {
            type: "list",
            content: [
                `<b>Telepathic Insult</b> (<a href="../abilities/telepathy.html" target="_blank">Telepathy</a>):`,
                "The Ability can be cast Silently, by sending the insult telepathically.",
                "Ignore Speech Requirement, Language Barriers, and Sound Barriers.",
                "If the Target is Protected by something which shuts down Telepathic Communication, this Ability will not work.",
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
                ["Range", "10 × CS^(1/3)"],
                ["Soul Save", "10 × ESS"],
                ["Damage", "(2d8 × ESS) Psychic"],
            ],
        },
    ],
}