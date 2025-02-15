'use client'

import { useIntersection } from 'react-use'
import { cn } from '../../lib/utils'
import { ProductCard, Title } from './'
import { useEffect, useRef } from 'react'
import { useCategoryStore } from '../../store/category'

interface Props {
  title: string,
  items: any[]
  className?: string
  listClassName?: string
  categoryId: number
}

export const ProductsGroupList: React.FC<Props> = ({ title, items, className, listClassName, categoryId }) => {

  const setActiveCategoryId = useCategoryStore((state) => state.setActiveId)
  
  const intersectionRef = useRef<HTMLDivElement | null>(null);
  
  const intersection = useIntersection(intersectionRef as React.RefObject<HTMLElement>, {
    threshold: 0.4,
  });

  useEffect(() => {
    if (intersection?.isIntersecting) {
      setActiveCategoryId(categoryId)
  }}, [categoryId, intersection?.isIntersecting, title])

  return (
    <div className={cn('', className)} id={title} ref={intersectionRef}>
      <Title text={title} size='lg' className='font-extrabold mb-5' />

      <div className={cn('grid grid-cols-3 gap-[50px]', listClassName)}>
        {items.map((item) => (
          <ProductCard
           key={item.id}
           id={item.id}
           name={item.name}
           imageUrl={item.imageUrl}
           price={item.items[0].price}
          />
        ))}
      </div>
    </div>
  )
}
