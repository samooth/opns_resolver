import 'dotenv/config'
import ordexplorer from 'ordexplorer'
import bsv2 from 'bsv2'
let { PrivKey, PubKey, KeyPair, Ecdsa, Hash } = bsv2

// Resolve OPNS Domains ( PoW Tokenized Domains )
export const opns_resolve = ( domain )=>{
	if (!domain || typeof domain != "string" || domain.length==0) throw new Error("domain string needed as arg")
		return ordexplorer.opns.get(domain)
}

export const opns_resolver = async ( req, res, next )=>{
	if (!process.env.resolv_privates) console.log("Create .env file with private key in hex format:\n\n resolv_private=YOUR_KEY") & console.log("Random Privte Key: ", PrivKey.fromRandom().toString("hex")) & process.exit()
	if ( !req?.domain ) res.status(404).json({ error: "Ask for an OPNS domain, and i'll tell you where it came and where it is"})

	let privada = PrivKey.fromString(process.env.resolv_private)
	let clave = KeyPair.fromPrivKey(privada)
	let pubKey = clave.pubKey.toString()
	console.log( "Server PubKey: ", pubKey )
	let apiResponse = await ordexplorer.opns.get(domain)
	let preImg = Buffer.from(JSON.stringify(apiResponse),"utf8")
	let hash = Hash.sha256(preImg)
	let firmaEcdsa = Ecdsa.sign(hash, clave,'little')

	let signedResponse = {
		opnsData: res,
		pubKey,
		signature: firmaEcdsa.toString(),
		endian: 'little'
	}

	res.send( signedResponse )
}


export const opns_serverPubKey = async ( req, res, next )=>{
	res.status(404).json({ error: "no domain queries"})
	res.send( opns_resolve(req.domain) )
}
