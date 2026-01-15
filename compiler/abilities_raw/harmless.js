module.exports = {
    name: "Harmless",
    category: "meta",
    type: [
        "Any",
    ],
    reqs_short: [
        "200 Total XP",
    ],
    reqs_full: [
        "200 Total XP",
    ],
    tags: [
        "Control +",
        "Action Cost +, Resource Cost +",
    ],
    unlock_cost: 10,
    description: [
        {
            type: "p",
            content: [
                "You make an Ability not Effect Chosen Entities at all (Including Damage).",
                "For Each Entity saved from the Ability, this Meta-Ability has a Cost depending on the Type of Ability.",
            ],
        },
        {
            type: "list",
            content: [
                "<b>Ability Types and Resource Costs:</b>",
                "Using STR    -> (2 × #Entity × ESS) GRIT",
                "Using AGI    -> (3 × #Entity × ESS) HD",
                "Using Spells -> (2 × #Entity × ESS) SP",
                "Using Innate -> (4 × #Entity × ESS) REST-HP",
            ],
        },
        {
            type: "table",
            full_width: "100%",
            width: ["30%", "70%"],
            content: [
                ["Ability", "Resource Cost"],
                ["Skill", "(#Entity × ESS) × (2 GRIT | 3 HD)"],
                ["Spell", "(2 × #Entity × ESS) SP"],
                ["Innate", "(4 × #Entity × ESS) REST-HP"],
            ],
        },
        {
            type: "p",
            content: [
                "Alternatively you can use a <b>Bonus-Action</b> to make any Number of Targets not be Affected.",
            ],
        },
        {
            type: "list",
            content: [
                "<b>Life Sacrifice</b> (50 VIT | 50 WILL | 50 Anima):",
                "You can use your Life to make the Ability not deal Damage to your Chosen Targets.",
                "<b>Cost:</b> <box>(2 × #Entity × ESS) HP</box>",
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
                ["Type", "Any"],
            ],
        },
    ],
}