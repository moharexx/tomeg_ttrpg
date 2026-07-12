module.exports = {
    name: "Charge",
    category: "meta",
    type: [
        "Any",
    ],
    reqs_short: [
        "100 Total XP",
    ],
    reqs_full: [
        "100 Total XP",
    ],
    tags: [
        "Potency +",
        "Action Cost +",
    ],
    unlock_cost: 10,
    description: [
        {
            type: "p",
            content: [
                `You can put extra Actions into an Ability, to give it more <a href="../main/mechanics.html#potency" target="_blank">Potency.</a>`,
                `This can only be used on Abilities with Cast Times lower than <box>1 Minute (20 Rounds)</box>`,
            ],
        },
        {
            type: "p",
            content: [
                `As a Free-Action you can Start Charging an Ability.`,
                `While Charging you cannot use Abilities, but you can use Actions to Charge Up that Ability.`,
                `You Spend the Ability's Action Cost to Cast it, thus stopping the Charging.`,
            ],
        },
        {
            type: "dots",
            content: [
                `Stances can be Charged before being put into them, while in them, and even at the moment of their Trigger.`,
                `Charging before Entering the Parent Stance will be like Charging any normal Ability.`,
                `While in a Stance, the Potency from Charging will only show itself after the Stance is Triggered.`,
                `You can Charge Reactions, but only with Actions you have right when using that Reaction!`,
            ],
        },
        {
            type: "p",
            content: [
                `If an Entity can Pinpoint you, then they also know what you're Charging.`,
                `With a <a href="../main/mechanics.html#feint" target="_blank">Feint</a> you can hide that you're Charging.`,
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
                ["Type", "Any"],
                ["Bonus-Action Potency", "3 × ESS"],
                ["Main-Action Potency", "5 × ESS"],
                ["Max Potency from Charge", "8 × ESS"],
            ],
        },
    ],
}