const makeWASocket = require("@adiwajshing/baileys").default
const qrcode = require("qrcode-terminal")
const fs = require('fs')
const pino = require('pino')
const { delay , useMultiFileAuthState,BufferJSON, fetchLatestBaileysVersion } = require("@adiwajshing/baileys")


  async function qr() {
//------------------------------------------------------
let { version, isLatest } = await fetchLatestBaileysVersion()
const {  state, saveCreds } =await useMultiFileAuthState(`./session`)
    const session = makeWASocket({
        logger: pino({ level: 'silent' }),
        printQRInTerminal: true,
        browser: ['Alien-Alfa','opera','1.0.0'],
        auth: state,
        version
    })
//------------------------------------------------------
    session.ev.on("connection.update",async  (s) => {
        const { connection, lastDisconnect } = s
        if (connection == "open") {
            await delay(1000 * 10)
            process.exit(0)
        }
        if (
            connection === "close" &&
            lastDisconnect &&
            lastDisconnect.error &&
            lastDisconnect.error.output.statusCode != 401
        ) {
            qr()
        }
    })
    session.ev.on('creds.update', saveCreds)
    session.ev.on("messages.upsert",  () => { })
}
qr()
