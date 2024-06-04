import { ProductCard } from '@/components'

import type { FC } from 'react'
import type { TProductProps } from '@/types'

import styles from './ProductList.module.css'

interface IProductProps {
  products: TProductProps[]
}

export const ProductList: FC<IProductProps> = ({ products }) => {
  return (
    <div className={styles.productList}>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          id={product.id}
          name={product.name}
          description={product.ingredients.join(', ')}
          rating={product.rating}
          price={product.price}
          image={product.image}
        />
      ))}
    </div>
  )
}
