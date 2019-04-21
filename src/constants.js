export default {
  resources: [
    {
      // title, type(common, rare, etc), visible, calculatePerTick, color
      name: 'food',
      value: 0,
    },
  ],
  buildings: [
    {
      // label, description, unlockRatio, unlockable, priceRatio, flavor
      name: 'farm',
      value: 0,
      prices: [
        {
          name: 'food',
          amount: 10,
          ratio: 1.12,
        },
      ],
      getNextCost({ negated = false } = {}) {
        const obj = {}

        this.prices.forEach(price => {
          const amount = price.amount * Math.pow(price.ratio, this.value)
          obj[price.name] = negated ? -amount : amount
        })

        return obj
      },
      effects: {
        foodPerTick: 0.125,
      },
    },
  ],
}

export const nameToIndex = {
  resources: {
    food: 0,
  },
  buildings: {
    farm: 0,
  },
}