module.exports = {
    name: "Adam's Chance",
    category: "reactive",
    type: [
        "Innate",
        "Spell",
    ],
    reqs_short: [
        "200 WILL | 200 EGO",
        "20 Enchantment | 50 Divination | 200 Anima",
    ],
    reqs_full: [
        "<b>Innate:</b> 200 WILL | 200 EGO",
        "<b>Spell:</b> (200 INT | 50 WILL | 50 EGO), (20 Enchantment | 50 Divination | 200 Anima)",
    ],
    tags: [
        "Utility, Cooldown",
        "Self, Buff",
        "Free-Action",
    ],
    unlock_cost: 50,
    description: [
        {
            type: "p",
            content: [
                "When used, you can Reroll Any One Dice, on an Action you did, and choose between the two Rolled values.",
                "This Ability cannot Reroll the d10 Check itself, only Damage, Healing, ect...",
                "The ESS this Ability must be Cast at is equal to the Ability it is used on, or the Tier of the Armament used.",
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
                ["Cast Time", "Free-Action"],
                ["Trigger", "Use an Action"],
                ["Cooldown", "Short-Rest"],
                ["Range", "Self"]
            ],
        },
    ],
}