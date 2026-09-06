module.exports = {
    name: "Hakari's Jackpot",
    category: "active",
    type: [
        "Spell",
    ],
    reqs_short: [
        "10 Abjuration | 20 Enchantment | 50 Anima",
    ],
    reqs_full: [
        "<b>Spell:</b> 20 CS, (10 Abjuration | 20 Enchantment | 50 Anima)",
    ],
    tags: [
        "Defense",
        "Buff",
        "Bonus-Action",
    ],
    unlock_cost: 20,
    description: [
        {
            type: "p",
            content: [
                `You Roll a d10 to see if you CRIT, if you do, you hit the JACKPOT.`,
                `If you don't, you can still hit the JACKPOT by doing a CRIT with anything till the Start of your Next Turn.`,
                `If you hit the JACKPOT; till the End of your Next Turn, all Damage you recieve, both HP and SP, is Reduced by <box>10 × ESS</box>`,
            ]
        },
        {
            type: "p",
            content: [
                `<i><b>IN OTHER WORDS, IN THE NEXT ROUND FOLLOWING A JACKPOT, HAKARI IS EFFECTIVELY IMMORTAL.</b></i>`,
            ]
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
                ["Damage Reduction", "10 × ESS"],
            ],
        },
    ],
}