import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import { defineChain } from 'viem';

const projectId =
  process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID || 'YOUR_PROJECT_ID';

// BOT Chain Configuration
export const botchain = defineChain({
  id: 677,
  name: 'BOT Chain Mainnet',
  nativeCurrency: {
    name: 'BOT',
    symbol: 'BOT',
    decimals: 18,
  },
  rpcUrls: {
    default: {
      http: ['https://rpc.botchain.ai'],
      webSocket: ['wss://ws-rpc.botchain.ai'],
    },
  },
  blockExplorers: {
    default: {
      name: 'Botscan',
      url: 'https://scan.botchain.ai',
    },
  },
});

// RainbowKit Configuration
export const config = getDefaultConfig({
  appName: 'Scam Detection',

  projectId,

  chains: [
    botchain
  ],

  ssr: true,
});

declare module 'wagmi' {
  interface Register {
    config: typeof config;
  }
}