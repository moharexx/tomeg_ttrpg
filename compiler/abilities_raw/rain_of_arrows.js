module.exports = {
    name: "Rain Of Arrows",
    category: "active",
    type: [
        "Skill",
    ],
    reqs_short: [
        "20 Ballistic",
    ],
    reqs_full: [
        "<b>Skill:</b> 20 Ballistic",
    ],
    tags: [
        "Offense",
        "Ranged, AOE, Weapon Damage",
        "Main-Action",
    ],
    unlock_cost: 20,
    description: [
        {
            type: "p",
            content: [
                `Shoot up in the air, then it falls down like rain.`,
                `This is a Ranged Cylinder AOE which happens at the End of your Turn, prompting an AGI Save against the Damage.`,
                `If there is gravity, the Cylinder must be placed vertically with gravity.`,
            ],
        },
        {
            type: "list",
            content: [
                `<b>Overflow:</b>`,
                `This Ability can be Overflown with a Bonus-Action, giving it one choosen extra effect.`,
                `If Light Weapon; you Double the Cylinder's Radius.`,
                `If Medium Weapon; you can increase its Save Difficulty by <box>4 × ESS</box>`,
                `If Heavy Weapon; the Ability gains <b>Executing</b>.`,
                `If Spread Property; the AOE Save repeats at the End of your Next Turn.`,
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
                ["Range", "Parent Weapon's Range, excluding its Long-Range"],
                ["AGI Save", "8 × ESS"],
                ["Cylinder Radius", "AGI^(1/3)"],
                ["Cylinder Height", "10 × AGI^(1/3)"],
                ["Damage Of Weapon's Type", "1d12 × ESS"],
            ],
        },
    ],
}