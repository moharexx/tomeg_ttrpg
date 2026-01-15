module.exports = {
    name: "Revivify",
    category: "active",
    type: [
        "Spell",
    ],
    reqs_short: [
        "Transmutation | Enchantment | Anima",
    ],
    reqs_full: [
        "(50 INT | 20 WILL | 20 EGO), (20 Anima | 50 Enchantment | 200 Transmutation)",
    ],
    tags: [
        "Defense",
        "Buff, Touch",
        "Main-Action",
    ],
    unlock_cost: 20,
    description: [
        {
            type: "p",
            content: [
                "When used, you Touch an Entity that has lost it's Soul within the last 1 Minute (20 Rounds), and force the Soul back into the Body.",
                "If the Body cannot host the Soul because it is too damaged, it will still return and stay for 1 Minute (20 Rounds).",
                "If there is no mostly intact bigger part of the original Body (The Body is too damaged), then the Ability Fails.",
                "If the Soul is too far away or locked by something the Ability Fails.",
                "If the Body is in a condition which would make the Soul leave, then after the Ability's Duration the Soul is ejected again.",
                "If the Soul does not want to Return, it is entitled to a Soul Save, on a Success the Ability Fails.",
            ],
        },
        {
            type: "p",
            content: [
                "If the body is split in a way that makes it hard determining which part would host the Soul, the Caster chooses.",
                "The Body must be the original Body, not even a clone will suffice.",
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
                ["Duration", "1 Minute (20 Rounds)"],
                ["Max Soul Distance", "100 × CS^(1/3)"],
                ["Soul Save", "14 × ESS"],
            ],
        },
    ],
}