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
        "<b>Spell:</b> (20 INT | 20 WILL | 20 EGO), (10 Evocation | 20 Conjuration | 50 Transmutation)",
    ],
    tags: [
        "Offense",
        "Electric Damage, Crawl Line AOE",
        "Main-Action + Bonus-Action",
    ],
    unlock_cost: 20,
    description: [
        {
            type: "p",
            content: [
                "When used, fire a Bolt of Lightning, which can be bent multiple times.",
                "This is a Crawl Line AOE Ranged Attack, that Hits Multiple Targets, but not Multiple times any single Target.",
                `This AOE Attack <a href="../main/mechanics.html#aoe">Crawls around Targets</a>, meaning a Full Negation will not Stop the Line's AOE.`,
            ],
        },
        {
            type: "list",
            content: [
                "<b>Line Bending:</b>",
                "The Lightning Bolt can be bent into a different direction 3 Times in it's Travel.",
                "This makes a Max of 4 Segments, with their combined Length not greater than: <box>20 × ESS^(1/3)</box>",
            ],
        },
        {
            type: "list",
            content: [
                "<b>Electric Effect:</b>",
                `Against Soaked, or <a href="../main/mechanics.html#conditions" target="_blank">Airborn</a> Targets this Ability Deals <a href="../main/mechanics.html#max_value" target="_blank">Max-Damage.</a>`,
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
                ["Combined Line Length", "20 × ESS^(1/3)"],
                ["Damage", "(2d6 × ESS) Electric"],
            ],
        },
    ],
}