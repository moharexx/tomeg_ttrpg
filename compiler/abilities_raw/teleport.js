module.exports = {
    name: "Teleport",
    category: "active",
    type: [
        "Spell",
    ],
    reqs_short: [
        "50 CS, (20 Transmutation | 50 Conjuration | 200 Evocation)",
    ],
    reqs_full: [
        "<b>Spell:</b> 50 CS, (20 Transmutation | 50 Conjuration | 200 Evocation)",
    ],
    tags: [
        "Utility",
        "Mobility, Travel",
        "Variable",
    ],
    unlock_cost: 50,
    description: [
        {
            type: "p",
            content: [
                `After Cast you and your designated Targets Teleport great distances.`,
                `After the Cast Time you choose Targets inside the Radius, collectively not weighing more than <box>250 × ESS Kg</box>`,
                `You may exclude Yourself from the Target List.`,
                `Unwilling Targets can make a <b>Soul Save</b> of <box>14 × ESS</box> to not be Teleported.`,
            ],
        },
        {
            type: "p",
            content: [
                `The Cast Time of this Ability can range from 1 Minute (20 Rounds) to a full day (28800 Rounds), this effects the Teleport Distance.`,
                `When you Cast Teleport you can specify a vague description where to land.`,
                `<b>Example:</b> "I want to be in a busy street!" -> Teleport to a highly populated street.`,
                `When there is nothing matching your description, the Teleport Fails.`,
            ],
        },
        {
            type: "p",
            content: [
                `This Ability's Distance, like other Travel Abilities, scale linearly, and don't have a cube root in them.`,
                `Travel Abilities have an Effective ESS Cap on their Distance related Stats.`,
                `This Cap is based on the Omniverse's Essence Permeability (EP) and Dimensional Permeability (DP).`,
                `<b>Effective Essence Cap on Teleport Distance:<b> <box>(EP)^(1/DP)</box> (<b>~2e28</b> assuming EP is 1e85 and DP is 3)`,
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
                ["Minimum Cast Time", "1 Minute (20 Rounds)"],
                ["Maximum Cast Time", "1 Day (28800 Rounds)"],
                ["Teleport Radius", "CS^(1/3)"],
                ["Teleport Distance", "(100 × ESS × Cast Time in Seconds) meters"],
                ["Soul Save", "14 × ESS"],
                ["Max Weight", "250 × ESS Kg"],
            ],
        },
    ],
}