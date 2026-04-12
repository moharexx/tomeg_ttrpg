module.exports = {
    name: "Computer Mind",
    category: "passive",
    type: [
        "Innate",
    ],
    reqs_short: [
        "10 INT | 10 Divination",
    ],
    reqs_full: [
        "<b>Innate:</b> 10 INT | 10 Divination",
    ],
    tags: [
        "Utility",
        "Information",
    ],
    unlock_cost: 5,
    description: [
        {
            type: "p",
            content: [
                `Part of your mind works with computer precision and speed.`,
                `You can store data, and retrieve it, this is fully lossless, making you remember stored things perfectly.`,
                `You can store up to <box>(INT | Divination) GB</box> of data this way.`,
                `You can also run programs, with a Clock Speed of <box>(INT | Divination) MH</box>`,
            ],
        },
        {
            type: "p",
            content: [
                `<b>Note:</b> To reach the processing power of 1 core of a modern computer (as of 2026), you need <box>~5000 (INT | Divination)</box>`,
                `No, I will not detail memory speed, and its structure, just assume there is some faster, and more slower, like in regular computers.`,
                `Use the <a href="https://en.wikipedia.org/wiki/X86_instruction_listings" target="_blank">x86</a> or <a href="https://developer.arm.com/documentation/dui0231/b/arm-instruction-reference" target="_blank">ARM</a> architecture, or make up whatever fantasy architecture, I don't care.`,
            ],
        },
    ],
}