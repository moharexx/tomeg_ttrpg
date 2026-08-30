module.exports = {
    name: "Battle Aura",
    category: "active",
    type: [
        "Innate",
        "Skill",
    ],
    reqs_short: [
        "50 VIT | 50 WILL",
        "20 Martial Arts",
    ],
    reqs_full: [
        "<b>Innate:</b> 50 VIT | 50 WILL",
        "<b>Skill:</b> 20 Martial Arts",
    ],
    tags: [
        "Defense",
        "Self, Buff",
        "Main-Action",
    ],
    unlock_cost: 20,
    description: [
        {
            type: "p",
            content: [
                `With this Ability you can make your body act like Armor, creating a Simulated Armor.`,
                `Simulated Armors can have Max Property Points, and can't stack on top of other Armors.`,
                `You can change the Simulated Armor by Recasing this Ability.`,
            ],
        },
        {
            type: "p",
            content: [
                `If you're already Wearing a real Armor, then you can attempt to override that Armor with the Simulated one.`,
                `But only if the Armor's Tier is less than Half the ESS you Cast this Ability with.`,
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
                ["Range", "Self"],
                ["Duration", "Till Consciousness is lost"],
                ["Simulated Item Tier", "ESS"],
            ],
        },
    ],
}