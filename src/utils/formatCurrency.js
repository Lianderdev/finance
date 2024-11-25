export const formatCurrency = (value, currency) => {
    const valueType = Number(value)
    return valueType.toLocaleString("pt-br", {
        style: 'currency',
        currency
    })
}