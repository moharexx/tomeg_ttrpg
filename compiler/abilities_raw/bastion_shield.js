module.exports = {
    name: "Bastion Shield",
    category: "reactive",
    type: [
        "Skill",
    ],
    reqs_short: [
        "10 Melee Weapon",
    ],
    reqs_full: [
        "<b>Skill:</b> 10 Melee Weapon",
    ],
    tags: [
        "Defense",
        "Negation, Self",
        "Bonus-Action",
    ],
    unlock_cost: 10,
    description: [
        {
            type: "p",
            content: [
                "When Targeted by an AOE while having a <b>Heavy Shield</b> equipped you can use this Ability.",
                `This Ability will change the behaviour of the <a href="../main/mechanics.html#aoe">Flowing</a> or <a href="../main/mechanics.html#aoe">Crawling</a> AOE which Targets the Caster.`,
                "You gain extra <box>(6 × ESS) Armor VS All</box> against the AOE.",
                "The AOE when Fully Negated by you, in the Direction of it's Flow, leaves behind a 90° <b>Cone</b> where the AOE does not Reach.",
            ],
        },
        {
            type: "p",
            content: [
                `<b>Example:</b> You Reduce a <a href="../abilities/cone_of_cold.html">Cone Of Cold</a> to Deal no Damage to you, Entities in a full 90° <b>Cone</b> behind you Will NOT be affected by the Cone Of Cold.`,
                "<b>Note:</b> While the Cone Of Cold Example is a Flow AOE, this works same with Crawling AOEs as well."
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
                ["Cast Time", "Bonus-Action"],
                ["Trigger", "Targeted by an AOE"],
                ["Range", "Self"],
                ["Extra Armor VS All", "6 × ESS"],
                ["Overwritten Flow Negation", "90° (1 Forward = +2 Width)"],
            ],
        },
    ],
}