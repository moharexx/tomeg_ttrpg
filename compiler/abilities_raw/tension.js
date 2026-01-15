module.exports = {
    name: "Tension",
    category: "stance",
    type: [
        "Skill",
    ],
    reqs_short: [
        "200 Melee Weapon | 200 Martial Arts",
    ],
    reqs_full: [
        "<b>Skill:</b> 200 Melee Weapon | 200 Martial Arts",
    ],
    tags: [
        "Offense, Defense",
        "Weapon Damage, HD",
        "Main-Action + Bonus-Action / Continuous",
    ],
    unlock_cost: 200,
    description: [
        {
            type: "p",
            content: [
                `When using this Ability, you are put in <b>Tension Stance.</b>`,
                `While in <b>Tension Stance</b> you can perform different Tricks.`,
                `If you don't have the Stacks to Spend you cannot do the Trick.`,
                `These Tricks count as Abilities, unless said otherwise.`,
                `<b>Max Stack:</b> <box>5</box>`,
            ],
        },
        {
            type: "list",
            content: [
                `<b>While in this Stance:</b>`,
                `<b>Tension Gain:</b> Negating an Attack with HD, which has a To-Hit of at least <box>5 × ESS</box> gives 1 Stack.`,
                `<b>Tension Gain's</b> To-Hit Threshold is Halfed While taking the <a href="../main/mechanics.html#defense_action" target="_blank">Defense-Action.</a>`,
                `<b>Constricting Darkness:</b> While under a <b>Darkness Effect,</b> you cannot gain Stacks with <b>Tension Gain.</b>`,
                `While in <b>Tension Stance</b> if you Take Damage, you lose 1 Stack, you cannot have less than 0 Stacks.`,
            ],
        },
        {
            type: "list",
            content: [
                `<b>Brighten</b> (Bonus-Action):`,
                `Spend 1 Stack, then emit Bright-light in a <box>5 × ESS^(1/3)</box> meter Radius and Low-Light in Double the Radius.`,
                `Entities inside the Bright and Low-Light Radius gain the <b>Light Effect</b> on a Failed <b>VIT Save</b> of <box>10 × ESS<box>`,
                `The <b>Light Effect</b> does nothing on it's own, it's for Entity Interactions, and Caster always Fails the Save.`,
                `<b>Brighten's</b> Duration is 1 Minute (20 Rounds), the <b>Light Effect</b> Ends when <b>Brighten</b> Ends.`,
            ],
        },
        {
            type: "list",
            content: [
                `<b>Graze</b> (Free-Action Reaction):`,
                `Spend 3 Stacks, If you don't have enough HD to Negate an Attack, you gain <box>15 × ESS</box> HD, which is instantly usable.`,
            ],
        },
        {
            type: "list",
            content: [
                `<b>Sword and Shield</b> (Bonus-Action):`,
                `Spend 2 Stacks, then use the <a href="../main/mechanics.html#defense_action" target="_blank">Defense-Action.</a>`,
                `For the purposes of Abilites, Shields, and other Actions you use the Defense-Action as a <b>Main-Action.</b>`,
            ],
        },
        {
            type: "list",
            content: [
                `<b>Axe</b> (Bonus-Action):`,
                `Spend 2 Stacks, then make an <a href="../main/mechanics.html#attack_action" target="_blank">Attack-Action</a> with <box>2 × ESS</box> <a href="../main/mechanics.html#potency" target="_blank">Potency.</a>`,
                `Potency spent on To-Hit and Armor-Pen is Doubled.`,
            ],
        },
        {
            type: "list",
            content: [
                `<b>Scraf</b> (Bonus-Action):`,
                `Spend 2 Stacks, then Heal <box>5 × ESS</box> an Entity you can <b>Sense</b> within <box>10 × ESS^(1/3)</box> meters.`,
            ],
        },
        {
            type: "list",
            content: [
                `<b>Ring</b> (Bonus-Action):`,
                `Spend 2 Stacks, then Target an Entity which you can <b>Pinpoint</b> within <box>10 × ESS^(1/3)</box> meters.`,
                `The Target takes <box>2d6 × ESS</box> Cold Damage on a Failed <b>VIT Save</b> of <box>10 × ESS</box>, or Half as much on a Successful one.`,
            ],
        },
                {
            type: "list",
            content: [
                `<b>TensionMax</b> (Bonus-Action):`,
                `Spend 3 Stacks, then gain 5 Stacks.`,
            ],
        },
        {
            type: "p",
            content: [
                `The Stance Breaks only when entering any other Stance.`,
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
                ["Stance Trigger", "None"],
            ],
        },
    ],
}