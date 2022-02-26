const CardanocliJs = require("cardanocli-js");
const os = require("os");
const path = require("path");

const dir = path.join(os.homedir(), "projects/cardano-minter");
const shelleyPath = path.join(
  os.homedir(),
  "testnet-shelley-genesis.json"
);

// Change to mainnet for mainnet minting
const cardanocliJs = new CardanocliJs({
//   era: "mary",
  network: `testnet`,
  dir,
  shelleyGenesisPath: shelleyPath,
});

module.exports = cardanocliJs