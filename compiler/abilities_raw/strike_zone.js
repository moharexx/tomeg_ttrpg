module.exports = {
    name: "Strike Zone",
    category: "stance",
    type: [
        "Skill",
    ],
    reqs_short: [
        "20 Melee Weapon | 20 Martial Arts",
    ],
    reqs_full: [
        "<b>Skill:</b> 20 Melee Weapon | 20 Martial Arts",
    ],
    tags: [
        "Offense",
        "Melee, Weapon Damage",
        "Main-Action + Bonus-Action / Continuous",
    ],
    unlock_cost: 20,
    description: [
        {
            type: "p",
            content: [
                `When using this Ability, you are put in <b>Strike Zone Stance</b>.`,
                `When an Entity Enters or starts Moving inside your Melee Reach, you can make an Attack-Action against it as a <b>Free-Action</b>.`,
                `When you do so, you can't Attack the same Target again with this Stance, while the Stance is Active.`,
                `When the Attack-Action would cost you only a Bonus-Action, then make the Attack with Advantage.`,
            ],
        },
        {
            type: "p",
            content: [
                `The Stance Breaks when: <box>Moving</box>`,
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
                ["Stance Trigger", "None"],
            ],
        },
    ],
}