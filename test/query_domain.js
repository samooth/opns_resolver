import { opns_resolve, opns_resolver, opns_serverPubKey } from  "../index.js"

let domain = "bsvdirect"
let response = await opns_resolve( domain )
console.log("Response: ")
console.table(response)

// Apply to Express test
// if (!response?.pubKey|| !response?.opnsData || !response?.signature || !response?.endian ) console.log("Error on the response content\n", response) & process.exit()


