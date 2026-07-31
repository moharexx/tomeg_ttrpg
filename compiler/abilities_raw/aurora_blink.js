module.exports = {
    name: "Aurora Blink",
    category: "active",
    type: [
        "Spell",
    ],
    reqs_short: [
        "10 Transmutation | 20 Evocation | 50 Enchantment",
    ],
    reqs_full: [
        "<b>Spell:</b> 20 CS, (10 Transmutation | 20 Evocation | 50 Enchantment)",
    ],
    tags: [
        "Offense",
        "Melee, Static Pillar AOE, AGI Save, Heat Damage, Mobility",
        "Main-Action",
    ],
    unlock_cost: 20,
    description: [
        {
            type: "p",
            content: [
                `When used, You blink and release a pillar of aurora where you land.`,
                `This is a Static Pillar AOE Melee Attack.`,
                `When arriving to your new location, Entities inside the Pillar must Succeed an <b>AGI Save</b> of <box>8 × ESS</box> or take Heat Damage.`,
                `Aurora Blink's Movement does NOT Activate Reactions, or Trigger Stances.`,
            ]
        },
        {
            type: "list",
            content: [
                `<b>COMBO:</b>`,
                `If you Damage an Entity with this Ability, the <b>Cast Time</b> will be lowered to a <box>Bonus-Action</box> till the End of your Next Turn.`,
                `Damaging Entities with less <box>Total XP</box> than <box>20 × ESS</box> won't Activate <b>COMBO</b>.`,
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
                ["Blink Distance", "3 × ESS^(1/3)"],
                ["AGI Save", "8 × ESS"],
                ["Pillar Radius", "CS^(1/3) / 2"],
                ["Pillar Height", "5 × CS^(1/3)"],
                ["Heat Damage", "2d4 × ESS"],
            ],
        },
    ],
}