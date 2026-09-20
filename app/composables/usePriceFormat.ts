export function usePriceFormat() {
  const formatPrice = (value: number): string => {
    const hasKopecks = !Number.isInteger(value)

    const formatter = new Intl.NumberFormat('ru-RU', {
      style: 'currency',
      currency: 'RUB',
      currencyDisplay: 'narrowSymbol',
      minimumFractionDigits: hasKopecks ? 2 : 0,
      maximumFractionDigits: 2,
    })

    return formatter.format(value)
  }

  return {
    formatPrice,
  }
}
