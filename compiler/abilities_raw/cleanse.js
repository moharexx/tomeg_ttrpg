module.exports = {
    name: "Cleanse",
    category: "active",
    type: [
        "Spell",
    ],
    reqs_short: [
        "5 Abjuration | 10 Enchantment | 20 Transmutation",
    ],
    reqs_full: [
        "<b>Spell:</b> (5 INT | 5 WILL | 10 EGO), (5 Abjuration | 10 Enchantment | 20 Transmutation)",
    ],
    tags: [
        "Defense, Utility",
        "Ranged, Targeting, Effect",
        "Bonus-Action",
    ],
    unlock_cost: 5,
    description: [
        {
            type: "p",
            content: [
                "When used, you Target a Pinpointed Object or Entity in Range, and attempt to Remove an Effect from them.",
                "You select 1 Effect (NOT Condition) to Remove, if the Effect's ESS or Tier is equal or less than this Ability's then it's Removed.",
                "Unwilling Targets are eligible to a <b>Soul Save</b> of <box>8 × ESS</box>",
            ],
        },
        {
            type: "list",
            content: [
                "<b>Potency Boost:</b>",
                `For each 2 points of <a href="../main/mechanics.html#potency" target="_blank">Potency</a> you can Remove +1 Effect from the same Target.`,
                `For each 2 points of <b>Potency</b> you can Remove 1 ESS or Tier higher Effects.`,
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
                ["Range", "5 × CS^(1/3)"],
                ["Soul Save", "8 × ESS"],
            ],
        },
    ],
}