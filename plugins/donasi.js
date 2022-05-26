let handler =  m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Telkomsel [082365089294]
│ • 
╰────

╭─「 Donasi • Non Pulsa 」
│ • Gopay [blm pnya]
│ • Dana [082365089294]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

export default handler
