module.exports = {
    name: "Second Will",
    category: "reactive",
    type: [
        "Innate",
    ],
    reqs_short: [
        "WILL",
    ],
    reqs_full: [
        "200 WILL",
    ],
    tags: [
        "Utility, Cooldown",
        "Buff",
        "Free-Action",
    ],
    unlock_cost: 50,
    description: [
        {
            type: "p",
            content: [
                "When the Ability is used, you Reroll a WILL Based d10 Check, and choose between the two Rolled values.",
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
                ["Activation Requirement", "Make a WILL Based d10 Check"],
                ["Cooldown", "Short-Rest"],
            ],
        },
    ],
}