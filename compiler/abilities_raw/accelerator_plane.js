module.exports = {
    name: "Accelerator Plane",
    category: "active",
    type: [
        "Spell",
    ],
    reqs_short: [
        "5 Enchantment | 10 Transmutation | 20 Evocation",
    ],
    reqs_full: [
        "<b>Spell:</b> 10 CS, (5 Enchantment | 10 Transmutation | 20 Evocation)",
    ],
    tags: [
        "Utility",
        "Ranged, Mobility, To-Hit, Buff",
        "Main-Action",
    ],
    unlock_cost: 10,
    description: [
        {
            type: "p",
            content: [
                `Place down a transparent Plane on a Pinpointed Position, which accelerates whatever goes through it.`,
                `The Plane is anchored, stays in the air, can clip through things, and works both ways.`,
                `Any Attack which moves through the Plane gains <box>4 × ESS</box> To-Hit Bonus.`,
                `Any Movement, including Mobility Abilities, which move through the Plane are extended by up to <box>4 × ESS^(1/3)</box> meters.`,
                `If there are multiple Accelerator Planes, only the strongest effects its Target.`,
                `An Entity can only gain the Mobility Bonus once, refreshing at the Start of their Turns.`,
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
                ["Cast Time", "Main-Action"],
                ["Range", "5 × CS^(1/3)"],
                ["Plane Side Length", "4 × ESS^(1/3)"],
                ["To-Hit Bonus", "4 × ESS"],
                ["Mobility Bonus", "4 × ESS^(1/3)"],
            ],
        },
    ],
}