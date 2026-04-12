module.exports = {
    name: "Twin",
    category: "meta",
    type: [
        "Any",
    ],
    reqs_short: [
        "Total XP",
    ],
    reqs_full: [
        "100 Total XP",
    ],
    tags: [
        "Action +",
        "Resource Cost +",
    ],
    unlock_cost: 20,
    description: [
        {
            type: "p",
            content: [
                `You use some Resource to Twin an Ability, literally casting it twice.`,
                `The second Cast uses the same Dices you Rolled as the first, no need to reroll.`,
                `The Twinned Ability retains all Meta-Abilities, and On-Attacks copy from one to another.`,
                `The <box>Action ⟶ Resource Cost</box> to Twin an Ability is determined BEFORE applying other Meta-Abilities. Go ham, friend.`,
            ],
        },
        {
            type: "p",
            content: [
                `Targets (including yourself) CANNOT be affected by both Casts of the Twinned Ability at once!`,
                `This means you CANNOT Attack, Heal, Buff, and all that, the same Target twice.`,
                `Even if it's 2 AOEs, which overlap, it Targets only once.`,
            ],
        },
        {
            type: "p",
            content: [
                `You can Twin On-Attacks, in that case, till the End of your Turn you can use the Twinned copy.`,
                `The restriction on not affecting the same Target twice still holds!`,
                `You cannot Twin Stances!`,
            ],
        },
        {
            type: "list",
            content: [
                `<b>Twinning Skill Type Abilities:</b>`,
                `Per Parent Ability Bonus-Action: <box>(2 GRIT | 4 HD) × ESS</box>`,
                `Per Parent Ability Main-Action: <box>(4 GRIT | 8 HD) × ESS</box>`,
            ],
        },
        {
            type: "list",
            content: [
                `<b>Twinning Spell Type Abilities:</b>`,
                `Per Parent Ability Bonus-Action: <box>2 SP × ESS</box>`,
                `Per Parent Ability Main-Action: <box>4 SP × ESS</box>`,
            ],
        },
        {
            type: "list",
            content: [
                `<b>Twinning Innate Type Abilities:</b>`,
                `Per Parent Ability Bonus-Action: <box>4 REST-HP × ESS</box>`,
                `Per Parent Ability Main-Action: <box>8 REST-HP × ESS</box>`,
            ],
        },
        {
            type: "list",
            content: [
                `<b>Extra Twinning Rules:</b>`,
                `You can choose to spend a Bonus-Action in place of the Resource Cost.`,
                `You can choose to spend a Main-Action in place of the Resource Cost, this will <b>Triple Cast!</b>`,
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