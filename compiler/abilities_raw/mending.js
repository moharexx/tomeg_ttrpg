module.exports = {
    name: "Mending",
    category: "active",
    type: [
        "Spell",
    ],
    reqs_short: [
        "5 Transmutation | 10 Conjuration | 20 Enchantment",
    ],
    reqs_full: [
        "<b>Spell:</b> 5 CS, (5 Transmutation | 10 Conjuration | 20 Enchantment)",
    ],
    tags: [
        "Defense, Utility, Unlock",
        "Healing",
        "Main-Action",
    ],
    unlock_cost: 5,
    description: [
        {
            type: "p",
            content: [
                "When using this Ability, you can mend Objects, molding and shaping them, making and breaking bonds.",
                "The primary use is to Heal or Damage Objects, the Damage Type is Demat.",
                "This can also be used to tinker with Objects, like merging ropes, ect... Be creative!",
            ],
        },
        {
            type: "p",
            content: [
                "Mending works on Construct Type Entities.",
                "Mending doesn't Conjure new material!",
            ],
        },
        {
            type: "list",
            content: [
                "<b>Conjure Component</b> (20 Conjuration):",
                "Mending can now Conjure new Material.",
                "No exotic materials! Limitations up to GM. (No free money and nuclear weapons)",
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
                ["Range", "Touch"],
                ["Mending", "(1d4 + 4) × ESS"],
                ["Demat-Pen", "10 × ESS"],
            ],
        },
    ],
}