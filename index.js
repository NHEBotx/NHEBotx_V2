/*
        * SEKALI LAGI MAKASIH YA KING 👑
        * BERKAH SELALU KING 🔥
        * SEMOGA KEBERUNTUNGAN SELALU DATANG KEPADAMU ☘️
        * TNGX - Lintang Pratama Aditya Kusuma
*/

const { spawn } = require('child_process')
const path = require('path')

function startnhebotx() {
	let args = [path.join(__dirname, 'main.js'), ...process.argv.slice(2)]
	console.log([process.argv[0], ...args].join('\n'))
	let p = spawn(process.argv[0], args, {
		stdio: ['inherit', 'inherit', 'inherit', 'ipc']
	})
	.on('message', data => {
		if (data == 'reset') {
			console.log('Restarting Bot...')
			p.kill()
			startnhebotx()
			delete p
		}
	})
	.on('exit', code => {
		console.error('Exited with code:', code)
		if (code == '.' || code == 1 || code == 0) startnhebotx()
	})
}
startnhebotx()
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