module.exports = {
    name: "Demonic Blood Bolt",
    category: "active",
    type: [
        "Skill",
        "Spell",
    ],
    reqs_short: [
        "50 Martial Arts",
        "10 Anima | 20 Transmutation | 50 Enchantment",
    ],
    reqs_full: [
        "<b>Skill:</b> 50 Martial Arts",
        "<b>Spell:</b> 20 CS, (10 Anima | 20 Transmutation | 50 Enchantment)",
    ],
    tags: [
        "Offense",
        "Ranged, Necrotic Damage",
        "Main-Action + Bonus-Action, REST-HP",
    ],
    unlock_cost: 20,
    description: [
        {
            type: "p",
            content: [
                `When used, fire a bolt of blood or demonic energy at a Pinpointed Entity within Range that can Bounce.`,
                `When the bolt damages a Target, it bounces to the next chosen Target and the Caster Gains <box>5 × ESS</box> <b>REST-HP</b>.`,
                `The bolt can bounce up to 2 times, meaning it Hits a Total of 3 Entities.`,
                `The Same Target cannot be Targeted more than once.`,
                `The Attack isn't rerolled, only d10 Check is needed, but still Roll Damage seperately.`,
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
                ["Ability Cost", "10 REST-HP × ESS"],
                ["Range", "10 × CS^(1/3)"],
                ["Damage", "(1d8 × ESS) Necrotic"],
                ["REST-HP Gain On Damage", "5 × ESS"],
            ],
        },
    ],
}