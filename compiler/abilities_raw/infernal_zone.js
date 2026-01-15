module.exports = {
    name: "Infernal Zone",
    category: "stance",
    type: [
        "Spell",
    ],
    reqs_short: [
        "5 Evocation | 10 Transmutation | 20 Conjuration",
    ],
    reqs_full: [
        "<b>Spell:</b> (10 INT | 10 WILL | 10 DES), (5 Evocation | 10 Transmutation | 20 Conjuration)",
    ],
    tags: [
        "Offense",
        "Heat Damage, Static Sphere AOE",
        "Main-Action / Main-Action",
    ],
    unlock_cost: 10,
    description: [
        {
            type: "p",
            content: [
                "Within Range, in a choosen Sphere the temperature increases, fire and smoke starts to appear, on objects and in the air.",
                "When using this Ability, you are put in Infernal Zone Stance.",
                "When Entering this Stance and at the Start of your subsequent Turns, Entities in the Radius must Succeed a <b>VIT Save</b> or take Damage.",
            ],
        },
        {
            type: "list",
            content: [
                "<b>On Stance Trigger:</b>",
                "You can increase <b>VIT Save</b> to <box>12 × ESS</box>",
                "This can be done only once on this Ability.",
                "This Stance does NOT Break when you Trigger it.",
            ],
        },
        {
            type: "p",
            content: [
                "The Stance Breaks only when entering another Stance.",
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
                ["Stance Trigger", "Main-Action"],
                ["Range", "5 × CS^(1/3)"],
                ["Radius", "CS^(1/3)"],
                ["VIT Save", "8 × ESS"],
                ["Damage", "(3d6 × ESS) Heat"],
            ],
        },
    ],
}