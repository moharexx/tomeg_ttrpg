module.exports = {
    name: "River Surfing",
    category: "stance",
    type: [
        "Skill",
    ],
    reqs_short: [
        " Evocation | Conjuration | Enchantment",
    ],
    reqs_full: [
        "(20 INT | 20 WILL | 20 EGO), (20 Conjuration | 50 Enchantment | 200 Evocation)",
    ],
    tags: [
        "Utility",
        "Physical Damage, Mobility",
        "Main-Action + Bonus-Action / Bonus-Action",
    ],
    unlock_cost: 20,
    description: [
        {
            type: "p",
            content: [
                "When using this Ability, you are put in River Surfing Stance.",
                "While in River Surfing Stance, you cannot use the regular Movement-Action.",
                "Once on your Turns, including the first Turn of the Stance, as a Free-Action you can Surf <box>3 × CS^(1/3)</box> meters.",
                "This Stance has two triggers, you can choose one from below.",
                `If the caster gets Damaged while in River Surfing Stance, the Caster will get the <a href="../main/mechanics.html#conditions">Prone Condition.</a>`,
            ],
        },
        {
            type: "list",
            content: [
                "Barrel Roll:",
                "You move <box>6 × CS^(1/3)</box> Amount, this Movement does not Activate Reactive Abilities, or Trigger Stances.",
                "When using this Stance Trigger, you cannot use the Free-Action Surf provided by the Stance.",
            ],
        },
        {
            type: "list",
            content: [
                "Board Kick:",
                "You make an Attack against an Entity within <box>6 × CS^(1/3)</box>",
                "When using this Stance Trigger, you cannot use the Free-Action Surf provided by the Stance.",
                "Wet Effect: On Dealing Damage, the Target gets Wet with Water.",
            ],
        },
        {
            type: "p",
            content: [
                "The Stance Breaks when: <box>Taking Damage</box>",
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
                ["Stance Trigger", "Bonus-Action at your next Turn."],
                ["Board Speed", "3 × CS^(1/3)"],
                ["Barrel Roll", "6 × CS^(1/3)"],
                ["Borad Kick Range", "6 × CS^(1/3)"],
                ["Damage", "(1d8 × ESS) Physical"],
            ],
        },
    ],
}