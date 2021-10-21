import { ChainId } from '../enums'
import JSBI from 'jsbi'

export * from './addresses'
export * from './kashi'
export * from './natives'
export * from './numbers'
export * from './tokens'

// export const INIT_CODE_HASH: string = '0xb5e5dc981b9ca7da2e24bd77420505f4dfaf584b996782257e69196a6dd7cdac'

export const INIT_CODE_HASH: { [chainId: number]: string } = {
  [ChainId.MAINNET]: '0xb5e5dc981b9ca7da2e24bd77420505f4dfaf584b996782257e69196a6dd7cdac',
  [ChainId.ROPSTEN]: '0xb5e5dc981b9ca7da2e24bd77420505f4dfaf584b996782257e69196a6dd7cdac',
  [ChainId.RINKEBY]: '0xb5e5dc981b9ca7da2e24bd77420505f4dfaf584b996782257e69196a6dd7cdac',
  [ChainId.GÖRLI]: '0xb5e5dc981b9ca7da2e24bd77420505f4dfaf584b996782257e69196a6dd7cdac',
  [ChainId.KOVAN]: '0xb5e5dc981b9ca7da2e24bd77420505f4dfaf584b996782257e69196a6dd7cdac',
  [ChainId.FANTOM]: '0xb5e5dc981b9ca7da2e24bd77420505f4dfaf584b996782257e69196a6dd7cdac',
  [ChainId.MATIC]: '0xb5e5dc981b9ca7da2e24bd77420505f4dfaf584b996782257e69196a6dd7cdac',
  [ChainId.MATIC_TESTNET]: '0xb5e5dc981b9ca7da2e24bd77420505f4dfaf584b996782257e69196a6dd7cdac',
  [ChainId.XDAI]: '0xb5e5dc981b9ca7da2e24bd77420505f4dfaf584b996782257e69196a6dd7cdac',
  [ChainId.BSC]: '0xb5e5dc981b9ca7da2e24bd77420505f4dfaf584b996782257e69196a6dd7cdac',
  [ChainId.BSC_TESTNET]: '0xb5e5dc981b9ca7da2e24bd77420505f4dfaf584b996782257e69196a6dd7cdac',
  [ChainId.ARBITRUM]: '0xb5e5dc981b9ca7da2e24bd77420505f4dfaf584b996782257e69196a6dd7cdac',
  [ChainId.MOONBEAM_TESTNET]: '0xb5e5dc981b9ca7da2e24bd77420505f4dfaf584b996782257e69196a6dd7cdac',
  [ChainId.AVALANCHE]: '0xb5e5dc981b9ca7da2e24bd77420505f4dfaf584b996782257e69196a6dd7cdac',
  [ChainId.AVALANCHE_TESTNET]: '0xb5e5dc981b9ca7da2e24bd77420505f4dfaf584b996782257e69196a6dd7cdac',
  [ChainId.HECO]: '0xb5e5dc981b9ca7da2e24bd77420505f4dfaf584b996782257e69196a6dd7cdac',
  [ChainId.HECO_TESTNET]: '0xb5e5dc981b9ca7da2e24bd77420505f4dfaf584b996782257e69196a6dd7cdac',
  [ChainId.HARMONY]: '0xb5e5dc981b9ca7da2e24bd77420505f4dfaf584b996782257e69196a6dd7cdac',
  [ChainId.HARMONY_TESTNET]: '0xb5e5dc981b9ca7da2e24bd77420505f4dfaf584b996782257e69196a6dd7cdac',
  [ChainId.OKEX]: '0xb5e5dc981b9ca7da2e24bd77420505f4dfaf584b996782257e69196a6dd7cdac',
  [ChainId.OKEX_TESTNET]: '0xb5e5dc981b9ca7da2e24bd77420505f4dfaf584b996782257e69196a6dd7cdac',
  [ChainId.CELO]: '0xb5e5dc981b9ca7da2e24bd77420505f4dfaf584b996782257e69196a6dd7cdac',
  [ChainId.PALM]: '0xb5e5dc981b9ca7da2e24bd77420505f4dfaf584b996782257e69196a6dd7cdac',
  [ChainId.MOONRIVER]: '0xb5e5dc981b9ca7da2e24bd77420505f4dfaf584b996782257e69196a6dd7cdac',
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
