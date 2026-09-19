module.exports = {
    name: "Linked Sword",
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
        "Weapon Damage",
        "Main-Action",
    ],
    unlock_cost: 10,
    description: [
        {
            type: "p",
            content: [
                `You make your Melee Attack so precise, it hits twice.`,
                `On a Hit you put a <b>DoT Effect</b> on the Target.`,
                `This Effect will Trigger on your Next Turn.`,
                `The <b>DoT</b> will repeat the <b>Hit</b> of the Parent Attack.`,
                `Meaning that the <b>DoT</b> is like an Attack with infinite <b>To-Hit</b>.`,
                `The <b>DoT</b> deals the same Damage as it's Parent Attack, allong with all of its On-Attacks (other than this).`,
                `The <b>DoT Effect</b> Ends after it Triggers.`,
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
                ["Special Condition", "Melee"],
                ["Damage", "Parent Attack with On-Attacks"],
            ],
        },
    ],
}