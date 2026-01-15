module.exports = {
    name: "Call Lightning",
    category: "stance",
    type: [
        "Spell",
    ],
    reqs_short: [
        "10 Evocation | 20 Conjuration | 50 Transmutation",
    ],
    reqs_full: [
        "<b>Spell:</b> (20 INT | 20 WILL | 20 EGO), (10 Evocation | 20 Conjuration | 50 Transmutation)",
    ],
    tags: [
        "Offense",
        "Electric Damage, Flow Sphere AOE",
        "Main-Action + Bonus-Action / Free-Action",
    ],
    unlock_cost: 20,
    description: [
        {
            type: "p",
            content: [
                "When using this Ability, you are put in <b>Call Lightning Stance.</b>",
                "For each time you Enter this Stance, you gain a 1 Stack.",
                "The Range of this Stance Increases with Stacks.",
                "The Lightning Bolts' Starting Positions can be offset by up to <box>(10 × Stacks) × CS^(1/3)</box> from the Caster, to a Pinpointed location.",
                "<b>Max Stacks Count:</b> <box>3</box>",
            ],
        },
        {
            type: "list",
            content: [
                "<b>Multiple Lightning:</b>",
                "Call down <box>1 + Stacks</box> Seperate Lightning Bolts onto Different Targets.",
                "Each Lightning is it's own Ranged Attack, Roll only a Single Attack for all of them, but seperate Damage.",
                "Using On-Attacks will Apply it to All Lightning Bolts made this way.",
                "Damage: <box>(2d6 × ESS) Electric</box>",
            ],
        },
        {
            type: "list",
            content: [
                "<b>Single Lightning:</b>",
                "Call down a Single Strong Bolt of Lightning, this is a Flow Sphere AOE Ranged Attack.",
                "Damage: <box>(2d6 × ESS) + (2 × Stacks × ESS) Electric</box>",
                "Radius: <box>ESS^(1/3)</box>"
            ],
        },
        {
            type: "list",
            content: [
                "<b>Electric Effect:</b>",
                `Against Soaked, or <a href="../main/mechanics.html#conditions" target="_blank">Airborn</a> Targets this Ability Deals <a href="../main/mechanics.html#max_value" target="_blank">Max-Damage.</a>`,
            ],
        },
        {
            type: "p",
            content: [
                "The Stance Breaks when: <box>Using Abilities, Moving, HD Decrease, Taking Damage</box>",
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
                ["Stance Trigger", "Free-Action at your Next Turn."],
                ["Range", "(10 × Stacks) × CS^(1/3)"],
            ],
        },
    ],
}