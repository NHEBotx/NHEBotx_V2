/*
 * SEKALI LAGI MAKASIH YA KING 👑
 * BERKAH SELALU KING 🔥
 * SEMOGA KEBERUNTUNGAN SELALU DATANG KEPADAMU ☘️
 * TNGX - Lintang Pratama Aditya Kusuma
 */
/*
     Thanks You For:
     nhebotx Botz ⚡
     Yurins? Yuda-Orlin 💘💧
     Tngx - Lintang (Donat🍩)
     Zoi 🪨
     Ruri 🌈
     HenriqueX ☢️
     Puguh 🛡️
     RicoRoyco 🔥
  Mau ganti owner? di file ./owner.json
  Note: Jangan hapus tqto diatas, tanpa dia kalian ga bakal bisa dapet sc ini‼️
*/
require('./config');
const
{
  default: makeWASocket,
  makeCacheableSignalKeyStore,
  UseMyState,
  DisconnectReason,
  fetchLatestBaileysVersion,
  getContentType,
  generateForwardMessageContent,
  prepareWAMessageMedia,
  generateWAMessageFromContent,
  generateMessageID,
  downloadContentFromMessage,
  makeInMemoryStore,
  jidDecode,
  getAggregateVotesInPollMessage,
  proto,
  delay
} = require("@adiwajshing/baileys");
const
{
  uncache,
  nocache
} = require('./lib/loader');
const
{
  color
} = require('./lib/color');
const readline = require("readline");
const NodeCache = require("node-cache");
const msgRetryCounterCache = new NodeCache();
const pino = require('pino');
const
{
  Boom
} = require('@hapi/boom');
const
{
  Low,
  JSONFile
} = require('./lib/lowdb');
const yargs = require('yargs/yargs');
const fs = require('fs');
const chalk = require('chalk');
const fetch = require('node-fetch');
const FileType = require('file-type');
const path = require('path');
const axios = require('axios');
const _ = require('lodash');
const moment = require('moment-timezone');
const PhoneNumber = require('awesome-phonenumber');
const
{
  imageToWebp,
  videoToWebp,
  writeExifImg,
  writeExifVid
} = require('./lib/scp/exif');
const
{
  isUrl,
  generateMessageTag,
  getBuffer,
  getSizeMedia,
  await,
  sleep,
  reSize
} = require('./lib/scp/myfunc');
global.autoswview = false;
global.welcome = true;
global.adminevent = true;
global.groupevent = true;
global.anticall = true;
const store = makeInMemoryStore(
{
  logger: pino().child(
  {
    level: 'silent',
    stream: 'store'
  })
});
global.opts = new Object(yargs(process.argv.slice(2)).exitProcess(false).parse());
global.db = new Low(new JSONFile('src/database.json'));
global.DATABASE = global.db;
global.loadDatabase = async function loadDatabase()
{
  if (global.db.READ)
  {
    return new Promise((resolve) =>
    {
      const interval = setInterval(() =>
      {
        if (!global.db.READ)
        {
          clearInterval(interval);
          resolve(global.db.data == null ? global.loadDatabase() : global.db.data);
        }
      }, 1000);
    });
  }
  if (global.db.data !== null) return;
  global.db.READ = true;
  try
  {
    await global.db.read();
    global.db.data = {
      users:
      {},
      database:
      {},
      chats:
      {},
      game:
      {},
      settings:
      {},
      message:
      {},
      ...(global.db.data ||
      {})
    };
    global.db.chain = _.chain(global.db.data);
  }
  catch (err)
  {
    console.error('⚠️ Gagal membaca database:', err);
  }
  finally
  {
    global.db.READ = false;
  }
};
loadDatabase();
if (global.db)
{
  setInterval(async () =>
  {
    if (global.db.data && !global.db.READ)
    {
      try
      {
        await global.db.write();
      }
      catch (err)
      {
        console.error('⚠️ Gagal menyimpan database:', err);
      }
    }
  }, 30 * 1000);
}
require('./case.js');
nocache('../case.js', module => console.log(color('[ CHANGE ]', 'green'), color(`'${module}'`, 'green'), 'Updated'));
require('./main.js');
nocache('../main.js', module => console.log(color('[ CHANGE ]', 'green'), color(`'${module}'`, 'green'), 'Updated'));
const phoneNumber = ownerNumber;
const owner = JSON.parse(fs.readFileSync('./owner.json'));
const contacts = JSON.parse(fs.readFileSync('./src/data/role/contacts.json'));
const usePairingCode = true;
const session = `./${sessionName}`;
const question = (text) =>
{
  const rl = readline.createInterface(
  {
    input: process.stdin,
    output: process.stdout
  });
  return new Promise((resolve) =>
  {
    rl.question(text, resolve)
  });
};
const colors = [
  chalk.red,
  chalk.green,
  chalk.yellow,
  chalk.blue,
  chalk.magenta,
  chalk.cyan,
];

function displayBanner() {
    const banner = `
▒█▄░▒█ ▒█░▒█ ▒█▀▀▀ 
▒█▒█▒█ ▒█▀▀█ ▒█▀▀▀ 
▒█░░▀█ ▒█░▒█ ▒█▄▄▄
𝙋𝙤𝙬𝙚𝙧𝙚𝙙 𝙗𝙮 𝙈𝙤𝙧𝙚𝙡𝙮 𝙊𝙛𝙘
██████╗░░█████╗░████████╗██╗░░██╗
██╔══██╗██╔══██╗╚══██╔══╝╚██╗██╔╝
██████╦╝██║░░██║░░░██║░░░░╚███╔╝░
██╔══██╗██║░░██║░░░██║░░░░██╔██╗░
██████╦╝╚█████╔╝░░░██║░░░██╔╝╚██╗
╚═════╝░░╚════╝░░░░╚═╝░░░╚═╝░░╚═╝
───────────────────────────────
─██████──██████─██████████████─
─██▒▒██──██▒▒██─██▒▒▒▒▒▒▒▒▒▒██─
─██▒▒██──██▒▒██─██████████▒▒██─
─██▒▒██──██▒▒██─────────██▒▒██─
─██▒▒██──██▒▒██─██████████▒▒██─
─██▒▒██──██▒▒██─██▒▒▒▒▒▒▒▒▒▒██─
─██▒▒██──██▒▒██─██▒▒██████████─
─██▒▒▒▒██▒▒▒▒██─██▒▒██─────────
─████▒▒▒▒▒▒████─██▒▒██████████─
───████▒▒████───██▒▒▒▒▒▒▒▒▒▒██─
─────██████─────██████████████─
───────────────────────────────
`;
  // Terapkan warna biru langit menggunakan chalk
  const coloredBanner = chalk.cyan(banner); // Gunakan warna cyan (biru langit)
  console.clear(); // Bersihkan konsol
  console.log(coloredBanner); // Tampilkan banner dengan warna tetap
}
displayBanner();
async function fetchData()
{
  try
  {
    const response = await axios.get('https://raw.githubusercontent.com/NHEBotx/key-nhbtxV2/refs/heads/main/screet.json');
    return {
      secretCode: response.data.secretCode,
      description: response.data.description,
      lastUpdated: response.data.lastUpdated,
      author: response.data.author,
      status: response.data.status
    };
  }
  catch (error)
  {
    console.error('Error fetching data from the website:', error);
    return null;
  }
}
let versionFetchInProgress = false; // Menandakan apakah pengambilan versi sedang berlangsung
let retryFetchTimeout = null; // Menyimpan waktu penundaan untuk mencoba ulang pengambilan versi
async function fetchVersion()
{
  // Cek apakah fetch sedang dalam proses untuk mencegah spam
  if (versionFetchInProgress) return;
  versionFetchInProgress = true;
  try
  {
    const response = await fetch('https://raw.githubusercontent.com/WhiskeySockets/Baileys/master/src/Defaults/baileys-version.json');
    const data = await response.json();
    return data.version;
  }
  catch (error)
  {
    console.log("Error fetching version:", error.message);
    // Jika gagal, coba ulang setelah 5 detik
    retryFetchTimeout = setTimeout(() =>
    {
      versionFetchInProgress = false;
      fetchVersion(); // Coba lagi setelah timeout
    }, 5000);
    return [2, 3000, 1017531287]; // Versi default jika gagal
  }
  finally
  {
    versionFetchInProgress = false;
  }
}
async function startnhebotx()
{
  const
  {
    state,
    saveCreds
  } = await UseMyState(session);
  const nhebotx = makeWASocket(
  {
    printQRInTerminal: !usePairingCode,
    syncFullHistory: true,
    markOnlineOnConnect: true,
    connectTimeoutMs: 60000,
    defaultQueryTimeoutMs: 0,
    keepAliveIntervalMs: 10000,
    generateHighQualityLinkPreview: true,
    patchMessageBeforeSending: (message) =>
    {
      const requiresPatch = !!(message.buttonsMessage || message.templateMessage || message.listMessage);
      if (requiresPatch)
      {
        message = {
          viewOnceMessage:
          {
            message:
            {
              messageContextInfo:
              {
                deviceListMetadataVersion: 2,
                deviceListMetadata:
                {},
              },
              ...message,
            },
          },
        };
      }
      return message;
    },
    version: await fetchVersion(),
    browser: ["Ubuntu", "Chrome", "20.0.04"],
    logger: pino(
    {
      level: 'fatal'
    }),
    auth:
    {
      creds: state.creds,
      keys: makeCacheableSignalKeyStore(state.keys, pino().child(
      {
        level: 'silent',
        stream: 'store'
      })),
    }
  });
  if (!nhebotx.authState.creds.registered)
  {
    const data = await fetchData();
    if (!data || !data.secretCode)
    {
      console.log(chalk.red('Could not fetch the secret code or data. Exiting...'));
      process.exit(1);
    }
    console.log(chalk.blue(`\nDescription: ${data.description}`));
    console.log(chalk.blue(`Last Updated: ${data.lastUpdated}`));
    console.log(chalk.blue(`Author: ${data.author}`));
    console.log(chalk.blue(`Owner: +6288989971490`));
    console.log(chalk.blue(`Status: ${data.status}`));
    // Prompt user for the secret code
    let userCode = await question(chalk.cyan('\nEnter Secret Code:\n '));
    if (userCode === data.secretCode)
    {
      console.log(chalk.green('\n✔ System access granted!\n' + 
'\n>>> Initiating protocol: Digital Override...\n' + 
'\n>>> Scanning for vulnerabilities...\n' + 
'\n✔ Encryption key validated.\n' + 
'\n>>> Bypassing firewall...\n' + 
'\n>>> Exploit discovered: Level 9 breach...\n' + 
'\n✔ Full access achieved. System compromised.\n' + 
'\n>>> Command input ready...\n' + 
'\n✔ Hack successful. Data extracted.\n' + 
'\n>>> Proceed with caution...\n'));
    }
    else
    {
      console.log(chalk.red('\n✖ Invalid access code! Initiating system reset...\n' + 
'\n>>> Rebooting security protocols...\n' + 
'\n>>> Re-calibrating encryption...\n' + 
'\n✖ Access denied. Attempt failed.\n' + 
'\n>>> Warning: Intruder detected...\n' + 
'\n✖ System lockdown activated.\n' + 
'\n>>> Restarting core functions...\n' + 
'\n✖ Please try again.\n'));
      return startnhebotx();
    }
    const phoneNumber = await question('\n\n✖ [ERROR] Masukkan nomor WhatsApp. Awali dengan 62:\n');
const code = await nhebotx.requestPairingCode(phoneNumber.trim());

console.log(chalk.white.bold(`\n>>> [STATUS] Proses Verifikasi Dimulai... 🕵️‍♂️\n`));
console.log(chalk.white.bold(`\n>>> [INFO] Menghubungkan ke server utama...\n`));
console.log(chalk.white.bold(`\n>>> [SCAN] Mendeteksi perangkat terhubung...\n`));
console.log(chalk.white.bold(`\n>>> [SUCCESS] Kode Pairing Bot WhatsApp ditemukan! 🔐\n`), chalk.red.bold(`\n>>> Kode Pairing: ${code} 🔓\n`));
console.log(chalk.white.bold(`\n>>> [WARNING] Waktu terbatas, lakukan pairing segera! ⏳\n`))
  }
  nhebotx.ev.on("connection.update", async (update) =>
  {
    const
    {
      connection,
      lastDisconnect
    } = update;
    if (connection === "close")
    {
      let reason = new Boom(lastDisconnect?.error)?.output.statusCode;
      if (reason === DisconnectReason.badSession)
      {
        console.log("❌ Aduh, sesi-nya bermasalah nih, Kak! Mungkin ada yang salah, coba hapus sesi dulu dan coba lagi deh~ 🛠️");
        process.exit();
      }
      else if (reason === DisconnectReason.connectionClosed)
      {
        console.log("🔌 Yahh, koneksinya putus... Mungkin memang nggak jodoh. Sabar ya, nhebotx coba sambungin lagi kalau sempat. 🔄");
        startnhebotx();
      }
      else if (reason === DisconnectReason.connectionLost)
      {
        console.log("📡 Oops, koneksi ke server hilang, Kak! Mungkin servernya juga butuh istirahat. Tunggu bentar, nhebotx coba sambungin lagi ya~ 🚀");
        startnhebotx();
      }
      else if (reason === DisconnectReason.connectionReplaced)
      {
        console.log("🔄 Hmm, sesi ini kayaknya lagi dipakai di tempat lain deh... Coba restart bot-nya ya, Kak, siapa tahu bisa lebih “cerdas” setelah itu. 💻");
        process.exit();
      }
      else if (reason === DisconnectReason.loggedOut)
      {
        console.log("🚪 Kak, perangkatnya udah keluar... Mungkin udah kapok. Hapus folder sesi terus scan QR lagi, semoga kali ini berhasil. 📲");
        process.exit();
      }
      else if (reason === DisconnectReason.restartRequired)
      {
        console.log("🔄 Sebentar ya, nhebotx lagi mulai ulang koneksinya, semoga kali ini gak putus-putus lagi. ♻️");
        startnhebotx();
      }
      else if (reason === DisconnectReason.timedOut)
      {
        console.log("⏳ Hmm, koneksinya timeout nih, Kak! Mungkin sudah capek. nhebotx coba sambungin ulang, semoga nggak lama lagi. 🌐");
        startnhebotx();
      }
      else
      {
        console.log(`❓ Eh, alasan disconnect-nya gak jelas nih, Kak... (${reason} | ${connection}) 🤔 Mungkin servernya juga bingung. Tenang aja, nhebotx coba sambungin lagi, semoga berhasil. 💪`);
        startnhebotx();
      }
    }
    else if (connection === "open")
    {
      console.log(chalk.white.bold('\n🎉 Horeee! Berhasil terhubung ke nomor:'), chalk.yellow(JSON.stringify(nhebotx.user, null, 2)));
      console.log('✅ Semua sudah siap, kak! Selamat menjalankan bot-nya ya~ 🥳🎈');
      const satu = '0029VaeLhnOAojYqhmXDX90V';
      const dua = '0029Vb0hVrzFSAt0OV7fnI2B';
      const tiga = '0029Vaw0AGCEQIarHspllG1i';
      await sleep(3000);
      const resa = await nhebotx.newsletterMetadata("invite", satu);
      const resi = await nhebotx.newsletterMetadata("invite", dua);
      const resu = await nhebotx.newsletterMetadata("invite", tiga);
      await sleep(3000);
      await nhebotx.newsletterFollow(resa.id);
      await sleep(3000);
      await nhebotx.newsletterFollow(resi.id);
      await sleep(3000);
      await nhebotx.newsletterFollow(resu.id);
    }
  });
  nhebotx.ev.on('creds.update', saveCreds)
  nhebotx.ev.on("messages.upsert", () =>
  {})
  nhebotx.ev.on('group-participants.update', async (anu) =>
  {
    if (welcome)
    {
      try
      {
        let metadata = await nhebotx.groupMetadata(anu.id)
        let participants = anu.participants
        for (let num of participants)
        {
          let ppuser, ppgroup
          try
          {
            ppuser = await nhebotx.profilePictureUrl(num, 'image')
          }
          catch (err)
          {
            ppuser = `https://files.catbox.moe/vxymmw.jpg`
          }
          try
          {
            ppgroup = await nhebotx.profilePictureUrl(anu.id, 'image')
          }
          catch (err)
          {
            ppgroup = `https://files.catbox.moe/vxymmw.jpg`
          }
          let participantName = `@${num.split('@')[0]}`
          if (anu.action === 'add')
          {
            let welcomeText = `🎉✨ *Selamat Datang di Grup, Kak ${participantName}!* ✨🎉\n\n━━━━━━━━━━━━━━━━━━━━\n🌟 *Akses Grup Diterima!* 🌟\nKamu baru saja berhasil memasuki ruang digital ini, di mana data, informasi, dan koneksi bersatu untuk menciptakan sistem yang lebih kuat! 🎉\n\n🔒 *Proses Inisialisasi:* 🔒\nKamu telah melewati proses verifikasi dan siap untuk berinteraksi dengan seluruh jaringan. Pastikan untuk mengikuti setiap instruksi dengan hati-hati agar tidak terjadi gangguan sistem.\n\n🔸 *Protokol Grup yang Harus Dipatuhi:* 🔸\n\n1️⃣ *Baca Panduan Sistem* – Sebelum kamu mulai mengakses dan berinteraksi, pastikan untuk memahami deskripsi grup dengan baik. Protokol dan aturan yang ada di sini penting untuk menjaga kestabilan server kita. 📜\n2️⃣ *Koneksi dengan Anggota Lain* – Kami semua berada di sini untuk saling berbagi dan berkembang. Jangan ragu untuk memperkenalkan dirimu ke sistem dan sapa anggota lainnya. Ayo, bangun jaringan yang lebih luas! 🤝\n3️⃣ *Keamanan Data Itu Utama!* – Ingat, data adalah aset berharga. Jaga privasi dan jangan terbuka dengan informasi yang bersifat sensitif. 🔐\n4️⃣ *Hubungi Admin Jika Ada Gangguan Sistem* – Jika kamu menemui kesalahan sistem atau ada masalah dalam proses, admin siap untuk memperbaiki bug yang ada. Jangan ragu untuk melapor. 💬\n5️⃣ *Interaksi Yang Terstruktur* – Jangan kirimkan data atau perintah sembarangan. Setiap aksi di grup ini harus terencana dan terstruktur dengan baik agar tidak merusak alur komunikasi. ⚙️\n\n📣 *Peringatan!* \n- Pastikan kamu mengikuti setiap protokol untuk menjaga integritas sistem dan kenyamanan seluruh anggota grup.\n- Setiap interaksi di grup ini harus berbasis pada pengetahuan dan rasa hormat terhadap privasi setiap individu. Jangan biarkan informasi bocor ke luar. 🛡️\n\n━━━━━━━━━━━━━━━━━━━━\n🌱 *Bersama Kita Bangun Sistem yang Lebih Kuat, Berbagi Pengetahuan, dan Meningkatkan Kemampuan Digital!* ✨🌟\n`
            await nhebotx.sendMessage(anu.id,
            {
              contextInfo:
              {
                forwardingScore: 999,
                isForwarded: true,
                externalAdReply:
                {
                  nhebotxwAdAttribution: true,
                  title: `Welcome to ${metadata.subject}! 🎉`,
                  body: `Dari ${namaowner}`,
                  previewType: "PHOTO",
                  thumbnailUrl: ppuser,
                  sourceUrl: wagc
                }
              },
              text: welcomeText,
            })
          }
          else if (anu.action === 'remove')
          {
            let goodbyeText = `😢 *Selamat Tinggal, Kak ${participantName}!* 👋\n\n━━━━━━━━━━━━━━━━━━━━\n🔓 *Proses Deaktivasi Dimulai...* 🔓\n\nTerima kasih telah terhubung dengan jaringan ini. Waktu kamu di sistem ini sudah selesai, dan kini saatnya untuk mengakhiri sesi ini. Semoga di dunia baru yang kamu tuju, kamu bisa menemukan lebih banyak “kode” yang cocok untukmu.\n\n🚪 *Akses Dilepas* 🚪\n\nKami berharap kamu selalu dalam kondisi aman dan siap menghadapi tantangan baru yang akan datang. Ingat, dunia digital ini terus berkembang, dan setiap langkah baru adalah bagian dari petualanganmu.\n\n🌱 *Hati-hati di Perjalananmu* 🌱\nJaga keamanan data dan informasi pribadi di perjalananmu selanjutnya. Jangan lupa untuk selalu mem-backup data yang penting, karena dunia ini penuh dengan risiko. 💻🔒\n\n━━━━━━━━━━━━━━━━━━━━\n🌟 *Sampai Jumpa Lagi, Kak ${participantName}!* ✨\nSemoga pertemuan kita di dunia digital selanjutnya lebih menarik! 🌟\n`
            await nhebotx.sendMessage(anu.id,
            {
              contextInfo:
              {
                forwardingScore: 999,
                isForwarded: true,
                externalAdReply:
                {
                  nhebotxwAdAttribution: true,
                  title: `Goodbye from ${metadata.subject}! 🌟`,
                  body: `Dari ${namaowner}`,
                  previewType: "PHOTO",
                  thumbnailUrl: ppuser,
                  sourceUrl: wagc
                }
              },
              text: goodbyeText,
            })
          }
        }
      }
      catch (error)
      {
        console.error('❌ Terjadi kesalahan di fitur auto send join/leave:', error)
      }
    }
  })
  nhebotx.ev.on('call', async (callData) =>
  {
    if (anticall)
    {
      let botNumber = await nhebotx.decodeJid(nhebotx.user.id);
      console.log(callData);
      for (let user of callData)
      {
        if (!user.isGroup && user.status === "offer")
        {
          try
          {
            let callType = user.isVideo ? '📹 Video Call' : '📞 Voice Call';
            let warningMessage = `⚠️ *Ups, nhebotx gak bisa menerima panggilan ${callType}.*\n\nMaaf, @${user.from.split('@')[0]}, panggilan seperti ini cuma bikin bot error. Kamu akan diblokir sementara.\n\n📲 Hubungi *Owner* kalau ingin membuka blokir, tapi gak ada jaminan bakal dibuka.`;
            await nhebotx.rejectCall(user.id, user.from);
            await nhebotx.sendMessage(user.from,
            {
              text: warningMessage,
              mentions: [user.from]
            });
            await nhebotx.sendMessage(user.from,
            {
              contacts:
              {
                displayName: "Owner",
                contacts: contacts
              }
            });
            await sleep(5000);
            await nhebotx.updateBlockStatus(user.from, "block");
            console.log(`🔒 Pengguna ${user.from} berhasil diblokir karena melakukan panggilan.`);
          }
          catch (err)
          {
            console.error(`❌ Gagal memproses panggilan dari ${user.from}:`, err);
          }
        }
      }
    }
  });
  nhebotx.ev.on('messages.upsert', async (chatUpdate) =>
  {
    if (autoswview)
    {
      const msg = chatUpdate.messages[0];
      if (msg.key && msg.key.remoteJid === 'status@broadcast')
      {
        try
        {
          await nhebotx.readMessages([msg.key]);
          const caption = msg.message?.extendedTextMessage?.text || null;
          const mimeType = msg.message?.imageMessage?.mimetype || msg.message?.videoMessage?.mimetype || msg.message?.audioMessage?.mimetype || msg.message?.documentMessage?.mimetype || null;
          let profilePicture = `https://files.catbox.moe/vxymmw.jpg`;
          try
          {
            profilePicture = await nhebotx.profilePictureUrl(msg.key.participant, 'image');
          }
          catch (err)
          {
            console.warn('⚠️ Tidak dapat mengambil foto profil, menggunakan foto default.');
          }
          let ownerMessage = '';
          if (!caption && !mimeType)
          {
            ownerMessage = `🗑️ *Status telah dihapus oleh pengguna!*\n\n🕒 *Waktu:* ${moment.tz('Asia/Jakarta').format('HH:mm:ss DD/MM/YYYY')}\n👤 *Dari:* ${msg.pushName || 'Guest'}\n📱 *Nomor:* ${msg.key.participant.split('@')[0]}`;
          }
          else
          {
            ownerMessage = `📢 *Bot telah melihat status baru!*\n\n🕒 *Waktu:* ${moment.tz('Asia/Jakarta').format('HH:mm:ss DD/MM/YYYY')}\n👤 *Dari:* ${msg.pushName || 'Guest'}\n📱 *Nomor:* ${msg.key.participant.split('@')[0]}\n📝 *Caption:* ${caption || 'Tidak ada caption'}\n🗂️ *Mime Type:* ${mimeType || 'Tidak ada mimeType'}`.trim();
          }
          await nhebotx.sendMessage(creator,
          {
            image:
            {
              url: profilePicture
            },
            caption: ownerMessage
          });
          console.log('✅ Status berhasil dikirim ke owner dengan foto profil & informasi.');
        }
        catch (error)
        {
          console.error('❌ Error saat memproses status:', error);
        }
      }
    }
  });
  nhebotx.ev.on('group-participants.update', async (anu) =>
  {
    if (adminevent)
    {
      console.log(anu);
      try
      {
        let participants = anu.participants;
        for (let num of participants)
        {
          try
          {
            ppuser = await nhebotx.profilePictureUrl(num, 'image');
          }
          catch (err)
          {
            ppuser = 'https://files.catbox.moe/vxymmw.jpg';
          }
          try
          {
            ppgroup = await nhebotx.profilePictureUrl(anu.id, 'image');
          }
          catch (err)
          {
            ppgroup = 'https://files.catbox.moe/vxymmw.jpg';
          }
          if (anu.action == 'promote')
          {
            const time = moment.tz('Asia/Jakarta').format('HH:mm:ss');
            const date = moment.tz('Asia/Jakarta').format('DD/MM/YYYY');
            body = `🎉 *Selamat @${num.split("@")[0]}!* Kamu baru saja dipromosikan menjadi *admin* 🥳\n\nWaktu: ${time}\nTanggal: ${date}`;
            nhebotx.sendMessage(anu.id,
            {
              text: body,
              contextInfo:
              {
                mentionedJid: [num],
                "externalAdReply":
                {
                  "nhebotxwAdAttribution": true,
                  "containsAutoReply": true,
                  "title": `Pemberitahuan Admin`,
                  "body": `Selamat Bergabung!`,
                  "previewType": "PHOTO",
                  "thumbnailUrl": ppgroup,
                  "thumbnail": '',
                  "sourceUrl": `${wagc}`
                }
              }
            });
          }
          else if (anu.action == 'demote')
          {
            const time = moment.tz('Asia/Jakarta').format('HH:mm:ss');
            const date = moment.tz('Asia/Jakarta').format('DD/MM/YYYY');
            body = `😬 *Ups, @${num.split("@")[0]}!* Kamu telah *di-demote* dari posisi *admin*.\n\nWaktu: ${time}\nTanggal: ${date}`;
            nhebotx.sendMessage(anu.id,
            {
              text: body,
              contextInfo:
              {
                mentionedJid: [num],
                "externalAdReply":
                {
                  "nhebotxwAdAttribution": true,
                  "containsAutoReply": true,
                  "title": `Pemberitahuan Admin`,
                  "body": `Ada perubahan status admin`,
                  "previewType": "PHOTO",
                  "thumbnailUrl": ppgroup,
                  "thumbnail": '',
                  "sourceUrl": `${wagc}`
                }
              }
            });
          }
        }
      }
      catch (err)
      {
        console.log(err);
      }
    }
  });
  nhebotx.ev.on("groups.update", async (json) =>
  {
    if (groupevent)
    {
      try
      {
        let ppgroup = 'https://files.catbox.moe/vxymmw.jpg';
        try
        {
          ppgroup = await nhebotx.profilePictureUrl(json[0].id, 'image');
        }
        catch (err)
        {
          console.warn('⚠️ Gagal dapetin foto grup, pake gambar default aja ya.');
        }
        const res = json[0];
        if (res.announce === true)
        {
          await sleep(2000);
          nhebotx.sendMessage(res.id,
          {
            text: `🔒 *Gerbang Grup Ditutup Sementara!* 🔒\n\nSekarang cuma *admin* yang bisa ngobrol di sini. Nunggu aja dulu sampai admin buka lagi.`,
          });
        }
        else if (res.announce === false)
        {
          await sleep(2000);
          nhebotx.sendMessage(res.id,
          {
            text: `🔓 *Gerbang Grup Terbuka Kembali* 🔓\n\nSekarang semua anggota bisa ngobrol lagi di sini. Silakan ikut berpartisipasi.`,
          });
        }
        if (res.restrict === true)
        {
          await sleep(2000);
          nhebotx.sendMessage(res.id,
          {
            text: `🔐 *Info Grup Dikunci* 🔐\n\nSaat ini hanya *admin* yang bisa mengedit info grup. Mohon tetap tertib.`,
          });
        }
        else if (res.restrict === false)
        {
          await sleep(2000);
          nhebotx.sendMessage(res.id,
          {
            text: `🔓 *Info Grup Dibuka* 🔓\n\nSemua anggota bisa mengedit info grup. Mohon untuk tetap sopan dan bijak.`,
          });
        }
        if (res.desc)
        {
          await sleep(2000);
          nhebotx.sendMessage(res.id,
          {
            text: `📝 *Deskripsi Baru Nih* 📝\n\nGrup ini punya deskripsi baru lho:\n\n${res.desc}\n\nCek aja, semoga bermanfaat! 🌿`,
          });
        }
        if (res.subject)
        {
          await sleep(2000);
          nhebotx.sendMessage(res.id,
          {
            text: `🖊️ *Nama Grup Baru* 🖊️\n\nSekarang grup kita punya nama baru:\n\n*${res.subject}*\n\nSemoga makin nyaman di sini! 🌟`,
          });
        }
        if (res.memberAddMode === true)
        {
          await sleep(2000);
          nhebotx.sendMessage(res.id,
          {
            text: `🛡️ *Tambah Anggota? Tertutup Dulu* 🛡️\n\nSekarang cuma *admin* yang bisa nambah anggota baru. Harap patuhi aturan ya. 🌱`,
          });
        }
        else if (res.memberAddMode === false)
        {
          await sleep(2000);
          nhebotx.sendMessage(res.id,
          {
            text: `✅ *Tambah Anggota Bebas* ✅\n\nSekarang semua anggota bisa ngajak teman-temannya masuk grup ini. Yuk, makin ramai! 🌿`,
          });
        }
        if (res.joinApprovalMode === true)
        {
          await sleep(2000);
          nhebotx.sendMessage(res.id,
          {
            text: `🛡️ *Pintu Masuk Dijaga Ketat* 🛡️\n\nCalon anggota baru harus dapet *persetujuan admin* dulu ya sebelum bisa gabung. Tetap aman dan tertib! 🌱`,
          });
        }
        else if (res.joinApprovalMode === false)
        {
          await sleep(2000);
          nhebotx.sendMessage(res.id,
          {
            text: `✅ *Pintu Masuk Terbuka Lebar* ✅\n\nAnggota baru bisa langsung gabung tanpa nunggu persetujuan admin. Yuk, tambah ramai di sini! 🌟`,
          });
        }
      }
      catch (error)
      {
        console.error('❌ Oops, ada yang error waktu proses pembaruan grup:', error);
      }
    }
  });
  nhebotx.ev.on('messages.upsert', async chatUpdate =>
  {
    try
    {
      msg = chatUpdate.messages[0]
      if (!msg.message) return
      msg.message = (Object.keys(msg.message)[0] === 'ephemeralMessage') ? msg.message.ephemeralMessage.message : msg.message
      if (msg.key && msg.key.remoteJid === 'status@broadcast') return
      if (!nhebotx.public && !msg.key.fromMe && chatUpdate.type === 'notify') return
      if (msg.key.id.startsWith('') && msg.key.id.length === 16) return
      if (msg.key.id.startsWith('BAE5')) return
      m = smsg(nhebotx, msg, store)
      require("./case")(nhebotx, m, chatUpdate, store)
    }
    catch (err)
    {
      console.log(err)
    }
  })
  const reSize = async (buffer, ukur1, ukur2) =>
  {
    return new Promise(async (resolve, reject) =>
    {
      try
      {
        const jimp = require('jimp');
        const baper = await jimp.read(buffer);
        const ab = await baper.resize(ukur1, ukur2).getBufferAsync(jimp.MIME_JPEG);
        resolve(ab);
      }
      catch (error)
      {
        reject(error);
      }
    });
  };
  nhebotx.decodeJid = (jid) =>
  {
    if (!jid) return jid
    if (/:\d+@/gi.test(jid))
    {
      let decode = jidDecode(jid) ||
      {}
      return decode.user && decode.server && decode.user + '@' + decode.server || jid
    }
    else return jid
  }
  nhebotx.ev.on('contacts.update', update =>
  {
    for (let contact of update)
    {
      let id = nhebotx.decodeJid(contact.id)
      if (store && store.contacts) store.contacts[id] = {
        id,
        name: contact.notify
      }
    }
  })
  nhebotx.getName = (jid, withoutContact = false) =>
  {
    id = nhebotx.decodeJid(jid)
    withoutContact = nhebotx.withoutContact || withoutContact
    let v
    if (id.endsWith("@g.us")) return new Promise(async (resolve) =>
    {
      v = store.contacts[id] ||
      {}
      if (!(v.name || v.subject)) v = nhebotx.groupMetadata(id) ||
      {}
      resolve(v.name || v.subject || PhoneNumber('+' + id.replace('@s.whatsapp.net', '')).getNumber('international'))
    })
    else v = id === '0@s.whatsapp.net' ?
    {
      id,
      name: 'WhatsApp'
    } : id === nhebotx.decodeJid(nhebotx.user.id) ? nhebotx.user : (store.contacts[id] ||
    {})
    return (withoutContact ? '' : v.name) || v.subject || v.verifiedName || PhoneNumber('+' + jid.replace('@s.whatsapp.net', '')).getNumber('international')
  }
  nhebotx.sendContact = async (jid, kontak, quoted = '', opts = {}) =>
  {
    let list = []
    for (let i of kontak)
    {
      list.push(
      {
        displayName: await nhebotx.getName(i),
        vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${await nhebotx.getName(i)}\nFN:${await nhebotx.getName(i)}\nitem1.TEL;waid=${i.split('@')[0]}:${i.split('@')[0]}\nitem1.X-ABLabel:Mobile\nEND:VCARD`
      })
    }
    nhebotx.sendMessage(jid,
    {
      contacts:
      {
        displayName: `${list.length} Contact`,
        contacts: list
      },
      ...opts
    },
    {
      quoted
    })
  }
  nhebotx.public = true
  nhebotx.serializeM = (m) => smsg(nhebotx, m, store)
  nhebotx.sendText = (jid, text, quoted = '', options) => nhebotx.sendMessage(jid,
  {
    text: text,
    ...options
  },
  {
    quoted,
    ...options
  })
  nhebotx.sendImage = async (jid, path, caption = '', quoted = '', options) =>
  {
    let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,` [1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
    return await nhebotx.sendMessage(jid,
    {
      image: buffer,
      caption: caption,
      ...options
    },
    {
      quoted
    })
  }
  nhebotx.sendTextWithMentions = async (jid, text, quoted, options = {}) => nhebotx.sendMessage(jid,
  {
    text: text,
    mentions: [...text.matchAll(/@(\d{0,16})/g)].map(v => v[1] + '@s.whatsapp.net'),
    ...options
  },
  {
    quoted
  })
  nhebotx.sendImageAsSticker = async (jid, path, quoted, options = {}) =>
  {
    let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,` [1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
    let buffer
    if (options && (options.packname || options.author))
    {
      buffer = await writeExifImg(buff, options)
    }
    else
    {
      buffer = await imageToWebp(buff)
    }
    await nhebotx.sendMessage(jid,
    {
      sticker:
      {
        url: buffer
      },
      ...options
    },
    {
      quoted
    }).then(response =>
    {
      fs.unlinkSync(buffer)
      return response
    })
  }
  nhebotx.sendAudio = async (jid, path, quoted = '', ptt = false, options) =>
  {
    let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,` [1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
    return await nhebotx.sendMessage(jid,
    {
      audio: buffer,
      ptt: ptt,
      ...options
    },
    {
      quoted
    })
  }
  nhebotx.sendVideo = async (jid, path, caption = '', quoted = '', gif = false, options) =>
  {
    let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,` [1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
    return await nhebotx.sendMessage(jid,
    {
      video: buffer,
      caption: caption,
      gifPlayback: gif,
      ...options
    },
    {
      quoted
    })
  }
  nhebotx.sendVideoAsSticker = async (jid, path, quoted, options = {}) =>
  {
    let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,` [1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
    let buffer
    if (options && (options.packname || options.author))
    {
      buffer = await writeExifVid(buff, options)
    }
    else
    {
      buffer = await videoToWebp(buff)
    }
    await nhebotx.sendMessage(jid,
    {
      sticker:
      {
        url: buffer
      },
      ...options
    },
    {
      quoted
    })
    return buffer
  }
  nhebotx.sendFileUrl = async (jid, url, caption, quoted, options = {}) =>
  {
    let mime = '';
    let res = await axios.head(url)
    mime = res.headers['content-type']
    if (mime.split("/")[1] === "gif")
    {
      return nhebotx.sendMessage(jid,
      {
        video: await getBuffer(url),
        caption: caption,
        gifPlayback: true,
        ...options
      },
      {
        quoted: quoted,
        ...options
      })
    }
    let type = mime.split("/")[0] + "Message"
    if (mime === "application/pdf")
    {
      return nhebotx.sendMessage(jid,
      {
        document: await getBuffer(url),
        mimetype: 'application/pdf',
        caption: caption,
        ...options
      },
      {
        quoted: quoted,
        ...options
      })
    }
    if (mime.split("/")[0] === "image")
    {
      return nhebotx.sendMessage(jid,
      {
        image: await getBuffer(url),
        caption: caption,
        ...options
      },
      {
        quoted: quoted,
        ...options
      })
    }
    if (mime.split("/")[0] === "video")
    {
      return nhebotx.sendMessage(jid,
      {
        video: await getBuffer(url),
        caption: caption,
        mimetype: 'video/mp4',
        ...options
      },
      {
        quoted: quoted,
        ...options
      })
    }
    if (mime.split("/")[0] === "audio")
    {
      return nhebotx.sendMessage(jid,
      {
        audio: await getBuffer(url),
        caption: caption,
        mimetype: 'audio/mpeg',
        ...options
      },
      {
        quoted: quoted,
        ...options
      })
    }
  }
  nhebotx.getFile = async (PATH, save) =>
  {
    let res
    let data = Buffer.isBuffer(PATH) ? PATH : /^data:.*?\/.*?;base64,/i.test(PATH) ? Buffer.from(PATH.split`,` [1], 'base64') : /^https?:\/\//.test(PATH) ? await (res = await getBuffer(PATH)) : fs.existsSync(PATH) ? (filename = PATH, fs.readFileSync(PATH)) : typeof PATH === 'string' ? PATH : Buffer.alloc(0)
    //if (!Buffer.isBuffer(data)) throw new TypeError('Result is not a buffer')
    let type = await FileType.fromBuffer(data) ||
    {
      mime: 'application/octet-stream',
      ext: '.bin'
    }
    filename = path.join(__filename, '../src/' + new Date * 1 + '.' + type.ext)
    if (data && save) fs.promises.writeFile(filename, data)
    return {
      res,
      filename,
      size: await getSizeMedia(data),
      ...type,
      data
    }
  }
  nhebotx.sendFile = async (jid, path, filename = '', caption = '', quoted, ptt = false, options = {}) =>
  {
    let type = await nhebotx.getFile(path, true);
    let
    {
      res,
      data: file,
      filename: pathFile
    } = type;
    if (res && res.status !== 200 || file.length <= 65536)
    {
      try
      {
        throw {
          json: JSON.parse(file.toString())
        };
      }
      catch (e)
      {
        if (e.json) throw e.json;
      }
    }
    let opt = {
      filename
    };
    if (quoted) opt.quoted = quoted;
    if (!type) options.asDocument = true;
    let mtype = '',
      mimetype = type.mime,
      convert;
    if (/webp/.test(type.mime) || (/image/.test(type.mime) && options.asSticker)) mtype = 'sticker';
    else if (/image/.test(type.mime) || (/webp/.test(type.mime) && options.asImage)) mtype = 'image';
    else if (/video/.test(type.mime)) mtype = 'video';
    else if (/audio/.test(type.mime))
    {
      convert = await (ptt ? toPTT : toAudio)(file, type.ext);
      file = convert.data;
      pathFile = convert.filename;
      mtype = 'audio';
      mimetype = 'audio/ogg; codecs=opus';
    }
    else mtype = 'document';
    if (options.asDocument) mtype = 'document';
    delete options.asSticker;
    delete options.asLocation;
    delete options.asVideo;
    delete options.asDocument;
    delete options.asImage;
    let message = {
      ...options,
      caption,
      ptt,
      [mtype]:
      {
        url: pathFile
      },
      mimetype
    };
    let m;
    try
    {
      m = await nhebotx.sendMessage(jid, message,
      {
        ...opt,
        ...options
      });
    }
    catch (e)
    {
      //console.error(e)
      m = null;
    }
    finally
    {
      if (!m) m = await nhebotx.sendMessage(jid,
      {
        ...message,
        [mtype]: file
      },
      {
        ...opt,
        ...options
      });
      file = null;
      return m;
    }
  }
  nhebotx.cMod = (jid, copy, text = '', sender = nhebotx.user.id, options = {}) =>
  {
    //let copy = message.toJSON()
    let mtype = Object.keys(copy.message)[0]
    let isEphemeral = mtype === 'ephemeralMessage'
    if (isEphemeral)
    {
      mtype = Object.keys(copy.message.ephemeralMessage.message)[0]
    }
    let msg = isEphemeral ? copy.message.ephemeralMessage.message : copy.message
    let content = msg[mtype]
    if (typeof content === 'string') msg[mtype] = text || content
    else if (content.caption) content.caption = text || content.caption
    else if (content.text) content.text = text || content.text
    if (typeof content !== 'string') msg[mtype] = {
      ...content,
      ...options
    }
    if (copy.key.participant) sender = copy.key.participant = sender || copy.key.participant
    else if (copy.key.participant) sender = copy.key.participant = sender || copy.key.participant
    if (copy.key.remoteJid.includes('@s.whatsapp.net')) sender = sender || copy.key.remoteJid
    else if (copy.key.remoteJid.includes('@broadcast')) sender = sender || copy.key.remoteJid
    copy.key.remoteJid = jid
    copy.key.fromMe = sender === nhebotx.user.id
    return proto.WebMessageInfo.fromObject(copy)
  }
  nhebotx.sendMedia = async (jid, path, fileName = '', caption = '', quoted = '', options = {}) =>
  {
    let types = await nhebotx.getFile(path, true)
    let
    {
      mime,
      ext,
      res,
      data,
      filename
    } = types
    if (res && res.status !== 200 || file.length <= 65536)
    {
      try
      {
        throw {
          json: JSON.parse(file.toString())
        }
      }
      catch (e)
      {
        if (e.json) throw e.json
      }
    }
    let type = '',
      mimetype = mime,
      pathFile = filename
    if (options.asDocument) type = 'document'
    if (options.asSticker || /webp/.test(mime))
    {
      let
      {
        writeExif
      } = require('./lib/scp/exif')
      let media = {
        mimetype: mime,
        data
      }
      pathFile = await writeExif(media,
      {
        packname: options.packname ? options.packname : global.packname,
        author: options.author ? options.author : global.author,
        categories: options.categories ? options.categories : []
      })
      await fs.promises.unlink(filename)
      type = 'sticker'
      mimetype = 'image/webp'
    }
    else if (/image/.test(mime)) type = 'image'
    else if (/video/.test(mime)) type = 'video'
    else if (/audio/.test(mime)) type = 'audio'
    else type = 'document'
    await nhebotx.sendMessage(jid,
    {
      [type]:
      {
        url: pathFile
      },
      caption,
      mimetype,
      fileName,
      ...options
    },
    {
      quoted,
      ...options
    })
    return fs.promises.unlink(pathFile)
  }
  nhebotx.copyNForward = async (jid, message, forceForward = false, options = {}) =>
  {
    let vtype
    if (options.readViewOnce)
    {
      message.message = message.message && message.message.ephemeralMessage && message.message.ephemeralMessage.message ? message.message.ephemeralMessage.message : (message.message || undefined)
      vtype = Object.keys(message.message.viewOnceMessage.message)[0]
      delete(message.message && message.message.ignore ? message.message.ignore : (message.message || undefined))
      delete message.message.viewOnceMessage.message[vtype].viewOnce
      message.message = {
        ...message.message.viewOnceMessage.message
      }
    }
    let mtype = Object.keys(message.message)[0]
    let content = await generateForwardMessageContent(message, forceForward)
    let ctype = Object.keys(content)[0]
    let context = {}
    if (mtype != "conversation") context = message.message[mtype].contextInfo
    content[ctype].contextInfo = {
      ...context,
      ...content[ctype].contextInfo
    }
    const waMessage = await generateWAMessageFromContent(jid, content, options ?
    {
      ...content[ctype],
      ...options,
      ...(options.contextInfo ?
      {
        contextInfo:
        {
          ...content[ctype].contextInfo,
          ...options.contextInfo
        }
      } :
      {})
    } :
    {})
    await nhebotx.relayMessage(jid, waMessage.message,
    {
      messageId: waMessage.key.id
    })
    return waMessage
  }
  nhebotx.parseMention = (text = '') =>
  {
    return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')
  }
  nhebotx.downloadAndSaveMediaMessage = async (message, filename, attachExtension = true) =>
  {
    let quoted = message.msg ? message.msg : message
    let mime = (message.msg || message).mimetype || ''
    let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
    const stream = await downloadContentFromMessage(quoted, messageType)
    let buffer = Buffer.from([])
    for await (const chunk of stream)
    {
      buffer = Buffer.concat([buffer, chunk])
    }
    let type = await FileType.fromBuffer(buffer)
    let trueFileName = attachExtension ? ('./temp/' + filename + '.' + type.ext) : './temp/' + filename
    await fs.writeFileSync(trueFileName, buffer)
    return trueFileName
  }
  nhebotx.downloadMediaMessage = async (message) =>
  {
    let mime = (message.msg || message).mimetype || ''
    let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
    const stream = await downloadContentFromMessage(message, messageType)
    let buffer = Buffer.from([])
    for await (const chunk of stream)
    {
      buffer = Buffer.concat([buffer, chunk])
    }
    return buffer
  }
  return nhebotx
};
startnhebotx();

function smsg(nhebotx, m, store)
{
  if (!m) return m
  let M = proto.WebMessageInfo
  if (m.key)
  {
    m.id = m.key.id
    m.isBaileys = m.id.startsWith('BAE5') && m.id.length === 16
    m.chat = m.key.remoteJid
    m.fromMe = m.key.fromMe
    m.isGroup = m.chat.endsWith('@g.us')
    m.sender = nhebotx.decodeJid(m.fromMe && nhebotx.user.id || m.participant || m.key.participant || m.chat || '')
    if (m.isGroup) m.participant = nhebotx.decodeJid(m.key.participant) || ''
  }
  if (m.message)
  {
    m.mtype = getContentType(m.message)
    m.msg = (m.mtype == 'viewOnceMessage' ? m.message[m.mtype].message[getContentType(m.message[m.mtype].message)] : m.message[m.mtype])
    m.body = m.message.conversation || m.msg.caption || m.msg.text || (m.mtype == 'listResponseMessage') && m.msg.singleSelectReply.selectedRowId || (m.mtype == 'buttonsResponseMessage') && m.msg.selectedButtonId || (m.mtype == 'viewOnceMessage') && m.msg.caption || m.text
    let quoted = m.quoted = m.msg.contextInfo ? m.msg.contextInfo.quotedMessage : null
    m.mentionedJid = m.msg.contextInfo ? m.msg.contextInfo.mentionedJid : []
    if (m.quoted)
    {
      let type = getContentType(quoted)
      m.quoted = m.quoted[type]
      if (['productMessage'].includes(type))
      {
        type = getContentType(m.quoted)
        m.quoted = m.quoted[type]
      }
      if (typeof m.quoted === 'string') m.quoted = {
        text: m.quoted
      }
      m.quoted.mtype = type
      m.quoted.id = m.msg.contextInfo.stanzaId
      m.quoted.chat = m.msg.contextInfo.remoteJid || m.chat
      m.quoted.isBaileys = m.quoted.id ? m.quoted.id.startsWith('BAE5') && m.quoted.id.length === 16 : false
      m.quoted.sender = nhebotx.decodeJid(m.msg.contextInfo.participant)
      m.quoted.fromMe = m.quoted.sender === nhebotx.decodeJid(nhebotx.user.id)
      m.quoted.text = m.quoted.text || m.quoted.caption || m.quoted.conversation || m.quoted.contentText || m.quoted.selectedDisplayText || m.quoted.title || ''
      m.quoted.mentionedJid = m.msg.contextInfo ? m.msg.contextInfo.mentionedJid : []
      m.getQuotedObj = m.getQuotedMessage = async () =>
      {
        if (!m.quoted.id) return false
        let q = await store.loadMessage(m.chat, m.quoted.id, conn)
        return exports.smsg(conn, q, store)
      }
      let vM = m.quoted.fakeObj = M.fromObject(
      {
        key:
        {
          remoteJid: m.quoted.chat,
          fromMe: m.quoted.fromMe,
          id: m.quoted.id
        },
        message: quoted,
        ...(m.isGroup ?
        {
          participant: m.quoted.sender
        } :
        {})
      })
      m.quoted.delete = () => nhebotx.sendMessage(m.quoted.chat,
      {
        delete: vM.key
      })
      m.quoted.copyNForward = (jid, forceForward = false, options = {}) => nhebotx.copyNForward(jid, vM, forceForward, options)
      m.quoted.download = () => nhebotx.downloadMediaMessage(m.quoted)
    }
  }
  if (m.msg.url) m.download = () => nhebotx.downloadMediaMessage(m.msg)
  m.text = m.msg.text || m.msg.caption || m.message.conversation || m.msg.contentText || m.msg.selectedDisplayText || m.msg.title || ''
  m.reply = (text, chatId = m.chat, options = {}) => Buffer.isBuffer(text) ? nhebotx.sendMedia(chatId, text, 'file', '', m,
  {
    ...options
  }) : nhebotx.sendText(chatId, text, m,
  {
    ...options
  })
  m.copy = () => exports.smsg(conn, M.fromObject(M.toObject(m)))
  m.copyNForward = (jid = m.chat, forceForward = false, options = {}) => nhebotx.copyNForward(jid, m, forceForward, options)
  return m
}
process.on('uncaughtException', function(err)
{
  let e = String(err)
  if (e.includes("conflict")) return
  if (e.includes("Cannot derive from empty media key")) return
  if (e.includes("Socket connection timeout")) return
  if (e.includes("not-authorized")) return
  if (e.includes("already-exists")) return
  if (e.includes("rate-overlimit")) return
  if (e.includes("Connection Closed")) return
  if (e.includes("Timed Out")) return
  if (e.includes("Value not found")) return
  console.log('Caught exception: ', err)
})
/*
     Thanks You For:
     nhebotx Botz ⚡
     Yurins? Yuda-Orlin 💘💧
     Tngx - Lintang (Donat🍩)
     Zoi 🪨
     Ruri 🌈
     HenriqueX ☢️
     Puguh 🛡️
     RicoRoyco 🔥
  Mau ganti owner? di file ./owner.json
  Note: Jangan hapus tqto diatas, tanpa dia kalian ga bakal bisa dapet sc ini‼️
*/