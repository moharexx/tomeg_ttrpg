module.exports = {
    name: "Ferral Bloodlust",
    category: "stance",
    type: [
        "Skill",
    ],
    reqs_short: [
        "20 Martial Arts | 50 Melee Weapon",
    ],
    reqs_full: [
        "<b>Skill:</b> 20 Martial Arts | 50 Melee Weapon",
    ],
    tags: [
        "Offense",
        "Physical Damage, Healing, Mobility, Executing",
        "Main-Action / Bonus-Action",
    ],
    unlock_cost: 20,
    description: [
        {
            type: "p",
            content: [
                "When using this Ability, you are put in <b>Ferral Bloodlust Stance.</b>",
                "When the Stance is Triggered, you Dash and do an Attack to the First Target in Line.",
            ],
        },
        {
            type: "dots",
            content: [
                "You Heal yourself equal to Post-Mitigation Damage Dealt.",
                `This Ability has <a href="../main/mechanics.html#executing" target="_blank">Executing.</a>`,
                "This Ability deals double Damage against Targets With TEMP-HP.",
            ],
        },
        {
            type: "p",
            content: [
                "The Stance Breaks when: <box>Using Abilities, Moving, HD Decrease</box>",
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
                ["Stance Trigger", "Bonus-Action at Your Next Turn"],
                ["Max Range", "MS"],
                ["Damage", "(1d12 × ESS) Physical"],
            ],
        },
    ],
}