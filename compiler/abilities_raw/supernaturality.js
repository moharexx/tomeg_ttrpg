module.exports = {
    name: "Supernaturality",
    category: "passive",
    type: [
        "Innate",
    ],
    reqs_short: [
        "WILL | EGO",
    ],
    reqs_full: [
        "1000 WILL | 1000 EGO",
    ],
    tags: [
        "Utility",
        "Buff",
    ],
    unlock_cost: 0,
    description: [
        {
            type: "p",
            content: [
                "Any Mastery Check can be counted as making it in a situation where it could apply.",
                "If the Target has high enough XP or Tier this will not work on them.",
            ],
        },
        {
            type: "list",
            content: [
                "Examples:",
                "Stealth: Stand in full daylight and still succeed in hiding yourself.",
                "Performance: Ask somebody a ridiculous request, which normally they would not do, but they still do it.",
                "Perception/Lore: Understand a language spoken, which you never learned.",
                "Science/Arcana: Understand a mechanism without any previous knowledge or research.",
            ],
        },
        {
            type: "p",
            content: [
                "You can Speak audibly in conditions where there is no sound, like space, and your words ignore any language (and memetic) barriers.",
                "Your words can travel faster and farther than the physical medium would allow, this means it could be heard kilometers away.",
                "Additionally every word you say can encode <box>ESS | Performance | Divination</box> times the meaning.",
                "<b>Example:</b> Make me a sandwich. -> Encodes exactly what kind of sandwich, when, why, how, ect..."
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
                ["Max Target XP", "WILL | EGO"],
                ["Max Target Tier", "(WILL | EGO) / 100"],
            ],
        },
    ],
}