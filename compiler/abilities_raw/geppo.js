module.exports = {
    name: "Geppo",
    category: "passive",
    type: [
        "Skill",
    ],
    reqs_short: [
        "20 Athletics | 20 Acrobatics | 20 Martial Arts",
    ],
    reqs_full: [
        "<b>Skill:</b> 20 Athletics | 20 Acrobatics | 20 Martial Arts",
    ],
    tags: [
        "Utility",
        "Mobility",
    ],
    unlock_cost: 20,
    description: [
        {
            type: "p",
            content: [
                `You can pseudo Fly by jumping midair, allowing you to use movement midair.`,
                `You can do the <b>Move-Action</b> and any other Movement in any direction, like up or down.`,
                `You can choose to not Fall at the End of your Turn, remaining in the air.`,
            ],
        },
        {
            type: "p",
            content: [
                `At the Start of your Turns you must decide if you want to use Geppo, this is a <b>Free-Action</b>.`,
                `You can use Geppo up to <box>(Athletics | Acrobatics | Martial Arts) / 10</box> times.`,
                `Geppo uses are restocked when the <b>Airborne Condition</b> Ends on you.`,
            ],
        },
        {
            type: "p",
            content: [
                `You have the <a href="../main/mechanics.html#conditions" target="_blank">Airborne Condition</a> when Flying with this Ability.`,
                `You can still get the <b>Prone Condition</b>, imagined as a loss of balance.`,
                `If you have a Movement Impairing Condition you cannot use this Ability.`,
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
                ["Duration", "Till Start of Your Next Turn."],
                ["Max Stocks", "(Athletics | Acrobatics | Martial Arts) / 10"],
            ],
        },
    ],
}