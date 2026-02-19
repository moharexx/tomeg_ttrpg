module.exports = {
    name: "Control",
    category: "meta",
    type: [
        "Any",
    ],
    reqs_short: [
        "100 Total XP",
    ],
    reqs_full: [
        "100 Total XP",
    ],
    tags: [
        "Control +",
    ],
    unlock_cost: 5,
    description: [
        {
            type: "p",
            content: [
                "Before using an Ability, you can set its Maximum Values and Remove select Effects.",
            ],
        },
        {
            type: "list",
            content: [
                "<b>Toggle</b> (5 XP):",
                "You can Toggle On/Off your Abilities.",
                "This can only be done to Abilities with a Duration, or Continuous Stances.",
                "When you Toggle Off a Continuous Stance, you are still count as being in that Stance, and it can still be Broken.",
                "Every one of your Abilities can be Toggled On/Off as a <b>Free-Action</b>, once every Turn.",
                "Any multiple Toggles on any single Ability costs a <b>Bonus-Action.</b>",
            ],
        },
        {
            type: "list",
            content: [
                "<b>Examples:</b>",
                "Set a 2d6 Damage Attack's Max Damage to 1, therefore Rolling 7 Damage will still only do 1.",
                "Make Water Abilities not inflict the Soaked Effect.",
                "Toggle the Barrier Dome Stance. (Requires Toggle Unlock)",
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
                ["Type", "Any"],
            ],
        },
    ],
}