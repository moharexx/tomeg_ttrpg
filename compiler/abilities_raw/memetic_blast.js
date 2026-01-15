module.exports = {
    name: "Memetic Blast",
    category: "active",
    type: [
        "Spell",
    ],
    reqs_short: [
        "5 Divination | 10 Anima | 20 Enchantment",
    ],
    reqs_full: [
        "(5 INT | 5 WILL | 10 EGO), (5 Divination | 10 Anima | 20 Enchantment)",
    ],
    tags: [
        "Offense",
        "Ranged, Psychic Damage",
        "Main-Action",
    ],
    unlock_cost: 5,
    description: [
        {
            type: "p",
            content: [
                `<b><i>"Biden Blast!"</i></b>`,
                `When used, fire a Single Target Projectile, with a payload of condensed information.`,
                `On Hit, the violent speed which the Information is injected into the Target's mind causes Psychic Damage.`,
                `The Information by default is just memetic noise, but can be whatever you want.`,
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
                ["Range", "10 / 20 × CS^(1/3)"],
                ["Damage", "(2d8 × ESS) Psychic"],
                ["Message Size", "10 × CS Words | 320 × CS bits"],
            ],
        },
    ],
}