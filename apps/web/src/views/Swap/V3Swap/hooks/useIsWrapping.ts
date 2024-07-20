import { useCurrency } from 'hooks/Tokens'
import { useIsWrapping as useIsWrappingHook } from 'hooks/useWrapCallback'
import { Field } from 'state/swap/actions'
import { useSwapState } from 'state/swap/hooks'

export function useIsWrapping() {
  const {
    [Field.INPUT]: { currencyId: inputCurrencyId },
    [Field.OUTPUT]: { currencyId: outputCurrencyId },
  } = useSwapState()
  

  const { typedValue } = useSwapState()
  const inputCurrency = useCurrency(inputCurrencyId)
  const outputCurrency = useCurrency(outputCurrencyId);
  return useIsWrappingHook(inputCurrency, outputCurrency, typedValue)
}
