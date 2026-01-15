module.exports = {
    name: "Demon's Vigor",
    category: "passive",
    type: [
        "Innate",
    ],
    reqs_short: [
        "(50 VIT, 50 EGO) | Be a Demon",
    ],
    reqs_full: [
        "<b>Innate:</b> (50 VIT, 50 EGO) | Be a Demon",
    ],
    tags: [
        "Resource",
        "REST-HP",
    ],
    unlock_cost: 0,
    description: [
        {
            type: "p",
            content: [
                "Your Maximum REST-HP is Increased at a Cost.",
                "Your Max REST-HP is Increased by <box>20 × ESS</box> but gain <box>6 × ESS</box> Weakness to Radiant Damage",
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
                ["Increased Max REST-HP", "20 × ESS"],
                ["Negative Radiant Armor", "6 × ESS"],
            ],
        },
    ],
}