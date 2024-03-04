const fs = require('fs')
const chalk = require('chalk')

// APIKEY OPEN AI
global.jeropenai  = "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" // ISI APIKEY LU

// API , BAGIAN SINI JAN UBAH SAMA SEKALI \\
global.APIs = {
	alfa: 'https://api.zeeoneofc.my.id', // GAK USAH UBAH LOL
	fgmods: 'https://api.fgmods.xyz', // JAN UBAH
	btc: 'https://api.botcahx.eu.org' // JAN UBAH
}

// APIKEY \\
global.APIKeys = {
	'https://api.fgmods.xyz': 'S8mje6wW', // FREE LIMIT 100
	'https://api.zeeoneofc.my.id': '2v3qsqmmSc4sogT', // ISI APIKEY LU
	'https://api.botcahx.eu.org': 'MuIAhsXE' // Isi key lu
}

global.btc = 'V36'// KEY LU

global.namabot = "Cn-Botz" // UBAH JADI NAMA LU
global.namaowner = "CnC" // NAMA OWNER
global.footer_text = "CnC" + namabot // NAMA BOT
global.pp_bot = fs.readFileSync("./image/allmenubot.jpg") // FOTO BOT MAX 50KB BIAR GA DELAY
global.qris = fs.readFileSync("./image/qris.jpg") // FOTO QRIS MAX 50KB BIAR GA DELLAY
global.owner = ['62858628395790', '62858628395790'] // UBAH NOMOR YANG MAU DI JADIKAN OWNER
// - \\
global.sessionName = 'session' // GAK USAH UBAH
global.prefa = ['', '!', '.', '🐦', '🐤', '🗿'] // GAK USAH UBAH
global.sewabot = ("SEWA CHAT OWNER") // ISI HARGA SEWA BOT LU
global.grubbot = (`*INI KAK LINK GRUB NYA*\n\nhttps://chat.whatsapp.com/DaFIV489FMzL1TCX4tUEa7`) // GANTI LINK GRUB BOT LU \\
// -- \\
// FALSE OR TRUE \\
// TRUE = AKTIF
// FALSE = MATI

global.autoTyping = false // BEBAS
global.welcome = false // KALO MAU AUTO WELCOME UBAH JADI true
global.left = false // KALO MAU AUTO LEFT UBAH JADI true
global.anticall = true // TRUE AJA
global.autoblok212 = false // BEBAS
global.autoread = false // BEBAS
global.autorespon = false // BEBAS
global.onlyprem = true // BEBAS
global.onlygrub = true // BEBAS
global.onlypc = false // BEBAS
global.antispam = false // TRUE KALO MAU GA DI SPAM

// - \\
// PEMISAH \\
global.packname = '© CnC' //sticker wm ubah
global.author = 'Di Buat Oleh CnC' //sticker wm ganti nama kalian

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})