module.exports = {
    name: "Stinking Cloud",
    category: "active",
    type: [
        "Spell",
    ],
    reqs_short: [
        "10 Conjuration | 20 Transmutation | 50 Enchantment",
    ],
    reqs_full: [
        "<b>Spell:</b> (20 INT | 50 WILL | 50 EGO), (10 Conjuration | 20 Transmutation | 50 Enchantment)",
    ],
    tags: [
        "Offense, Utility",
        "Static Sphere AOE, VIT Save, Debuff, Obscurance",
        "Main-Action + Bonus-Action",
    ],
    unlock_cost: 20,
    description: [
        {
            type: "p",
            content: [
                "When used, you create a yellow cloud of nauseating gas, which Sight based detection cannot see through.",
                "Every Entity inside the Radius, at the Start of their Turns are Targeted.",
                `On a Failed <b>VIT Save</b> of <box>6 × ESS</box>, Targets get the <a href="../main/mechanics.html#conditions" target="_blank">Dazed Condition</a> until the Start of their Next Turn.`,
            ]
        },
        {
            type: "p",
            content: [
                "A Wind or Shockwave based Attack with at least <box>20 × ESS</box> Damage disperses the Stinking Cloud.",
                "If that Attack is an AOE then <box>5 × ESS</box> Damage is enough to disperse the Stinking Cloud.",
            ]
        },
        {
            type: "p",
            content: [
                `When a Heat Based Attack Hits the Cloud it quickly Ignites all the connected parts and burns up.`,
                `Any Target inside the Area gets dealt <box>4 × ESS</box> Heat Damage as the Cloud burns away.`,
            ]
        },
        {
            type: "list",
            content: [
                `<b>Inflammable Gas</b> (20 Transmutation | 20 Enchantment):`,
                `When Casting this Ability, you can make the Cloud Non-Ignitable.`,
            ],
        },
        {
            type: "list",
            content: [
                "<b>Shaped Cloud</b> (50 Transmutation):",
                "This Ability can be Shaped in whatever way the Caster desires, still fitting inside the Radius.",
            ],
        },
        {
            type: "p",
            content: [
                `<i>Brother Ewww</i>`,
                `<b>Note:</b> Yes this effects noseless and non-biological Entities, like machines. How? Magic!`,
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
                ["Duration", "1 Minute (20 Rounds)"],
                ["Range", "5 × CS^(1/3)"],
                ["Radius", "4 × ESS^(1/3)"],
                ["VIT Save", "6 × ESS"],
                ["Ignition Damage", "(4 × ESS) Heat"],
            ],
        },
    ],
}