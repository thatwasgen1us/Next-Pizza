import React from 'react'
import { cn } from '../../lib/utils'
import Link from 'next/link'
import { Title } from '.'
import { Button } from '../ui'
import { Plus } from 'lucide-react'
import Image from 'next/image'
interface Props {
  id: number,
  name: string,
  price: number,
  imageUrl: string,
  className?: string
}

export const ProductCard: React.FC<Props> = ({ id, name, price, imageUrl, className }) => {
  return (
    <div className={cn('', className)}>
      <Link href={`/product/${id}`}>
        <div className='flex justify-center p-6 bg-secondary rounded-lg h-[260px]'>
          <Image src={imageUrl} alt={name} width={215} height={215} className='width-[215px] aspect-square object-contain'/>
        </div>

        <Title text={name} size='sm' className='mt-3 mb-1 font-bold' />

        <p className='text-sm text-gray-400'>
          Цыпленок моцарелла
        </p>

        <div className='flex items-center justify-between mt-4'>
          <span className='text-[20px]'>
            от <b>{price} ₽</b>
          </span>

          <Button variant='secondary' className='text-base font-bold'>
            <Plus size={20} className='mr-1' />
            Добавить
          </Button>
        </div>
      </Link>
    </div>
  )
}

