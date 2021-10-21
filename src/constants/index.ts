import { ChainId } from '../enums'
import JSBI from 'jsbi'

export * from './addresses'
export * from './kashi'
export * from './natives'
export * from './numbers'
export * from './tokens'

// export const INIT_CODE_HASH: string = '0xdd1f88e8c02ae417b9c0a35a96019d50064a4ed08abc2f5c5476b85f93155082'

export const INIT_CODE_HASH: { [chainId: number]: string } = {
  [ChainId.MAINNET]: '0xdd1f88e8c02ae417b9c0a35a96019d50064a4ed08abc2f5c5476b85f93155082',
  [ChainId.ROPSTEN]: '0xdd1f88e8c02ae417b9c0a35a96019d50064a4ed08abc2f5c5476b85f93155082',
  [ChainId.RINKEBY]: '0xdd1f88e8c02ae417b9c0a35a96019d50064a4ed08abc2f5c5476b85f93155082',
  [ChainId.GÖRLI]: '0xdd1f88e8c02ae417b9c0a35a96019d50064a4ed08abc2f5c5476b85f93155082',
  [ChainId.KOVAN]: '0xdd1f88e8c02ae417b9c0a35a96019d50064a4ed08abc2f5c5476b85f93155082',
  [ChainId.FANTOM]: '0xdd1f88e8c02ae417b9c0a35a96019d50064a4ed08abc2f5c5476b85f93155082',
  [ChainId.MATIC]: '0xdd1f88e8c02ae417b9c0a35a96019d50064a4ed08abc2f5c5476b85f93155082',
  [ChainId.MATIC_TESTNET]: '0xdd1f88e8c02ae417b9c0a35a96019d50064a4ed08abc2f5c5476b85f93155082',
  [ChainId.XDAI]: '0xdd1f88e8c02ae417b9c0a35a96019d50064a4ed08abc2f5c5476b85f93155082',
  [ChainId.BSC]: '0xdd1f88e8c02ae417b9c0a35a96019d50064a4ed08abc2f5c5476b85f93155082',
  [ChainId.BSC_TESTNET]: '0xdd1f88e8c02ae417b9c0a35a96019d50064a4ed08abc2f5c5476b85f93155082',
  [ChainId.ARBITRUM]: '0xdd1f88e8c02ae417b9c0a35a96019d50064a4ed08abc2f5c5476b85f93155082',
  [ChainId.MOONBEAM_TESTNET]: '0xdd1f88e8c02ae417b9c0a35a96019d50064a4ed08abc2f5c5476b85f93155082',
  [ChainId.AVALANCHE]: '0xdd1f88e8c02ae417b9c0a35a96019d50064a4ed08abc2f5c5476b85f93155082',
  [ChainId.AVALANCHE_TESTNET]: '0xdd1f88e8c02ae417b9c0a35a96019d50064a4ed08abc2f5c5476b85f93155082',
  [ChainId.HECO]: '0xdd1f88e8c02ae417b9c0a35a96019d50064a4ed08abc2f5c5476b85f93155082',
  [ChainId.HECO_TESTNET]: '0xdd1f88e8c02ae417b9c0a35a96019d50064a4ed08abc2f5c5476b85f93155082',
  [ChainId.HARMONY]: '0xdd1f88e8c02ae417b9c0a35a96019d50064a4ed08abc2f5c5476b85f93155082',
  [ChainId.HARMONY_TESTNET]: '0xdd1f88e8c02ae417b9c0a35a96019d50064a4ed08abc2f5c5476b85f93155082',
  [ChainId.OKEX]: '0xdd1f88e8c02ae417b9c0a35a96019d50064a4ed08abc2f5c5476b85f93155082',
  [ChainId.OKEX_TESTNET]: '0xdd1f88e8c02ae417b9c0a35a96019d50064a4ed08abc2f5c5476b85f93155082',
  [ChainId.CELO]: '0xdd1f88e8c02ae417b9c0a35a96019d50064a4ed08abc2f5c5476b85f93155082',
  [ChainId.PALM]: '0xdd1f88e8c02ae417b9c0a35a96019d50064a4ed08abc2f5c5476b85f93155082',
  [ChainId.MOONRIVER]: '0xdd1f88e8c02ae417b9c0a35a96019d50064a4ed08abc2f5c5476b85f93155082',
  [ChainId.FUSE]: '0x1901958ef8b470f2c0a3875a79ee0bd303866d85102c0f1ea820d317024d50b5'
}

export const MINIMUM_LIQUIDITY = JSBI.BigInt(1000)

export enum SolidityType {
  uint8 = 'uint8',
  uint256 = 'uint256'
}

export const SOLIDITY_TYPE_MAXIMA = {
  [SolidityType.uint8]: JSBI.BigInt('0xff'),
  [SolidityType.uint256]: JSBI.BigInt('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff')
}

export const LAMBDA_URL = 'https://9epjsvomc4.execute-api.us-east-1.amazonaws.com/dev'

export const SOCKET_URL = 'wss://hfimt374ge.execute-api.us-east-1.amazonaws.com/dev'
