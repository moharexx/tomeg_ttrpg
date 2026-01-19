module.exports = {
    name: "Virus",
    category: "active",
    type: [
        "Spell",
    ],
    reqs_short: [
        "5 CS, (5 Anima | 10 Enchantment | 20 Transmutation)",
    ],
    reqs_full: [
        "<b>Spell:</b> 5 CS, (5 Anima | 10 Enchantment | 20 Transmutation)",
    ],
    tags: [
        "Offense, Unlock",
        "Ranged, Targeting, Bio Damage, VIT Save",
        "Main-Action",
    ],
    unlock_cost: 5,
    description: [
        {
            type: "p",
            content: [
                `When used, you Target a Pinpointed Entity in Range, and attempt to infect them.`,
                `If the Target fails a <b>VIT Save</b> of <box>10 × ESS</box> they gain the <b>Poison Effect</b>.`,
                `At Cast you choose the kind of <b>Poison Effect</b> you want to inflict them with from the list below.`,
            ],
        },
        {
            type: "p",
            content: [
                `When you Unlock this Ability, Choose 1 Unlock that you gain for free.`,
            ],
        },
        {
            type: "list",
            content: [
                `<b>Deadly</b> (5 XP):`,
                `<b>Poison Effect:</b>`,
                `The Ability will do <box>(1d8 × ESS) Bio</box> <a href="../main/mechanics.html#executing" target="_blank">Executing</a> Damage, at the Start of Caster's Next Turn.`,
                `This Effect Ends after Dealing Damage.`,
            ]
        },
        {
            type: "list",
            content: [
                `<b>Plague</b> (5 XP):`,
                `<b>Poison Effect:</b>`,
                `The Ability will do <box>(1d8 × ESS) Bio</box> Damage, at the Start of Caster's Next Turn.`,
                `At Cast, you can add a <b>Bonus-Action</b> to the <b>Cast Time</b> to Target an additional Target.`,
                `If the Target gets 0 or less HP from this Effect, you can Re-Cast this Ability as a <b>Bonus-Action</b>.`,
                `This Effect Ends after Dealing Damage.`,
            ]
        },
        {
            type: "list",
            content: [
                "<b>Potency Boost:</b>",
                `For each <box>3 × ESS</box> points of <a href="../main/mechanics.html#potency" target="_blank">Potency</a> you can Target an additional Entity.`,
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
                ["Range", "10 × CS^(1/3)"],
                ["VIT Save", "10 × ESS"],
                ["Damage", "(1d8 × ESS) Bio"],
            ],
        },
    ],
}