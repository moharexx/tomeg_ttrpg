module.exports = {
    name: "Non-Detection",
    category: "active",
    type: [
        "Skill",
        "Spell",
    ],
    reqs_short: [
        "Stealth",
        "Enchantment | Divination | Anima",
    ],
    reqs_full: [
        "Skill: 50 Stealth",
        "Spell: (10 INT | 10 WILL | 20 EGO), (10 Enchantment | 20 Divination | 50 Anima)",
    ],
    tags: [
        "Utility, Unlock",
        "Obscurance",
        "Bonus-Action",
    ],
    unlock_cost: 10,
    description: [
        {
            type: "p",
            content: [
                "You Touch your Target, and it turns Non-Detectable to a Selected Sense.",
                "Perception based on that Sense cannot Pinpoint the Target, unless Passive Perception is at least than <box>10 × ESS</box>",
                "Using any Ability with the <b>Offense Tag</b> will Break the Non-Detection.",
                "Targets are eligable to a <b>Soul Save</b> of <box>14 × ESS</box> to not be effected.",
                "When you use this Ability as a <b>Skill</b>, it's Range is <b>Self.</b>",
            ],
        },
        {
            type: "p",
            content: [
                "When you Unlock this Ability you can choose 1 of the 10 XP Senses down below for Free.",
            ],
        },
        {
            type: "list",
            content: [
                "<b>Senses:</b>",
                "Invisibility (Sight): 10 XP",
                "Silence (Hearing): 10 XP",
                "Odorlessness (Smell): 10 XP",
                "Essence Cloak (Essence Sense): 10 XP",
                "Every other Sense in one: 20 XP",
            ],
        },
        {
            type: "list",
            content: [
                "<b>Full Non-Detection:</b>",
                "As a <b>Main-Action</b> you can apply Non-Detection to all Senses you Unlocked in this Ability, at once.",
            ],
        },
        {
            type: "p",
            content: [
                "<b>Phantom Detection</b> (50 Divination)",
                "You can designate Entities who will be able to Sense you normally.",
            ],
        },
        {
            type: "p",
            content: [
                "<b>Superior Non-Detection</b> (20 XP)",
                "Non-Detection does not Break, but it's Duration becomes Until End of Target's Next Turn.",
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
                ["Cast Time", "Bonus-Action"],
                ["Range", "Touch"],
                ["Duration", "1 Minute (20 Rounds)"],
                ["Soul Save", "14 × ESS"],
                ["Passive Perception to see", "10 × ESS"],
            ],
        },
    ],
}