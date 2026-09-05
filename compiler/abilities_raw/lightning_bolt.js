module.exports = {
    name: "Lightning Bolt",
    category: "active",
    type: [
        "Spell",
    ],
    reqs_short: [
        "5 Evocation | 10 Conjuration | 20 Transmutation",
    ],
    reqs_full: [
        "<b>Spell:</b> 10 CS, (5 Evocation | 10 Conjuration | 20 Transmutation)",
    ],
    tags: [
        "Offense",
        "Ranged, Flow Line AOE, Electric Damage",
        "Main-Action",
    ],
    unlock_cost: 10,
    description: [
        {
            type: "p",
            content: [
                `Fire a straight bolt of lightning.`,
                `This is a Flow Line AOE Ranged Attack.`,
                `<b>Note:</b> Electric Damage is <a href="../main/mechanics.html#maximize_and_minimize">Maximized</a> against <b>Soaked</b> and <b>Airborne</b> Targets.`,
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
                ["Line Length", "10 × CS^(1/3)"],
                ["Electric Damage", "2d6 × ESS"],
            ],
        },
    ],
}