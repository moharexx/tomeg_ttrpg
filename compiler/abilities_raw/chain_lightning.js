module.exports = {
    name: "Chain Lightning",
    category: "active",
    type: [
        "Spell",
    ],
    reqs_short: [
        "10 Evocation | 20 Conjuration | 50 Transmutation",
    ],
    reqs_full: [
        "<b>Spell:</b> 20 CS, (10 Evocation | 20 Conjuration | 50 Transmutation)",
    ],
    tags: [
        "Offense",
        "Ranged, Crawl Line AOE, Electric Damage",
        "Main-Action + Bonus-Action",
    ],
    unlock_cost: 20,
    description: [
        {
            type: "p",
            content: [
                `When used, fire a Bolt of Lightning, which can be bent multiple times.`,
                `This is a Crawl Line AOE Ranged Attack, that Hits Multiple Targets, but not Multiple times any single Target.`,
                `This AOE <a href="../main/mechanics.html#aoe">Crawls around Targets</a>, meaning Full Negation won't Stop the Line's AOE.`,
                `<b>Note:</b> Electric Damage is <a href="../main/mechanics.html#maximize_and_minimize">Maximized</a> against <b>Soaked</b> and <b>Airborne</b> Targets.`,
            ],
        },
        {
            type: "list",
            content: [
                "<b>Line Bending:</b>",
                "The Lightning Bolt can be bent into a different direction 3 Times in it's Travel.",
                "This makes a Max of 4 Segments",
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
                ["Total Length", "10 × CS^(1/3)"],
                ["Electric Damage", "2d6 × ESS"],
            ],
        },
    ],
}