module.exports = {
    name: "Starsign 124",
    category: "stance",
    type: [
        "Skill",
        "Spell",
    ],
    reqs_short: [
        "50 Melee Weapon",
        "10 Enchantment | 20 Transmutation | 50 Evocation",
    ],
    reqs_full: [
        "<b>Skill:</b> 50 Melee Weapon",
        "<b>Spell:</b> 20 CS, (10 Enchantment | 20 Transmutation | 50 Evocation)",
    ],
    tags: [
        "Offense",
        "Self, Melee, Buff",
        "Main-Action / Main-Action",
    ],
    unlock_cost: 20,
    description: [
        {
            type: "p",
            content: [
                `When using this Ability, you are put in <b>Starsign 124 Stance</b>.`,
                `While in <b>Starsign 124 Stance</b>; at the Start of Your Turns you roll a d10 for a Random Damage Type.`,
                `This new Damage Type only effect's your Melee Weapons.`,
                `Damage Types other than <box>Electric | Radiant | Necrotic</box> gain Bonus <box>2 × ESS</box> Damage and To-Hit.`,
                `Damage Type Table: <box>Physical | Heat | Cold | Bio | Demat | Thunder | Electric | Psychic | Radiant | Necrotic</box>`,
            ],
        },
        {
            type: "list",
            content: [
                `<b>Stance Trigger</b> (Main-Action):`,
                `The Stance Ends, and Until the End of your Next Turn, keep your current Damage type and double the Damage and To-Hit Bonuses.`,
                `Damage Types without the Buffs gain the Buff.`,
            ],
        },
        {
            type: "p",
            content: [
                "The Stance Breaks only when entering any other Stance.",
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
                ["Damage And To-Hit Bonus", "2 × ESS"],
            ],
        },
    ],
}