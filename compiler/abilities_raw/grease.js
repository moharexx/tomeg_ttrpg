module.exports = {
    name: "Grease",
    category: "active",
    type: [
        "Spell",
    ],
    reqs_short: [
        "5 Conjuration | 10 Transmutation | 20 Enchantment",
    ],
    reqs_full: [
        "<b>Spell:</b> (5 INT | 10 WILL | 10 EGO), (5 Conjuration | 10 Transmutation | 20 Enchantment)",
    ],
    tags: [
        "Offense, Utility, Unlock",
        "Heat Damage, Static Cube AOE, Crowd Control",
        "Main-Action",
    ],
    unlock_cost: 5,
    description: [
        {
            type: "p",
            content: [
                `When used, you select a Point, and cover every surface with magical grease in the Area.`,
                `All of the Covered Surface must be connected, and in Range.`,
                `This includes Entities, covering them with Grease, but this does not cause slippage.`,
                `Targets can make an <box>AGI Save of (8 × ESS)</box> to not be Covered in Grease.`,
                `All Targets Entering, or Starting Their Turn on Grease, must make an <box>AGI Save of (8 × ESS)</box> or get the <a href="../main/mechanics.html#conditions" target="_blank">Prone Condition.</a>`,
                `The Grease is a Pseudo Material and sublimates into nothing when the Spell's Duration runs out.`,
            ]
        },
        {
            type: "p",
            content: [
                `When a Heat Based Attack Hits the Grease it quickly Ignites all the connected Grease and burns up.`,
                `Any Target covered with Grease gets dealt <box>4 × ESS</box> Heat Damage as the Grease burns away.`,
                `If an Ability procs the Soaked Condition (All water Abilities) it clears the Grease.`,
            ]
        },
        {
            type: "list",
            content: [
                `<b>Stable Grease</b> (20 Transmutation | 20 Enchantment):`,
                `When Casting this Ability, you can make the Grease Non-Ignitable.`,
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
                ["Duration", "1 Minute (20 Rounds)"],
                ["Range", "5 × CS^(1/3)"],
                ["Cube Side Length", "4 × ESS^(1/3)"],
                ["AGI Save", "8 × ESS"],
                ["Burn Up Damage", "(4 × ESS) Heat"],
            ],
        },
    ],
}