module.exports = {
    name: "Voyage (WIP)",
    category: "stance",
    type: [
        "Skill",
        "Spell",
    ],
    reqs_short: [
        "Athletics | Acrobatics",
        "Evocation | Transmutation | Enchantment",
    ],
    reqs_full: [
        "<b>Skill:</b> 1000 Athletics | 1000 Acrobatics",
        "<b>Spell:</b> 1000 Evocation | 1000 Transmutation | 1000 Enchantment",
    ],
    tags: [
        "Utility",
        "Mobility, Travel",
        "1 Minute / Continuous",
    ],
    unlock_cost: 1000,
    description: [
        {
            type: "p",
            content: [
                "When using this Ability, you are put in <b>Voyage Stance.</b>",
                "While in <b>Voyage Stance</b> you Travel, this has no directional or gravity limitations, meaning you can fly.",
                "Carrying more than <box>50 × ESS Kg</box> will Break the Stance.",
                "Kinetic energy ignores relativistic scaling, and is much lower than what it should be, this makes Deceleration very fast.",
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
                "This Stance is for Travel, and has different Speeds in different Conditions.",
                "Use the Minimum Speed when it's faster than in the Condition you're in.",
                "Calculate the <b>Viscosity Multiplier</b>, which will be denoted <b>V</b> in the table of speeds.",
                "<b>Viscosity Formula:</b> <box>(ESS × EP^(1/DP)/1e6)/(ESS + EP^(1/DP)/1e6)</box>",
                "<b>Note:</b> On lower values (below 1e20 ESS when EP is 1e85) you can just count V as equal to ESS, the difference is insignificant.",
            ],
        },
        {
            type: "table",
            full_width: "70%",
            width: ["40%", "60%"],
            content: [
                ["Condition", "Speed"],
                ["Atmosphere", "(10 × V) m/s | (30 × V) m/Round)"],
                ["Space", "(1000 × V) m/s | (3000 × V) m/Round)"],
                ["Interdimensional Void", "(10000 × V) m/s | (30000 × V) m/Round)"],
                ["Minimum Speed", "20 × ESS^(1/DP) m/s | 60 × ESS^(1/DP) m/Round"],
            ],
        },
        {
            type: "p",
            content: [
                "The Stance Breaks when: <box>Using Abilities, HD Decrease, Taking Damage</box>",
            ],
        },
        {
            type: "p",
            content: [
                "This felt like writing a fucking scientific paper...",
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
                ["Cast Time", "1 Minute (20 Rounds)"],
                ["Stance Trigger", "None"],
                ["Speed", "See Table"],
                ["Max Weight", "50 × ESS Kg"],
            ],
        },
    ],
}