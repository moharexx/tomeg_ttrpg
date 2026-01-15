module.exports = {
    name: "Healing Aura",
    category: "stance",
    type: [
        "Spell",
    ],
    reqs_short: [
        "10 Anima | 20 Transmutation | 50 Enchantment",
    ],
    reqs_full: [
        "<b>Spell:</b> (50 INT | 20 WILL | 20 EGO), (10 Anima | 20 Transmutation | 50 Enchantment)",
    ],
    tags: [
        "Defense",
        "Healing, Static Sphere AOE",
        "Main-Action + Bonus Action / Main-Action + Bonus Action",
    ],
    unlock_cost: 20,
    description: [
        {
            type: "p",
            content: [
                "When using this Ability, you are put in <b>Healing Aura Stance.</b>",
                "This is a Static Sphere AOE, eminating from the Caster, Stopped by Solid Objects.",
                "The Caster chooses from Willing Entities in the AOE to be Targets.",
                "While in <b>Healing Aura Stance</b>, at the Start of Your Turns, Heal Targets <box>2 × ESS</box>",
                "When this Stance is Triggered, Heal Targets <box>6 × ESS</box>",
            ],
        },
        {
            type: "dots",
            content: [
                "The Caster cannot Target Itself with this Ability",
                "This does not regrow lost body parts.",
                "The Healing only works on Biological, Non-Undead Targets.",
                "Yes, you can heal a corpse. No, it won't revive them.",
            ],
        },
        {
            type: "p",
            content: [
                "The Stance Breaks only when entering another Stance.",
                "This Ability cannot CRIT!",
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
                ["Cast Time", "Main-Action + Bonus Action"],
                ["Stance Trigger", "Main-Action + Bonus Action"],
                ["Radius", "CS^(1/3)"],
                ["Turn Start Healing", "2 × ESS"],
                ["Trigger Healing", "6 × ESS"],
            ],
        },
    ],
}