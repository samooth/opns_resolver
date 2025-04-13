import test from 'tape'

import { opns_resolve, opns_resolver, opns_serverPubKey } from  "../index.js"

test('Resolving opns domain', async function (t){
	let domain = "bsvdirect"
	let response = await opns_resolve( domain )
	console.log("Response: ")
	console.table(response)	
	t.deepEqual(response.domain, 'bsvdirect')
	t.deepEqual(response.owner, '19YGez4yoDDz67GMdEHhFEFmXFK9BdNVUP')
	t.deepEqual(response.outpoint, '2516af0bccc0272fa3492a830299f52d698e6ca1b951720de3cced3c5a3caabb_2')
	t.end()
})


// Apply to Express test
// if (!response?.pubKey|| !response?.opnsData || !response?.signature || !response?.endian ) console.log("Error on the response content\n", response) & process.exit()


