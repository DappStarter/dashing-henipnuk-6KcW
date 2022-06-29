require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good argue sure spot toy note pave punch harvest lock outer strike'; 
let testAccounts = [
"0xaf40401ae88b33974dc245ba8983bc19361823b27834ee735fb5a52d678bf37d",
"0xc91bf42ae87780bdbe5f6d986f7387a6ecf7bbabb3d7be37dc265ac83a67b6a7",
"0x773ca021a4cac0eb4b6852763b982913e74b6bb9140f3542c73ef54d261e4c2f",
"0xd52445d04d1457a566a2f7ce684cd8afd3c66643ed1c096acbaf563802c0f2a1",
"0x4fae65fd9a35735175d52c37ac48d1c8af32f674628dbdc24765f053bcc8cc88",
"0x94d2787637be9fea9d1eae833dde7e516a4d352a2b5f790eb283bf0cce07f5cc",
"0xb1e09777de5498bb0cbb4c7b46b7bb85077b0ddfd4edb8b35de4245a16d40148",
"0x6a650282b4ab38a30db2bac1d40e541b51350641c0c38b903c30f6ac1c799f91",
"0xe5b1b6be9d3d05f76b91e5c6bf3df949f4f1744c5ac07f68316144a6f236b76f",
"0x5f59424ab1c7ab92068b367bfc082e1b8d5c0e252b7d8263cc507a6ea67a0e58"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

