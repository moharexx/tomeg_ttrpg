module.exports = {
    name: "Doomed Divison",
    category: "stance",
    type: [
        "Spell",
    ],
    reqs_short: [
        "5 Anima | 10 Abjuration | 20 Enchantment",
    ],
    reqs_full: [
        "<b>Spell:</b> 10 CS, (5 Anima | 10 Abjuration | 20 Enchantment)",
    ],
    tags: [
        "Offense",
        "Ranged, Static Sphere AOE, VIT Save, Necrotic Damage, Debuff, Effect",
        "Main-Action / Continuous",
    ],
    unlock_cost: 10,
    description: [
        {
            type: "p",
            content: [
                `Within Range, in a choosen Sphere, dark orbs of energy start flickering.`,
                `When using this Ability, you are put in <b>Doomed Divison Stance</b>.`,
                `When Entering this Stance and in your subsequent Turns, Entities in the Radius must Succeed a <b>VIT Save</b> or take Damage.`,
            ],
        },
        {
            type: "list",
            content: [
                `<b>Overflow</b> (Main-Action):`,
                `For the rest of the Stance's Duration, Damaged Entities will get the <b>Darkness Effect</b>.`,
            ],
        },
        {
            type: "list",
            content: [
                `<b>Darkness Effect:</b>`,
                `All Healing, Shielding, and BUFFER recieved is Reduced by <box>6 × ESS</box>`,
                `This Effect lasts until the End of the Target's Next Turn.`,
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
                ["Stance Trigger", "None"],
                ["Range", "5 × CS^(1/3)"],
                ["Radius", "CS^(1/3)"],
                ["VIT Save", "8 × ESS"],
                ["Necrotic Damage", "1d6 × ESS"],
                ["Support Reductions", "6 × ESS"],
            ],
        },
    ],
}