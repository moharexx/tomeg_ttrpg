module.exports = {
    name: "Magic Missile",
    category: "stance",
    type: [
        "Spell",
    ],
    reqs_short: [
        "5 Evocation | 10 Abjuration | 20 Transmutation",
    ],
    reqs_full: [
        "<b>Spell:</b> 5 CS, (5 Evocation | 10 Abjuration | 20 Transmutation)",
    ],
    tags: [
        "Offense",
        "Ranged, Demat Damage",
        "Bonus-Action / Bonus-Action",
    ],
    unlock_cost: 5,
    description: [
        {
            type: "p",
            content: [
                `When using this Ability you are put in <b>Magic Missile Stance</b>.`,
                `When Entering, and Stacking this Stance, gain 3 Orbs.`,
                `While in Magic Missile Stance, Your MS is Halved.`,
                `On Stance Trigger you shoot out all the Orbs.`,
                `Roll only a single d10 Check for all Attacks, but Roll Damage separately.`,
                `Max Orb Count: <box>12</box>`,
            ],
        },
        {
            type: "list",
            content: [
                `<b>Potency Boost:</b>`,
                `For each point of <a href="../main/mechanics.html#potency" target="_blank">Potency</a> you can add +1 Damage to a Single Orb.`,
                `For each <box>3 × ESS</box> points of <b>Potency</b> you can add +1 Orb.`,
            ],
        },
        {
            type: "p",
            content: [
                `The Stance Breaks when: <box>Using Abilities, Taking Damage</box>`,
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
                ["Stance Trigger", "Bonus-Action in your Next Turn"],
                ["Range", "20 / 40 × CS^(1/3)"],
                ["Orb Demat Damage", "1d4 × ESS"],
            ],
        },
    ],
}