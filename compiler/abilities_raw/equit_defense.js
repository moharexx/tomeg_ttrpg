 module.exports = {
    name: "Equit Defense",
    category: "active",
    type: [
        "Innate",
        "Spell",
    ],
    reqs_short: [
        "20 WILL",
        "10 Enchantment | 20 Transmutation",
    ],
    reqs_full: [
        "<b>Innate:</b> 20 WILL",
        "<b>Spell:</b> (50 INT | 20 WILL | 20 EGO), (10 Enchantment | 20 Transmutation)",
    ],
    tags: [
        "Defense",
        "Touch, Buff, Debuff",
        "Main-Action",
    ],
    unlock_cost: 20,
    description: [
        {
            type: "p",
            content: [
                "When this Ability is used, you can add additional Resistances onto an Armor at a cost.",
                "This Ability gives <box>(6 × ESS) Resistance Points</box> which can be allocated to boost Resistance of one type but give Weakness to another.",
                "For each Point of Resistance, choose one Point of Weakness in another Damage Type.",
                "<b>Types:</b> <box>Physical | Heat | Cold | Bio | Demat | Thunder | Electric | Radiant | Necrotic</box>",
            ],
        },
        {
            type: "p",
            content: [
                "You can use this Ability on an Armor worn by another Entity.",
                "The To-Hit is the same as any other Spell, or Skill if you use Martial-Arts, and the Target is eligible to a Soul Save.",
                "When you Cast this Ability as <b>Innate</b> it only Targets armor currently worn by you, and if the armor is taken off the Effect Ends.",
            ],
        },
        {
            type: "list",
            content: [
                "<b>Resistance Limits:</b>",
                "There is a Limit on how much any Armor Type can be boosted, this limit includes what the Armor gives by Base.",
                "Maximum Resistance for any Damage Type: <box>Armor Property Points × ESS</box>",
                "Maximum Weakness for any Damage Type: <box>6 × ESS</box>",
            ],
        },
        {
            type: "list",
            content: [
                `<b>Adjust Defense</b> (Requirement: <a href="../abilities/battle_aura.html" target="_blank">Battle Aura</a>):`,
                "When Casting <b>Battle Aura</b>, you can additionally Cast this Ability on Yourself as a Free-Action.",
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
                ["Range", "Touch"],
                ["Soul Save", "8 × ESS"],
                ["Duration", "1 Minute (20 Rounds)"],
                ["Resistance Points", "6 × ESS"],
            ],
        },
    ],
}