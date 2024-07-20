import { ChainId } from '@pancakeswap/chains'
import { ERC20Token, WETH9 } from '@pancakeswap/sdk'
import { USDT } from './common'

export const klaytnTestnetTokens = {
  weth: WETH9[ChainId.KLAYTN_TESTNET],
  usdt: USDT[ChainId.KLAYTN_TESTNET],
  newToken: new ERC20Token(ChainId.KLAYTN_TESTNET, '0x28CD7bfE8619e4a8DEffFD8593BBBfFc7bE11400', 18, 'MEME', 'MemeToken'),
}
