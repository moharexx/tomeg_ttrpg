module.exports = {
    name: "Earth Block",
    category: "active",
    type: [
        "Spell",
    ],
    reqs_short: [
        "5 Conjuration | 10 Transmutation",
    ],
    reqs_full: [
        "<b>Spell:</b> (10 INT | 10 WILL | 10 EGO), (5 Conjuration | 10 Transmutation)",
    ],
    tags: [
        "Defense, Utility, Unlock",
        "Negation, Static Cube AOE",
        "Main-Action + Bonus-Action",
    ],
    unlock_cost: 10,
    description: [
        {
            type: "list",
            content: [
                "You create Blocks made of Earth, or even Metal at higher levels.",
                "When used, you can create a Block Pieces.",
                "The Block Pieces are 1m<sup>3</sup>, and must be connected.",
                "You can Stack Block Pieces into a singular piece, this consumes more Block Pieces but creates a stronger piece.",
                "<b>Max Stack:</b> <box>CS / 10</box>, to a Min of 1.",
            ],
        },
        {
            type: "list",
            content: [
                "<b>Blocks Materials:</b>",
                "As you Stack more Blocks Pieces, they become harder and stronger, and so their material changes to indicate this hardness.",
                "Earth: 1+ Stacks",
                "Stone: 5+ Stacks",
                "Metal (iron or lead): 25+ Stacks",
            ],
        },
        {
            type: "list",
            content: [
                "<b>Detached</b> (50 Conjuration):",
                "The Blocks Pieces don't need to be connected.",
            ],
        },
        {
            type: "list",
            content: [
                "<b>Finesse</b> (50 Transmutation):",
                "You can shape the Blocks in whatever fashion you desire (such as statues, cups, chairs, tables).",
            ],
        },
        {
            type: "list",
            content: [
                "<b>Potency Boost:</b>",
                `For each 2 points of <a href="../main/mechanics.html#potency" target="_blank">Potency</a> you can have +1 Block Piece.`,
                `As an instantaneous effect, the Potency used to create more Block Pieces doesn't decay after the 1 Minute (20 Rounds) mark.`,
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
                ["Cast Time", "Main-Action + Bonus-Action"],
                ["Range", "5 × CS^(1/3)"],
                ["Number of Blocks Pieces", "ESS"],
                ["Blocks Piece Health", "100 × Stack"],
                ["Armor VS All", "5 × Stack"],
            ],
        },
    ],
}