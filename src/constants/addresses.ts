import { AddressMap } from '../types'
import { ChainId } from '../enums'

export const USDC_ADDRESS: AddressMap = {
  [ChainId.MAINNET]: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
  [ChainId.ROPSTEN]: '0x0D9C8723B343A8368BebE0B5E89273fF8D712e3C',
  [ChainId.KOVAN]: '0xb7a4F3E9097C08dA09517b5aB877F7a917224ede',
  [ChainId.MATIC]: '0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174',
  [ChainId.FANTOM]: '0x04068DA6C83AFCFA0e13ba15A6696662335D5B75',
  [ChainId.BSC]: '0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d',
  [ChainId.HARMONY]: '0x985458E523dB3d53125813eD68c274899e9DfAb4',
  [ChainId.HECO]: '0x9362Bbef4B8313A8Aa9f0c9808B80577Aa26B73B',
  [ChainId.OKEX]: '0xc946DAf81b08146B1C7A8Da2A851Ddf2B3EAaf85',
  [ChainId.XDAI]: '0xDDAfbb505ad214D7b80b1f830fcCc89B60fb7A83',
  [ChainId.ARBITRUM]: '0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8',
  [ChainId.AVALANCHE]: '0xA7D7079b0FEaD91F3e65f86E8915Cb59c1a4C664'
}

export const FACTORY_ADDRESS: AddressMap = {
  [ChainId.MAINNET]: '0x53786c562146Bd864918e755F919711b0DE39C1E',
  [ChainId.ROPSTEN]: '0x53786c562146Bd864918e755F919711b0DE39C1E',
  [ChainId.RINKEBY]: '0x53786c562146Bd864918e755F919711b0DE39C1E',
  [ChainId.GÖRLI]: '0x53786c562146Bd864918e755F919711b0DE39C1E',
  [ChainId.KOVAN]: '0x53786c562146Bd864918e755F919711b0DE39C1E',
  [ChainId.FANTOM]: '0x53786c562146Bd864918e755F919711b0DE39C1E',
  [ChainId.FANTOM_TESTNET]: '0x53786c562146Bd864918e755F919711b0DE39C1E',
  [ChainId.MATIC]: '0x53786c562146Bd864918e755F919711b0DE39C1E',
  [ChainId.MATIC_TESTNET]: '0x53786c562146Bd864918e755F919711b0DE39C1E',
  [ChainId.XDAI]: '0x53786c562146Bd864918e755F919711b0DE39C1E',
  [ChainId.BSC]: '0x53786c562146Bd864918e755F919711b0DE39C1E',
  [ChainId.BSC_TESTNET]: '0x53786c562146Bd864918e755F919711b0DE39C1E',
  [ChainId.ARBITRUM]: '0x53786c562146Bd864918e755F919711b0DE39C1E',
  [ChainId.ARBITRUM_TESTNET]: '0x53786c562146Bd864918e755F919711b0DE39C1E',
  [ChainId.MOONBEAM_TESTNET]: '0x53786c562146Bd864918e755F919711b0DE39C1E',
  [ChainId.AVALANCHE]: '0x53786c562146Bd864918e755F919711b0DE39C1E',
  [ChainId.AVALANCHE_TESTNET]: '0x53786c562146Bd864918e755F919711b0DE39C1E',
  [ChainId.HECO]: '0x53786c562146Bd864918e755F919711b0DE39C1E',
  [ChainId.HECO_TESTNET]: '0x53786c562146Bd864918e755F919711b0DE39C1E',
  [ChainId.HARMONY]: '0x53786c562146Bd864918e755F919711b0DE39C1E',
  [ChainId.HARMONY_TESTNET]: '0x53786c562146Bd864918e755F919711b0DE39C1E',
  [ChainId.OKEX]: '0x53786c562146Bd864918e755F919711b0DE39C1E',
  [ChainId.OKEX_TESTNET]: '0x53786c562146Bd864918e755F919711b0DE39C1E',
  [ChainId.CELO]: '0x53786c562146Bd864918e755F919711b0DE39C1E',
  [ChainId.PALM]: '0x53786c562146Bd864918e755F919711b0DE39C1E',
  [ChainId.PALM_TESTNET]: '0x53786c562146Bd864918e755F919711b0DE39C1E',
  [ChainId.MOONRIVER]: '0x53786c562146Bd864918e755F919711b0DE39C1E',
  [ChainId.FUSE]: '0x53786c562146Bd864918e755F919711b0DE39C1E'
}

export const ROUTER_ADDRESS: AddressMap = {
  [ChainId.MAINNET]: '0xF0948333601e1e7BCdcFfDFd555EF144d2E56EbC',
  [ChainId.RINKEBY]: '0xF0948333601e1e7BCdcFfDFd555EF144d2E56EbC',
  [ChainId.ROPSTEN]: '0xF0948333601e1e7BCdcFfDFd555EF144d2E56EbC',
  [ChainId.GÖRLI]: '0xF0948333601e1e7BCdcFfDFd555EF144d2E56EbC',
  [ChainId.KOVAN]: '0xF0948333601e1e7BCdcFfDFd555EF144d2E56EbC',
  [ChainId.FANTOM]: '0xF0948333601e1e7BCdcFfDFd555EF144d2E56EbC',
  [ChainId.FANTOM_TESTNET]: '0xF0948333601e1e7BCdcFfDFd555EF144d2E56EbC',
  [ChainId.MATIC]: '0xF0948333601e1e7BCdcFfDFd555EF144d2E56EbC',
  [ChainId.MATIC_TESTNET]: '0xF0948333601e1e7BCdcFfDFd555EF144d2E56EbC',
  [ChainId.XDAI]: '0xF0948333601e1e7BCdcFfDFd555EF144d2E56EbC',
  [ChainId.BSC]: '0xF0948333601e1e7BCdcFfDFd555EF144d2E56EbC',
  [ChainId.BSC_TESTNET]: '0xF0948333601e1e7BCdcFfDFd555EF144d2E56EbC',
  [ChainId.ARBITRUM]: '0xF0948333601e1e7BCdcFfDFd555EF144d2E56EbC',
  [ChainId.ARBITRUM_TESTNET]: '0xF0948333601e1e7BCdcFfDFd555EF144d2E56EbC',
  [ChainId.MOONBEAM_TESTNET]: '0xF0948333601e1e7BCdcFfDFd555EF144d2E56EbC',
  [ChainId.AVALANCHE]: '0xF0948333601e1e7BCdcFfDFd555EF144d2E56EbC',
  [ChainId.AVALANCHE_TESTNET]: '0xF0948333601e1e7BCdcFfDFd555EF144d2E56EbC',
  [ChainId.HECO]: '0xF0948333601e1e7BCdcFfDFd555EF144d2E56EbC',
  [ChainId.HECO_TESTNET]: '0xF0948333601e1e7BCdcFfDFd555EF144d2E56EbC',
  [ChainId.HARMONY]: '0xF0948333601e1e7BCdcFfDFd555EF144d2E56EbC',
  [ChainId.HARMONY_TESTNET]: '0xF0948333601e1e7BCdcFfDFd555EF144d2E56EbC',
  [ChainId.OKEX]: '0xF0948333601e1e7BCdcFfDFd555EF144d2E56EbC',
  [ChainId.OKEX_TESTNET]: '0xF0948333601e1e7BCdcFfDFd555EF144d2E56EbC',
  [ChainId.CELO]: '0xF0948333601e1e7BCdcFfDFd555EF144d2E56EbC',
  [ChainId.PALM]: '0xF0948333601e1e7BCdcFfDFd555EF144d2E56EbC',
  [ChainId.PALM_TESTNET]: '0xF0948333601e1e7BCdcFfDFd555EF144d2E56EbC',
  [ChainId.MOONRIVER]: '0xF0948333601e1e7BCdcFfDFd555EF144d2E56EbC',
  [ChainId.FUSE]: '0xF0948333601e1e7BCdcFfDFd555EF144d2E56EbC'
}

export const FNA_ADDRESS: AddressMap = {
  [ChainId.MAINNET]: '0x214640AE606C18F15062d593C701BC8eF0CB00F7',
  [ChainId.ROPSTEN]: '0x214640AE606C18F15062d593C701BC8eF0CB00F7',
  [ChainId.RINKEBY]: '0x214640AE606C18F15062d593C701BC8eF0CB00F7',
  [ChainId.GÖRLI]: '0x214640AE606C18F15062d593C701BC8eF0CB00F7',
  [ChainId.KOVAN]: '0x214640AE606C18F15062d593C701BC8eF0CB00F7',
  [ChainId.FANTOM]: '0x214640AE606C18F15062d593C701BC8eF0CB00F7',
  [ChainId.MATIC]: '0x214640AE606C18F15062d593C701BC8eF0CB00F7',
  [ChainId.XDAI]: '0x214640AE606C18F15062d593C701BC8eF0CB00F7',
  [ChainId.BSC]: '0x214640AE606C18F15062d593C701BC8eF0CB00F7',
  [ChainId.BSC_TESTNET]: '0x214640AE606C18F15062d593C701BC8eF0CB00F7',
  [ChainId.ARBITRUM]: '0x214640AE606C18F15062d593C701BC8eF0CB00F7',
  [ChainId.AVALANCHE]: '0x214640AE606C18F15062d593C701BC8eF0CB00F7',
  [ChainId.HECO]: '0x214640AE606C18F15062d593C701BC8eF0CB00F7',
  [ChainId.HARMONY]: '0x214640AE606C18F15062d593C701BC8eF0CB00F7',
  [ChainId.OKEX]: '0x214640AE606C18F15062d593C701BC8eF0CB00F7',
  [ChainId.OKEX_TESTNET]: '0x214640AE606C18F15062d593C701BC8eF0CB00F7',
  [ChainId.CELO]: '0x214640AE606C18F15062d593C701BC8eF0CB00F7',
  [ChainId.PALM]: '0x214640AE606C18F15062d593C701BC8eF0CB00F7',
  [ChainId.PALM_TESTNET]: '0x214640AE606C18F15062d593C701BC8eF0CB00F7'
}

export const MASTERCHEF_ADDRESS: AddressMap = {
  [ChainId.MAINNET]: '0xd1aF754733f0c205a6bb07Cd5Cd07B39184321f7',
  [ChainId.ROPSTEN]: '0xd1aF754733f0c205a6bb07Cd5Cd07B39184321f7',
  [ChainId.RINKEBY]: '0xd1aF754733f0c205a6bb07Cd5Cd07B39184321f7',
  [ChainId.GÖRLI]: '0xd1aF754733f0c205a6bb07Cd5Cd07B39184321f7',
  [ChainId.KOVAN]: '0xd1aF754733f0c205a6bb07Cd5Cd07B39184321f7'
}

export const BAR_ADDRESS: AddressMap = {
  [ChainId.MAINNET]: '0xABC423971B5A13e01F70CA50354f75A4Df97440a',
  [ChainId.ROPSTEN]: '0xABC423971B5A13e01F70CA50354f75A4Df97440a',
  [ChainId.RINKEBY]: '0xABC423971B5A13e01F70CA50354f75A4Df97440a',
  [ChainId.GÖRLI]: '0xABC423971B5A13e01F70CA50354f75A4Df97440a',
  [ChainId.KOVAN]: '0xABC423971B5A13e01F70CA50354f75A4Df97440a'
}

export const MAKER_ADDRESS: AddressMap = {
  [ChainId.MAINNET]: '0x92ad2e78553C9E7EF54b062105Ce0017eA31233d',
  [ChainId.ROPSTEN]: '0x92ad2e78553C9E7EF54b062105Ce0017eA31233d',
  [ChainId.RINKEBY]: '0x92ad2e78553C9E7EF54b062105Ce0017eA31233d',
  [ChainId.GÖRLI]: '0x92ad2e78553C9E7EF54b062105Ce0017eA31233d',
  [ChainId.KOVAN]: '0x92ad2e78553C9E7EF54b062105Ce0017eA31233d'
}

export const TIMELOCK_ADDRESS: AddressMap = {
  [ChainId.MAINNET]: '0x9a8541Ddf3a932a9A922B607e9CF7301f1d47bD1'
}

export const BENTOBOX_ADDRESS: AddressMap = {
  [ChainId.MAINNET]: '0xF5BCE5077908a1b7370B9ae04AdC565EBd643966',
  [ChainId.ROPSTEN]: '0xF5BCE5077908a1b7370B9ae04AdC565EBd643966',
  [ChainId.RINKEBY]: '0xF5BCE5077908a1b7370B9ae04AdC565EBd643966',
  [ChainId.GÖRLI]: '0xF5BCE5077908a1b7370B9ae04AdC565EBd643966',
  [ChainId.KOVAN]: '0xF5BCE5077908a1b7370B9ae04AdC565EBd643966',
  [ChainId.FANTOM]: '0xF5BCE5077908a1b7370B9ae04AdC565EBd643966',
  [ChainId.MATIC]: '0xF5BCE5077908a1b7370B9ae04AdC565EBd643966',
  [ChainId.MATIC_TESTNET]: '0xF5BCE5077908a1b7370B9ae04AdC565EBd643966',
  [ChainId.XDAI]: '0xF5BCE5077908a1b7370B9ae04AdC565EBd643966',
  [ChainId.BSC]: '0xF5BCE5077908a1b7370B9ae04AdC565EBd643966',
  [ChainId.BSC_TESTNET]: '0xF5BCE5077908a1b7370B9ae04AdC565EBd643966',
  [ChainId.ARBITRUM]: '0xF5BCE5077908a1b7370B9ae04AdC565EBd643966',
  [ChainId.AVALANCHE]: '0xF5BCE5077908a1b7370B9ae04AdC565EBd643966',
  [ChainId.HECO]: '0xF5BCE5077908a1b7370B9ae04AdC565EBd643966'
}

export const KASHI_ADDRESS: AddressMap = {
  [ChainId.MAINNET]: '0x2cBA6Ab6574646Badc84F0544d05059e57a5dc42',
  [ChainId.KOVAN]: '0x2cBA6Ab6574646Badc84F0544d05059e57a5dc42',
  [ChainId.MATIC]: '0x2cBA6Ab6574646Badc84F0544d05059e57a5dc42',
  [ChainId.XDAI]: '0x2cBA6Ab6574646Badc84F0544d05059e57a5dc42',
  [ChainId.BSC]: '0x2cBA6Ab6574646Badc84F0544d05059e57a5dc42',
  [ChainId.ARBITRUM]: '0x2cBA6Ab6574646Badc84F0544d05059e57a5dc42',
  [ChainId.AVALANCHE]: '0x2cBA6Ab6574646Badc84F0544d05059e57a5dc42',
  [ChainId.AVALANCHE_TESTNET]: '0x2cBA6Ab6574646Badc84F0544d05059e57a5dc42',
  [ChainId.HECO]: '0x2cBA6Ab6574646Badc84F0544d05059e57a5dc42'
}

export const FINASWAP_SWAPPER_ADDRESS: AddressMap = {
  [ChainId.MAINNET]: '0x1766733112408b95239aD1951925567CB1203084',
  [ChainId.MATIC]: '0x1766733112408b95239aD1951925567CB1203084',
  [ChainId.XDAI]: '0x1766733112408b95239aD1951925567CB1203084',
  [ChainId.BSC]: '0x1766733112408b95239aD1951925567CB1203084',
  [ChainId.ARBITRUM]: '0x1766733112408b95239aD1951925567CB1203084',
  [ChainId.AVALANCHE]: '0x1766733112408b95239aD1951925567CB1203084',
  [ChainId.HECO]: '0x1766733112408b95239aD1951925567CB1203084'
}

export const FINASWAP_MULTISWAPPER_ADDRESS: AddressMap = {
  [ChainId.MAINNET]: '0x545820d5Cc05248da112419fEfb18522c63C8e12',
  [ChainId.KOVAN]: '0x545820d5Cc05248da112419fEfb18522c63C8e12',
  [ChainId.MATIC]: '0x545820d5Cc05248da112419fEfb18522c63C8e12',
  [ChainId.XDAI]: '0x545820d5Cc05248da112419fEfb18522c63C8e12',
  [ChainId.BSC]: '0x545820d5Cc05248da112419fEfb18522c63C8e12',
  [ChainId.ARBITRUM]: '0x545820d5Cc05248da112419fEfb18522c63C8e12',
  [ChainId.AVALANCHE]: '0x545820d5Cc05248da112419fEfb18522c63C8e12'
}

export const FINASWAP_MULTI_EXACT_SWAPPER_ADDRESS: AddressMap = {
  [ChainId.MAINNET]: '0xB527C5295c4Bc348cBb3a2E96B2494fD292075a7',
  [ChainId.KOVAN]: '0xB527C5295c4Bc348cBb3a2E96B2494fD292075a7',
  [ChainId.MATIC]: '0xB527C5295c4Bc348cBb3a2E96B2494fD292075a7',
  [ChainId.XDAI]: '0xB527C5295c4Bc348cBb3a2E96B2494fD292075a7',
  [ChainId.BSC]: '0xB527C5295c4Bc348cBb3a2E96B2494fD292075a7',
  [ChainId.ARBITRUM]: '0xB527C5295c4Bc348cBb3a2E96B2494fD292075a7',
  [ChainId.AVALANCHE]: '0xB527C5295c4Bc348cBb3a2E96B2494fD292075a7'
}

export const PEGGED_ORACLE_ADDRESS = '0x6cbfbB38498Df0E1e7A4506593cDB02db9001564'

export const FINASWAP_TWAP_0_ORACLE_ADDRESS = '0x66F03B0d30838A3fee971928627ea6F59B236065'

export const FINASWAP_TWAP_1_ORACLE_ADDRESS = '0x0D51b575591F8f74a2763Ade75D3CDCf6789266f'

export const CHAINLINK_ORACLE_ADDRESS: AddressMap = {
  [ChainId.MAINNET]: '0x00632CFe43d8F9f8E6cD0d39Ffa3D4fa7ec73CFB',
  [ChainId.MATIC]: '0x00632CFe43d8F9f8E6cD0d39Ffa3D4fa7ec73CFB',
  [ChainId.XDAI]: '0x00632CFe43d8F9f8E6cD0d39Ffa3D4fa7ec73CFB',
  [ChainId.BSC]: '0x00632CFe43d8F9f8E6cD0d39Ffa3D4fa7ec73CFB',
  [ChainId.ARBITRUM]: '0xB2B5C26B6868be10fF77e4E233fD231ceB90162a',
  [ChainId.AVALANCHE]: '0x43198B6fA5d89B88D2E072fA4841724571De5A59'
}

export const BORING_HELPER_ADDRESS: AddressMap = {
  [ChainId.MAINNET]: '0x11Ca5375AdAfd6205E41131A4409f182677996E6',
  [ChainId.KOVAN]: '0x11Ca5375AdAfd6205E41131A4409f182677996E6',
  [ChainId.MATIC]: '0xA77a7fD5a16237B85E0FAd02C51f459D18AE93Cd',
  [ChainId.XDAI]: '0x97e4a0fb71243A83A6FbaEF7Cf73617594e4cF2F',
  [ChainId.BSC]: '0x11Ca5375AdAfd6205E41131A4409f182677996E6',
  [ChainId.ARBITRUM]: '0x37B3287292De241278fB5FCa514a756E0BE924f8',
  [ChainId.AVALANCHE]: '0xD18cA07a599bf5eBb9B7327871ad682F0b660748',
  [ChainId.HECO]: '0x11Ca5375AdAfd6205E41131A4409f182677996E6'
}

export const STOP_LIMIT_ORDER_ADDRESS: AddressMap = {
  [ChainId.KOVAN]: '0xce9365dB1C99897f04B3923C03ba9a5f80E8DB87',
  [ChainId.MATIC]: '0x1aDb3Bd86bb01797667eC382a0BC6A9854b4005f'
}

export const ARCHER_ROUTER_ADDRESS: AddressMap = {
  [ChainId.MAINNET]: '0x9917C083FF9FbD29Df1367FBF7F2388A9a202431'
}

export const MINICHEF_ADDRESS: AddressMap = {
  [ChainId.MATIC]: '0x0769fd68dFb93167989C6f7254cd0D766Fb2841F',
  [ChainId.XDAI]: '0xdDCbf776dF3dE60163066A5ddDF2277cB445E0F3',
  [ChainId.HARMONY]: '0x67dA5f2FfaDDfF067AB9d5F025F8810634d84287',
  [ChainId.ARBITRUM]: '0xF4d73326C13a4Fc5FD7A064217e12780e9Bd62c3',
  [ChainId.CELO]: '0x0769fd68dFb93167989C6f7254cd0D766Fb2841F',
}

export const WETH9_ADDRESS: AddressMap = {
  [ChainId.MAINNET]: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
  [ChainId.ROPSTEN]: '0xc778417E063141139Fce010982780140Aa0cD5Ab',
  [ChainId.RINKEBY]: '0xc778417E063141139Fce010982780140Aa0cD5Ab',
  [ChainId.GÖRLI]: '0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6',
  [ChainId.KOVAN]: '0xd0A1E359811322d97991E03f863a0C30C2cF029C',
  [ChainId.ARBITRUM]: '0x82aF49447D8a07e3bd95BD0d56f35241523fBab1',
  [ChainId.ARBITRUM_TESTNET]: '0xf8456e5e6A225C2C1D74D8C9a4cB2B1d5dc1153b',
  [ChainId.BSC]: '0x2170Ed0880ac9A755fd29B2688956BD959F933F8',
  [ChainId.FANTOM]: '0x74b23882a30290451A17c44f4F05243b6b58C76d',
  [ChainId.MATIC]: '0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619',
  [ChainId.OKEX]: '0x2170Ed0880ac9A755fd29B2688956BD959F933F8',
  [ChainId.HECO]: '0x64FF637fB478863B7468bc97D30a5bF3A428a1fD',
  [ChainId.HARMONY]: '0x6983D1E6DEf3690C4d616b13597A09e6193EA013',
  [ChainId.XDAI]: '0x6A023CCd1ff6F2045C3309768eAd9E68F978f6e1',
  [ChainId.AVALANCHE]: '0xf20d962a6c8f70c731bd838a3a388D7d48fA6e15'
}

export const WNATIVE_ADDRESS: AddressMap = {
  [ChainId.MAINNET]: WETH9_ADDRESS[ChainId.MAINNET],
  [ChainId.ROPSTEN]: WETH9_ADDRESS[ChainId.ROPSTEN],
  [ChainId.RINKEBY]: WETH9_ADDRESS[ChainId.RINKEBY],
  [ChainId.GÖRLI]: WETH9_ADDRESS[ChainId.GÖRLI],
  [ChainId.KOVAN]: WETH9_ADDRESS[ChainId.KOVAN],
  [ChainId.ARBITRUM]: WETH9_ADDRESS[ChainId.ARBITRUM],
  [ChainId.ARBITRUM_TESTNET]: WETH9_ADDRESS[ChainId.ARBITRUM_TESTNET],
  [ChainId.FANTOM]: '0x21be370D5312f44cB42ce377BC9b8a0cEF1A4C83',
  [ChainId.FANTOM_TESTNET]: '0xf1277d1Ed8AD466beddF92ef448A132661956621',
  [ChainId.MATIC]: '0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270',
  [ChainId.MATIC_TESTNET]: '0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270',
  [ChainId.XDAI]: '0xe91D153E0b41518A2Ce8Dd3D7944Fa863463a97d',
  [ChainId.BSC]: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
  [ChainId.BSC_TESTNET]: '0xae13d989daC2f0dEbFf460aC112a837C89BAa7cd',
  [ChainId.MOONBEAM_TESTNET]: '0xe73763DB808ecCDC0E36bC8E32510ED126910394',
  [ChainId.AVALANCHE]: '0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7',
  [ChainId.AVALANCHE_TESTNET]: '0xd00ae08403B9bbb9124bB305C09058E32C39A48c',
  [ChainId.HECO]: '0x5545153CCFcA01fbd7Dd11C0b23ba694D9509A6F',
  [ChainId.HECO_TESTNET]: '0x5B2DA6F42CA09C77D577a12BeaD0446148830687',
  [ChainId.HARMONY]: '0xcF664087a5bB0237a0BAd6742852ec6c8d69A27a',
  [ChainId.HARMONY_TESTNET]: '0x7a2afac38517d512E55C0bCe3b6805c10a04D60F',
  [ChainId.OKEX]: '0x8F8526dbfd6E38E3D8307702cA8469Bae6C56C15',
  [ChainId.OKEX_TESTNET]: '0x2219845942d28716c0F7C605765fABDcA1a7d9E0',
  [ChainId.CELO]: '0x471EcE3750Da237f93B8E339c536989b8978a438',
  [ChainId.PALM]: '0xF98cABF0a963452C5536330408B2590567611a71',
  [ChainId.MOONRIVER]: '0xf50225a84382c74CbdeA10b0c176f71fc3DE0C4d',
  [ChainId.FUSE]: '0x0BE9e53fd7EDaC9F859882AfdDa116645287C629'
}

export const MASTERCHEF_V2_ADDRESS: AddressMap = {
  [ChainId.MAINNET]: '',
  [ChainId.ROPSTEN]: ''
}

export const ENS_REGISTRAR_ADDRESS: AddressMap = {
  [ChainId.MAINNET]: '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e',
  [ChainId.GÖRLI]: '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e',
  [ChainId.ROPSTEN]: '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e',
  [ChainId.RINKEBY]: '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e'
}

export const ZAPPER_ADDRESS: AddressMap = {
  [ChainId.MAINNET]: '0xcff6eF0B9916682B37D80c19cFF8949bc1886bC2',
  [ChainId.ROPSTEN]: '0xcff6eF0B9916682B37D80c19cFF8949bc1886bC2'
}

export const MERKLE_DISTRIBUTOR_ADDRESS: AddressMap = {
  [ChainId.MAINNET]: '0xcBE6B83e77cdc011Cc18F6f0Df8444E5783ed982',
  [ChainId.ROPSTEN]: '0x84d1f7202e0e7dac211617017ca72a2cb5e2b955'
}

export const MULTICALL2_ADDRESS: AddressMap = {
  [ChainId.MAINNET]: '0x5BA1e12693Dc8F9c48aAD8770482f4739bEeD696',
  [ChainId.ROPSTEN]: '0x5BA1e12693Dc8F9c48aAD8770482f4739bEeD696',
  [ChainId.RINKEBY]: '0x5BA1e12693Dc8F9c48aAD8770482f4739bEeD696',
  [ChainId.GÖRLI]: '0x5BA1e12693Dc8F9c48aAD8770482f4739bEeD696',
  [ChainId.KOVAN]: '0x5BA1e12693Dc8F9c48aAD8770482f4739bEeD696',
  [ChainId.ARBITRUM]: '0x80C7DD17B01855a6D2347444a0FCC36136a314de',
  [ChainId.ARBITRUM_TESTNET]: '0xa501c031958F579dB7676fF1CE78AD305794d579',
  [ChainId.CELO]: '0x9aac9048fC8139667D6a2597B902865bfdc225d3',
  [ChainId.FANTOM]: '0x22D4cF72C45F8198CfbF4B568dBdB5A85e8DC0B5',
  [ChainId.MATIC]: '0x02817C1e3543c2d908a590F5dB6bc97f933dB4BD',
  [ChainId.MATIC_TESTNET]: '0xc1400d49baa8e307B4462cD46E0a20109D25F50f',
  [ChainId.XDAI]: '0x67dA5f2FfaDDfF067AB9d5F025F8810634d84287',
  [ChainId.BSC]: '0xa9193376D09C7f31283C54e56D013fCF370Cd9D9',
  [ChainId.AVALANCHE]: '0xdDCbf776dF3dE60163066A5ddDF2277cB445E0F3',
  [ChainId.HECO]: '0xdDCbf776dF3dE60163066A5ddDF2277cB445E0F3',
  [ChainId.HARMONY]: '0xdDCbf776dF3dE60163066A5ddDF2277cB445E0F3',
  [ChainId.OKEX]: '0xF4d73326C13a4Fc5FD7A064217e12780e9Bd62c3',
  [ChainId.PALM]: '0x0769fd68dFb93167989C6f7254cd0D766Fb2841F',
  [ChainId.MOONRIVER]: '0x270f2F35bED92B7A59eA5F08F6B3fd34c8D9D9b5',
  [ChainId.FUSE]: '0x0769fd68dFb93167989C6f7254cd0D766Fb2841F'
}