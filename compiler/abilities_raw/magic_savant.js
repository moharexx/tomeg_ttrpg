module.exports = {
    name: "Magic Savant",
    category: "passive",
    type: [
        "Innate",
    ],
    reqs_short: [
        "10 of any Magic-Mastery",
    ],
    reqs_full: [
        "<b>Innate:</b> 10 of any Magic-Mastery",
    ],
    tags: [
        "Utility",
        "Mastery, Buff",
    ],
    unlock_cost: 5,
    description: [
        {
            type: "p",
            content: [
                `Your Mastery in Magic allow you to enhance yourself in different ways.`,
                `You can assign a single unique Buff to all of your Magic-Masteries.`,
                `You cannot choose the same Buff or Magic-Mastery more than once!`,
                `After a Long-Rest you can reassign what Magic-Mastery gives what Buff.`,
            ],
        },
        {
            type: "list",
            content: [
                `<b>Reinforced Body:</b>`,
                `Your Base Max HP increases by <box>(Conjuration | Enchantment | Abjuration) / 2</box>`,
                `The new Max HP is capped at <box>Total XP / 5</box>`,
            ],
        },
        {
            type: "list",
            content: [
                `<b>Reinforced Soul:</b>`,
                `Your Base Max SP and Proxy increases by <box>(Conjuration | Abjuration | Anima) / 2</box>`,
                `The new values are both capped at <box>3 × (Total XP / 10)</box>`,
            ],
        },
        {
            type: "list",
            content: [
                `<b>Reflex Surge:</b>`,
                `Your Base Max HD increases by <box>(Evocation | Transmutation | Divination)</box>`,
                `The new Max HD cap depends on Armor Weight Class; Light <box>3 × (Total XP / 10)</box>, Medium <box>2 × (Total XP / 10)</box>, Heavy <box>(Total XP / 10)</box>`,
            ],
        },
                {
            type: "list",
            content: [
                `<b>Precognition:</b>`,
                `Your Base INIT increases by <box>(Evocation | Divination | Anima) / 2</box>`,
                `The new INIT is capped at <box>Total XP / 10</box>`,
            ],
        },
        {
            type: "list",
            content: [
                `<b>Swift Movement:</b>`,
                `Your Base MS increases by <box>(Evocation | Transmutation | Enchantment)^(1/3)</box>`,
                `The new MS is capped at <box>2 × (Total XP / 10)^(1/3)</box>`,
            ],
        },
        {
            type: "list",
            content: [
                `<b>Fortified Firewall:</b>`,
                `One of your Save's Modifier increases by <box>(Abjuration | Divination | Anima) / 2</box>`,
                `The new Modifier is capped at <box>Total XP / 20</box>`,
            ],
        },
        {
            type: "list",
            content: [
                `<b>Life Reserve:</b>`,
                `Your Base REST-HP increases by<box>(Transmutation | Conjuration | Enchantment) × 2</box>`,
                `The new REST-HP is capped at <box>4 × (Total XP / 10)</box>`,
            ],
        },
    ],
}