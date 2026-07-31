import React from 'react'
import ProductCard from '../../Pages/ProductCard'
import OutfitForBenefit from '../../Pages/OutfitForBenefit'

function Product() {
  return (
    <>
        <ProductCard header_title = 'adiWeek' />
        <OutfitForBenefit/>
        <ProductCard header_title = 'Do you still like these products?' />

    </>
  )
}

export default Product