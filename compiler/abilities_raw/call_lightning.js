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
        "<b>Spell:</b> 20 CS, (10 Evocation | 20 Conjuration | 50 Transmutation)",
    ],
    tags: [
        "Offense",
        "Ranged, Flow Sphere AOE, Electric Damage",
        "Main-Action + Bonus-Action / Free-Action",
    ],
    unlock_cost: 20,
    description: [
        {
            type: "p",
            content: [
                `When using this Ability, you are put in <b>Call Lightning Stance</b>.`,
                `For each time you Enter this Stance, gain a 1 Stack.`,
                `On Trigger you shoot out the Lightning Bolts, their Starting Positions can be offset by up to the Ability's Range, to a Pinpointed location.`,
                `<b>Max Stacks Count:</b> <box>3</box>`,
            ],
        },
        {
            type: "list",
            content: [
                `<b>Multiple Lightning:</b>`,
                `Call down <box>1 + Stacks</box> Seperate Lightning Bolts onto Different Targets.`,
                `Each Bolt is its own Ranged Attack, Roll only a Single Attack, but seperate Damage.`,
                `Using an On-Attack will Apply to all Lightning Bolts.`,
                `Electric Damage: <box>2d6 × ESS</box>`,
            ],
        },
        {
            type: "list",
            content: [
                `<b>Single Lightning:</b>`,
                `Call down a Single Strong Bolt of Lightning, this is a Flow Sphere AOE Ranged Attack.`,
                `Using an On-Attack can Apply to <box>1 + Stacks</box> Targets, rather than just one.`,
                `Electric Damage: <box>(2 × Stack)d6 × ESS</box>`,
                `Radius: <box>ESS^(1/3)</box>`
            ],
        },
        {
            type: "list",
            content: [
                `<b>Electric Effect:</b>`,
                `Against Soaked or <a href="../main/mechanics.html#conditions" target="_blank">Airborn</a> Targets, this Ability Deals <a href="../main/mechanics.html#max_value" target="_blank">Max-Damage</a>.`,
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
                ["Stance Trigger", "Free-Action in your Next Turn."],
                ["Range", "(10 × Stacks) × CS^(1/3)"],
            ],
        },
    ],
}