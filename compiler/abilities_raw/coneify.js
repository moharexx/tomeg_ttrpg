module.exports = {
    name: "Coneify (Shape WIP)",
    category: "meta",
    type: [
        "Any",
    ],
    reqs_short: [
        "500 Total XP",
    ],
    reqs_full: [
        "500 Total XP",
    ],
    tags: [
        "AOE +",
        "AOE -",
    ],
    unlock_cost: 50,
    description: [
        {
            type: "p",
            content: [
                "You Change an <b>AOE</b> into a <b>Cone AOE</b>, the new Cone AOE will retain it's <b>Flow Type.</b>",
                "Depending on the <b>AOE</b> you Change into a Cone, the <b>Cone Length</b> will Differ.",
                "The Cone's Spread is <box>90° (1 Forward = +2 Width)</box>",
                "The Cone starts out from the Caster.",
            ],
        },
        {
            type: "list",
            content: [
                "<b>AOE to Cone Length Table:</b>",
                "Sphere -> Cone Length = 2 × Radius",
                "Line -> Cone Length = Length / 10",
                "Cylinder | Disk -> Cone Length = Height / 5 | 2 × Radius",
                "Cube -> Cone Length = Side Length",
            ],
        },
        {
            type: "p",
            content: [
                "You can Change a Cone's <b>Spread</b>, the Cone's <b>Length</b> will be Multiplied by some amount for each <b>Jump</b>",
                "Increasing the Spread counts as -1 Jump, and Decreasing the Spread counts as +1 Jump, Jumps can be a Negative Value.",
                "You can cut off from the Start of the Cone, and bring it's start closer to the Caster by the same amount, effectively Truncating the Cone into a Frustum.",
                "You can <b>Flip</b> the Cone, to where it starts wide and shrinks into a point at the end.",
            ],
        },
        {
            type: "list",
            content: [
                "Cone Length and Spread Table:",
                "<box>30° (~3 Forward = +2 Width)</box>",
                "<box>60° (~2 Forward = +2 Width)</box>",
                "<box>90° (~1 Forward = +2 Width)</box>",
                "<box>120° (~1 Forward = +3 Width)</box>",
                "<box>180° (Half Sphere)</box>",
                "Overridden 30° -> 180° Length Multiplier: 0.1",
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
                ["Cone Length Multiplier", "1 + (0.25 × Jumps)"],
            ],
        },
    ],
}