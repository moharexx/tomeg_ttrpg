module.exports = {
    name: "Adrenaline Rush (WIP)",
    category: "reactive",
    type: [
        "Innate",
    ],
    reqs_short: [
        "10 WILL",
    ],
    reqs_full: [
        "<b>Innate:</b> 10 WILL",
    ],
    tags: [
        "Defense, Cooldown",
        "Self, Buff, TEMP-HP, HD",
        "Bonus-Action, GRIT",
    ],
    unlock_cost: 10,
    description: [
        {
            type: "p",
            content: [
                `The thrill of the battle pumps you full of adrenaline, making you stand when otherwise you'd have fallen.`,
                `When you get Targeted by an Attack you can choose what type of Adrenaline Rush you get.`,
            ],
        },
        {
            type: "list",
            content: [
                `<b>Adrenaline Tank</b> (Usable against Saves):`,
                `You Spend the GRIT Cost and gain <box>12 × ESS</box> <b>TEMP-HP</b>`,
                `After that the Attack Hits you.`,
            ],
        },
        {
            type: "list",
            content: [
                `<b>Adrenaline Dodge</b> (NOT usable against Saves):`,
                `You Spend the GRIT Cost and gain <box>20 × ESS</box> <b>HD</b>.`,
                `You can Spend from the gained HD to potentionally make the Attack Miss, you keep the remaining HD.`,
            ],
        },
        {
            type: "p",
            content: [
                `<b>Note:</b> This Ability CANNOT CRIT!`,
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
                ["Trigger", "Get Attacked"],
                ["Cooldown", "1 Minute (20 Rounds)"],
                ["Range", "Self"],
                ["GRIT Cost", "4 × ESS"],
                ["TEMP-HP Gain", "12 × ESS"],
                ["HD Gain", "20 × ESS"],
            ],
        },
    ],
}