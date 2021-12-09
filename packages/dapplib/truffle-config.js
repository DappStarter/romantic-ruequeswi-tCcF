require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'include kiwi flame table educate ranch remind exchange grace merry flock train'; 
let testAccounts = [
"0xe4d0aeca320c6c1cc1c9ec14acf1d07fab71d8c4b0223afdfc34e085e309f3fb",
"0x95231f736ef86ac4a79ffa6e1fec71642d304a3be703ed71a7828fe74026a945",
"0x92326423c0ace7b8ea4f3124194faa0ab0064ec42054fd4895ec9f4344fbe7b1",
"0x885879fca9458322a9b3443d07f3838a6f0ce3944aaa4b3a8202a53a589ee901",
"0xaa4195223f221daeece6eebdbc370e5b775ca458434efd5e56d3e54713771303",
"0xde8bc5a19bacde105da0c9bd54307b207058b50954ce36f79d300c328757105e",
"0xe3f6bfb3685f6c3dc7b2490170ef37cbd4f06852cad0bf8923fcadaa6747907f",
"0x918573dc233099a9675220f76dc957f4be004da0cf6407bf70862b0b5ec53977",
"0x1fff2d0f6384029abf63c7403826fc3974dbb7dd8d70376151bb5eeccdb8f032",
"0x1cd5e4b3c9266ee52929a97f849c087b873ddc49a571996d5076132cbd07cc6d"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


