module.exports = {
    name: "River Surfing",
    category: "stance",
    type: [
        "Spell",
    ],
    reqs_short: [
        "10 Conjuration | 20 Enchantment | 50 Evocation",
    ],
    reqs_full: [
        "<b>Spell:</b> 20 CS, (10 Conjuration | 20 Enchantment | 50 Evocation)",
    ],
    tags: [
        "Utility",
        "Ranged, Physical Damage, Mobility",
        "Main-Action + Bonus-Action / Bonus-Action",
    ],
    unlock_cost: 20,
    description: [
        {
            type: "p",
            content: [
                `When using this Ability, you are put in River Surfing Stance.`,
                `While in River Surfing Stance, you cannot use the regular Movement-Action.`,
                `Once on your Turns, including the first Turn of the Stance, as a Free-Action you can Surf <box>3 × CS^(1/3)</box> meters.`,
                `If the caster gets Damaged while in River Surfing Stance, the Caster will get the <a href="../main/mechanics.html#conditions">Prone Condition</a>.`,
                `This Stance has two triggers, you can choose one from below.`,
            ],
        },
        {
            type: "list",
            content: [
                `<b>Barrel Roll:</b>`,
                `You move <box>6 × CS^(1/3)</box> Amount, this Movement does not Activate Reactive Abilities, or Trigger Stances.`,
                `When using this Stance Trigger, you cannot use the Free-Action Surf provided by the Stance.`,
            ],
        },
        {
            type: "list",
            content: [
                `<b>Board Kick:</b>`,
                `You make an Attack against an Entity within <box>6 × CS^(1/3)</box>`,
                `When using this Stance Trigger, you cannot use the Free-Action Surf provided by the Stance.`,
                `Targets Damaged by this get the <b>Soaked Effect</b>.`,
            ],
        },
        {
            type: "list",
            content: [
                `<b>Soaked Effect:</b>`,
                `An Entity can use a <b>Main-Action</b> to Remove this Effect from themselves.`,
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
                ["Stance Trigger", "Bonus-Action in your Next Turn."],
                ["Board Speed", "3 × CS^(1/3)"],
                ["Barrel Roll", "6 × CS^(1/3)"],
                ["Board Kick Range", "6 × CS^(1/3)"],
                ["Physical Damage", "1d8 × ESS"],
            ],
        },
    ],
}