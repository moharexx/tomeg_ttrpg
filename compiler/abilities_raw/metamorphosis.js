module.exports = {
    name: "Metamorphosis",
    category: "meta",
    type: [
        "Spell",
    ],
    reqs_short: [
        "2000 Total XP",
    ],
    reqs_full: [
        "2000 Total XP",
    ],
    tags: [
        "Change +",
        "Action Cost + | Fate Cost +",
    ],
    unlock_cost: 0,
    description: [
        {
            type: "p",
            content: [
                `You change or enhance a Parent Ability, or Attack in some way(s).`,
            ],
        },
        {
            type: "list",
            content: [
                `<b>Damage Type Change</b> (Bonus-Action | 1 Fate):`,
                `Physical: <box>Bludgeoning | Slashing | Piercing</box>`,
                `Heat`,
                `Cold`,
                `Bio`,
                `Demat`,
                `Thunder`,
                `Psychic`,
            ],
        },
        {
            type: "list",
            content: [
                `<b>Damage Type Change</b> (Main-Action | 2 Fate):`,
                `Electricity`,
                `Radiant`,
                `Necrotic`,
                `Healing | Shielding | BUFFER`,
            ],
        },
        {
            type: "list",
            content: [
                `<b>Special:</b>`,
                `The Ability or Attack adds the <b>Soaked Effect</b>. (Bonus-Action | 1 Fate)`,
                `The Ability or Attack has <a href="../main/mechanics.html#executing" target="_blank">Executing</a>. (Main-Action + Bonus | 3 Fate)`,
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
                ["Type", "Spell"],
                ["(AOE, Range, ESS) Multiplier", "(Cast Time Jumps) + 1"],
            ],
        },
    ],
}