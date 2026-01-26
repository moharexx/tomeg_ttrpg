module.exports = {
    name: "Illumina",
    category: "on_attack",
    type: [
        "Skill",
        "(Melee)",
    ],
    reqs_short: [
        "10 Melee Weapon",
    ],
    reqs_full: [
        "<b>Skill:</b> 10 Melee Weapon",
    ],
    tags: [
        "Offense",
        "Melee, Radiant Damage, Mobility",
        "Main-Action",
    ],
    unlock_cost: 10,
    description: [
        {
            type: "p",
            content: [
                `When you make a Melee Attack, with Illumina you can Dash with it.`,
                `You can make the Parent Attack at any position you pass through while dashing, including the start and end.`,
                `The Parent Attack also applies <box>4 × ESS</box> Bonus Radiant Damage.`,
                `The Movement and Parent Attack doesn't activate Reactions and Stance Triggers.`,
            ],
        },
        {
            type: "p",
            content: [
                `When you use <b>Illumina</b> you can apply a <b>Light Effect</b> on Yourself till the Start of Your Next Turn.`,
                `This Effect is only for interacting with other Effects and Entities.`,
            ],
        },
        {
            type: "list",
            content: [
                `<b>COMBO:</b>`,
                `You can use this On-Attack on Dash Type Abilities, like <a href="flash_strike.html" target="_blank">Flash Strike</a>.`,
                `When you do so, you make Illumina's Dash either before, or inbetween, or after the Parent Ability's Dash.`,
                `When you choose inbetween, you split the Parent Ability's Dash in two, to inject Illuina's Dash inbetween.`,
                `At every break point you can choose a new Direction for the continuation of the Dash.`,
                `<b>Note:</b> Bonus Damage still applies to a Hit Target, but with <a href="../main/abilities.html#on_attack" target="_blank">On-Attacks' AOE rules</a>, only to 1 Target!`,
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
                ["Prerequisite", "Melee"],
                ["Dash Length", "MS"],
                ["Bonus Damage", "(4 × ESS) Radiant"],
            ],
        },
    ],
}