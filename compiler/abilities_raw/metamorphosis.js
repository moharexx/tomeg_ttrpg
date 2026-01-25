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
    unlock_cost: 200,
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
                `<b>Damage Type Change</b> (Main-Action | 1 Fate):`,
                `Electricity`,
                `Radiant`,
                `Necrotic`,
                `Healing | BUFFER`,
            ],
        },
        {
            type: "list",
            content: [
                `<b>Special:</b>`,
                `Effect: You add an <a href="../main/mechanics.html#effects" target="_blank">Effect</a> to the Ability or Attack, this <b>Effect</b> does nothing on it's own, it's for Entity Interactions.. (Bonus-Action | 1 Fate)`,
                `Executing: The Ability or Attack has <a href="../main/mechanics.html#executing" target="_blank">Executing</a>. (Main-Action + Bonus-Action | 2 Fate)`,
                `Perfection: The Ability or Attack is <a href="../main/mechanics.html#maximized_and_minimized_values" target="_blank">Maximized</a>. (3 Fate)`,
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
            ],
        },
    ],
}