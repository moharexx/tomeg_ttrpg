module.exports = {
    name: "Thunderous Territory",
    category: "stance",
    type: [
        "Spell",
    ],
    reqs_short: [
        "5 Evocation | 10 Transmutation | 20 Enchantment",
    ],
    reqs_full: [
        "<b>Spell:</b> 10 CS, (5 Evocation | 10 Transmutation | 20 Enchantment)",
    ],
    tags: [
        "Offense",
        "Ranged, Static Sphere AOE, VIT Save, Thunder Damage",
        "Main-Action / Continuous",
    ],
    unlock_cost: 10,
    description: [
        {
            type: "p",
            content: [
                `Within Range, in a choosen Sphere, deafening, compressed waves of air fill the space.`,
                `When using this Ability, you are put in <b>Thunderous Territory Stance</b>.`,
                `When Entering this Stance and in your subsequent Turns, Entities in the Radius must Succeed a <b>VIT Save</b> or take Damage.`,
            ],
        },
        {
            type: "list",
            content: [
                `<b>Overflow</b> (Main-Action):`,
                `For the rest of the Stance's Duration, you Extend the AOE by placing 2 more copies of the AOE in the Ability's Range.`,
                `A Target can only be Targeted once, even if multiple AOEs overlap.`,
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
                ["Radius", "2 × CS^(1/3)"],
                ["VIT Save", "8 × ESS"],
                ["Thunder Damage", "1d8 × ESS"],
            ],
        },
    ],
}