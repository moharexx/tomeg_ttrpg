module.exports = {
    name: "Thousand Shards Of Metal",
    category: "stance",
    type: [
        "Spell",
    ],
    reqs_short: [
        "10 Conjuration | 20 Transmutation | 50 Evocation",
    ],
    reqs_full: [
        "<b>Spell:</b> 20 CS, (10 Conjuration | 20 Transmutation | 50 Evocation)",
    ],
    tags: [
        "Offense",
        "Ranged, Flow Cube AOE, Physical Damage",
        "Main-Action + Bonus-Action / Main-Action",
    ],
    unlock_cost: 20,
    description: [
        {
            type: "p",
            content: [
                `When using this Ability, you are put in <b>Thousand Shards Of Metal Stance</b>.`,
                `On Stance Trigger, Make a Flow Cube AOE Ranged Attack, Flowing out from a chosen side.`,
            ],
        },
        {
            type: "p",
            content: [
                `The Stance Breaks when: <box>HD Decrease, Taking Damage</box>`,
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
                ["Stance Trigger", "Main-Action on your Next Turn."],
                ["Range", "5 × CS^(1/3)"],
                ["Cube Side Length", "4 × ESS^(1/3)"],
                ["Physical Damage", "2d6 × ESS"],
                ["Armor-Pen", "10 × ESS"],
            ],
        },
    ],
}