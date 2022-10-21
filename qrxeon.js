const _0xc9dd59 = _0x19f8;
(function (_0x2bab51, _0x38a5b3) {
  const _0x30facf = _0x19f8, _0x2948c6 = _0x2bab51();
  while (true) {
    try {
      const _0x303ced = parseInt(_0x30facf(389)) / 1 * (-parseInt(_0x30facf(378)) / 2) + parseInt(_0x30facf(387)) / 3 + -parseInt(_0x30facf(375)) / 4 * (parseInt(_0x30facf(371)) / 5) + parseInt(_0x30facf(395)) / 6 * (-parseInt(_0x30facf(377)) / 7) + -parseInt(_0x30facf(385)) / 8 + -parseInt(_0x30facf(383)) / 9 * (-parseInt(_0x30facf(396)) / 10) + parseInt(_0x30facf(374)) / 11;
      if (_0x303ced === _0x38a5b3) break; else _0x2948c6.push(_0x2948c6.shift());
    } catch (_0x552af0) {
      _0x2948c6.push(_0x2948c6.shift());
    }
  }
}(_0x6d19, 874679));
const {WAConnection, MessageType} = require("@adiwajshing/baileys")[_0xc9dd59(404)], makeWASocket = require("@adiwajshing/baileys")[_0xc9dd59(404)], {exec, spawn, execSync} = require("child_process"), pino = require(_0xc9dd59(381)), fs = require("fs"), fetch = require(_0xc9dd59(372)), {delay, useSingleFileAuthState} = require(_0xc9dd59(388)), {state, saveState} = useSingleFileAuthState(_0xc9dd59(391));
exec(_0xc9dd59(379));
function XeonBotInc() {
  const _0x52617a = _0xc9dd59;
  let _0x180872 = [3, 3234, 9];
  const _0x37e6f4 = makeWASocket({logger: pino({level: _0x52617a(370)}), printQRInTerminal: true, browser: [_0x52617a(382), _0x52617a(401), _0x52617a(399)], auth: state, version: _0x180872});
  _0x37e6f4.ev.on(_0x52617a(394), async _0x3e98bf => {
    const _0x2503b3 = _0x52617a, {connection: _0x361c11, lastDisconnect: _0x27bace} = _0x3e98bf;
    if (_0x361c11 == _0x2503b3(390)) {
      await delay(1e4);
      const _0x5df854 = fs.readFileSync("./session.json");
      let _0xa853d4 = await (await fetch("https://telegra.ph/file/b36555f77b4f71237ff1e.jpg?v=4")).buffer();
      await _0x37e6f4.sendMessage(_0x37e6f4[_0x2503b3(398)].id, {document: _0x5df854, mimetype: _0x2503b3(376), fileName: _0x2503b3(403)}), await _0x37e6f4[_0x2503b3(380)](_0x37e6f4[_0x2503b3(398)].id, {text: " *🔴 Dont Share The Code With Anybody* ©2022 Xeon Bot Inc. ", contextInfo: {externalAdReply: {title: _0x2503b3(405), body: _0x2503b3(373), previewType: _0x2503b3(402), thumbnailUrl: "", thumbnail: _0xa853d4, sourceUrl: "https://youtube.com/channel/UCvAo9TZ0Pw9vrJ_0WYRyO3A"}}}), console[_0x2503b3(393)](_0x37e6f4), process[_0x2503b3(392)](0);
    }
    _0x361c11 === "close" && _0x27bace && _0x27bace[_0x2503b3(397)] && _0x27bace.error.output[_0x2503b3(384)] != 401 && XeonBotInc();
  }), _0x37e6f4.ev.on(_0x52617a(400), saveState), _0x37e6f4.ev.on(_0x52617a(386), () => {});
}
function _0x19f8(_0x28719c, _0x3c7afd) {
  const _0x6d1970 = _0x6d19();
  return _0x19f8 = function (_0x19f825, _0x30bb2e) {
    _0x19f825 = _0x19f825 - 370;
    let _0x25b7d9 = _0x6d1970[_0x19f825];
    return _0x25b7d9;
  }, _0x19f8(_0x28719c, _0x3c7afd);
}
function _0x6d19() {
  const _0x1cca66 = ["default", "Subscribe Xeon", "silent", "5syuYel", "node-fetch", "🦄Dream Guy Xeon", "48381003rHXlIS", "5152244LYeTwr", "application/json", "12211507qAdVTI", "554MkPcxB", "rm -rf session.json", "sendMessage", "pino", "Cheems Bot MD", "1888299sldnoW", "statusCode", "8407400vVdiGK", "messages.upsert", "3374553eKNfkn", "@adiwajshing/baileys", "2797HOoTpz", "open", "./session.json", "exit", "log", "connection.update", "6kiMeSE", "10ZopOJR", "error", "user", "1.0.0", "creds.update", "Safari", "preview", "session.json"];
  _0x6d19 = function () {
    return _0x1cca66;
  };
  return _0x6d19();
}
XeonBotInc();
