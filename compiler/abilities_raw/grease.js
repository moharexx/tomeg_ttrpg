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
        "<b>Spell:</b> 5 CS, (5 Conjuration | 10 Transmutation | 20 Enchantment)",
    ],
    tags: [
        "Offense, Utility, Unlock",
        "Static Cube AOE, AGI Save, Heat Damage, Crowd Control",
        "Main-Action",
    ],
    unlock_cost: 5,
    description: [
        {
            type: "p",
            content: [
                `When used, select a Point you can Pinpoint, and cover everything with magical grease in that Area.`,
                `All Targets must make an <b>AGI Save</b> of <box>8 × ESS</box>, on a Fail they become covered in Grease, and get the <a target="_blank" href="../main/mechanics.html#conditions">Prone</a> Condition.`,
                `Any Entity which Enters or Starts its Turn in the Grease must also make an <b>AGI Save</b> against the same effects.`,
                `If an Entity Succeeds the Save, for the next 1 Minute (20 Rounds) they don't have to make Saves against the specific Ability Instance.`,
                `The Grease is a Pseudo Material and sublimates into nothing when the Spell's Duration runs out.`,
            ]
        },
        {
            type: "p",
            content: [
                `When a Heat Based Attack Hits the Grease it quickly Ignites all the connected Grease and burns up.`,
                `Any Target covered in Grease gets dealt <box>4 × ESS</box> Heat Damage as the Grease burns away.`,
                `If an Ability procs the Soaked Condition, it clears the Grease.`,
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
                ["Burn Up Heat Damage", "4 × ESS"],
            ],
        },
    ],
}