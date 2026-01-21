module.exports = {
    name: "Doomed Divison",
    category: "stance",
    type: [
        "Spell",
    ],
    reqs_short: [
        "10 CS, (5 Anima | 10 Abjuration | 20 Enchantment)",
    ],
    reqs_full: [
        "<b>Spell:</b> 10 CS, (5 Anima | 10 Abjuration | 20 Enchantment)",
    ],
    tags: [
        "Offense",
        "Ranged, Static Sphere AOE, Necrotic Damage, VIT Save, Debuff",
        "Main-Action / Continuous",
    ],
    unlock_cost: 10,
    description: [
        {
            type: "p",
            content: [
                `Within Range, in a choosen Sphere secrade light starts to emanate.`,
                `When using this Ability, you are put in <b>Doomed Divison Stance</b>.`,
                `When Entering this Stance and at the Start of your subsequent Turns, Entities in the Radius must Succeed a <b>VIT Save</b> or take Damage.`,
            ],
        },
        {
            type: "list",
            content: [
                `<b>Overflow:</b>`,
                `As a <b>Main-Action</b>, you now inflict Damaged Entities with the <b>Darkness Effect</b>.`,
                `This can be done only once on this Ability.`,
            ],
        },
        {
            type: "list",
            content: [
                "<b>Darkness Effect:</b>",
                "All Healing, Shielding, and BUFFER they recieve until the End of their Next Turn is Reduced by <box>6 × ESS</box>",
            ],
        },
        {
            type: "p",
            content: [
                `The Stance Breaks only when entering another Stance.`,
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
                ["Stance Trigger", "Continuous"],
                ["Range", "5 × CS^(1/3)"],
                ["Radius", "CS^(1/3)"],
                ["VIT Save", "8 × ESS"],
                ["Damage", "(1d10 × ESS) Radiant"],
                ["Healing Reductions", "6 × ESS"],
            ],
        },
    ],
}