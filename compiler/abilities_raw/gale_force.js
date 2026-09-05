module.exports = {
    name: "Gale Force",
    category: "active",
    type: [
        "Spell",
    ],
    reqs_short: [
        "5 Transmutation | 10 Conjuration | 20 Evocation",
    ],
    reqs_full: [
        "<b>Spell:</b> 5 CS, (5 Transmutation | 10 Conjuration | 20 Evocation)",
    ],
    tags: [
        "Offense",
        "Ranged, Physical Damage",
        "Main-Action",
    ],
    unlock_cost: 5,
    description: [
        {
            type: "p",
            content: [
                `Fire a long Range, Single Target Projectile of condensed air.`,
                `You can Remove the Soaked and/or Heat Effects from chosen Targets which are Hit.`,
                `Gale Force's ESS must be at least Half of the Effect's ESS to Remove it.`,
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
                ["Range", "40 / 80 × CS^(1/3)"],
                ["Physical Damage", "2d8 × ESS"],
            ],
        },
    ],
}