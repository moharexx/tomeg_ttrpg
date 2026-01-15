module.exports = {
    name: "Teleport (WIP)",
    category: "active",
    type: [
        "Spell",
    ],
    reqs_short: [
        "20 Conjuration | 20 Transmutation",
    ],
    reqs_full: [
        "<b>Spell:</b> (50 INT | 50 WILL | 50 EGO), (20 Conjuration | 20 Transmutation)",
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
                "After Cast you and your designated Targets Teleport up to great distances.",
                "After the Cast Time you choose Targets inside the Radius, collectively not weighing more than <box>250 × ESS Kg</box>",
                "You may exclude Yourself from the Target List.",
                "Unwilling Targets can make a <b>Soul Save</b> of <box>14 × ESS</box> to not be Teleported.",
            ],
        },
        {
            type: "p",
            content: [
                "The Cast Time of this Ability can range from 1 Minute (20 Rounds) to a full day (28800 Rounds), this effects the Teleport Distance.",
                "When you Cast Teleport you can specify a vague description where to land.",
                `<b>Example:</b> "I want to be in a busy street!" -> Teleport to a highly populated street.`,
                "When there is nothing matching your description, the Teleport Fails.",
            ],
        },
        {
            type: "p",
            content: [
                "The Omniverse has a constant called <b>Essence Permeability</b>, will be shortened to <b>EP.</b>",
                "EP is the Essence Density Cap of the Omniverse, meaning an Entity cannot have more Total XP than EP.",
                "EP is 1e85, but the GM can specify otherwise.",
                "EP affects changes the Max Total XP, Travel Abilities, Hyper-Entity Threshold, Reset Essence Artifacts, and a few other things.",
            ],
        },
        {
            type: "p",
            content: [
                "The other constant is <b>Dimensional Permeability</b>, will be shortened to <b>DP.</b>",
                "DP affects every distance related thing's scaling, from movement to ranges to AOEs.",
                "DP is 3, but the GM can specify otherwise, though I really <b>REALLY</b> don't recommend changing it.",
                "Changing DP means changing ALL dimensional scaling where it was ^(1/3) to ^(1/DP), and also changing the Character Sheet to reflect that.",
            ],
        },
        {
            type: "p",
            content: [
                "For Distance use the Simplified Formula when Cast below <box>1e20 ESS</box>, assuming <box>1e85 EP</box>",
                "Use the Minimum Distance when the Full Formula is weaker.",
            ],
        },
        {
            type: "table",
            full_width: "70%",
            width: ["40%", "60%"],
            content: [
                ["Formula", "Distance (Km)"],
                ["Full Formula", "0.5 × (Cast Time in Seconds | 3 × Cast Time in Rounds) × (ESS × EP^(1/DP)/1e6)/(ESS + EP^(1/DP)/1e6)"],
                ["Simplified Formula (<1e20)", "0.5 × (Cast Time in Seconds | 3 × Cast Time in Rounds) × ESS"],
                ["Minimum Distance", "0.5 × ESS^(1/DP)"],
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
                ["Teleport Distance", "See Table"],
                ["Soul Save", "14 × ESS"],
                ["Max Weight", "250 × ESS Kg"],
            ],
        },
    ],
}