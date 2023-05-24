import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: {
    compilers: [
      {
        version: "0.5.15",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
      {
        version: "0.8.17",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
    ],
  },
  networks: {
    goerli: {
      url: `https://eth-goerli.g.alchemy.com/v2/`,
      accounts: [],
    },
    mainnet: {
      url: `https://eth-mainnet.g.alchemy.com/v2/`,
      accounts: [],
    },
    sepolia: {
      url: `https://eth-sepolia.g.alchemy.com/v2/`,
      accounts: [],
    },
    zkSyncTestnet: {
      url: "https://testnet.era.zksync.dev",
      accounts: [],
    },
  },
  gasReporter: {
    enabled: false,
    currency: "USD",
    gasPrice: 20,
    coinmarketcap: "",
    gasPriceApi: "",
    token: "ETH",
  },
  etherscan: {
    apiKey: {
      goerli: "",
    },
  },
};

export default config;
