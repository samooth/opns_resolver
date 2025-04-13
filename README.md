# OPNS Resolver

OPNS are PoW domains built as 1satordinal on the Bitcoin SV Blockchain, this module provides function and express middleware to resolve OPNS domains

![Dynamic JSON Badge](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fraw.githubusercontent.com%2Fsamooth%2Fopns_resolver%2Frefs%2Fheads%2Fmain%2Fpackage.json&query=version&label=semver)

## opns_resolve( domain )

Basic function to call api an resolve an OPNS Domain

```javascript
import { opns_resolve } from  "opns_resolver"

let domain = "bsvdirect"
let response = await opns_resolve( domain )
let { outpoint, origin, owner } = response

```

## opns_serverPubKey()

Express controller that responds with server public key

## opns_resolver( domain )

Express controller that calls to opns_resolve and responds with signed domain resolution


#### Links

[OP-NS documentation](https://op0-2.gitbook.io/op-standard/protocols/op_ns)

[Github repo from original Smart Contract](https://github.com/op-enheimer/op-ns)