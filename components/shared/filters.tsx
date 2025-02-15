'use client'

import React from 'react'
import { cn } from '../../lib/utils'
import { FilterCheckbox, Title } from '.'
import { Input, RangeSlider, CheckboxFiltersGroup } from '../ui'
interface Props {
  className?: string
}

export const Filters: React.FC<Props> = ({ className }) => {
  return (
    <div className={cn('flex flex-col gap-4', className)}>
      <Title text="Фильтрация" size="sm" className='mb-5 font-bold'/>

      {/* Верхние чекбоксы */}
      <div className='flex flex-col gap-4'>
        <FilterCheckbox text="Можно собирать" value="1"/>
        <FilterCheckbox text="Новинки" value="2"/>
      </div>

      {/* Цена от и до */}
      <div className='mt-5 border-y border-y-neutral-100 py-6 pb-7'>
        <p className='font-bold mb-3'>Цена от и до</p>
        <div className='flex gap-3 mb-5'>
          <Input placeholder='0' type='number' min={0} max={1000} />
          <Input placeholder='1000' type='number' min={100} max={1000} />
        </div>

        <RangeSlider min={0} max={1000} step={10} value={[0, 1000]}/>
      </div>

      {/* Группа чекбоксов */}
      <CheckboxFiltersGroup 
        title="Ингридиенты:" 
        limit={6} 
        defaultItems={[
          {
            text: 'Сырный соус',
            value: '1'
          },
          {
            text: 'Моцарелла',
            value: '2'
          },
          {
            text: 'Чеснок',
            value: '3'
          },
          {
            text: 'Солёные огурчики',
            value: '4'
          },
        
        ]} 
      className='mt-5'
      items={[
        {
          text: 'Сырный соус',
          value: '1'
        },
        {
          text: 'Моцарелла',
          value: '2'
        },
        {
          text: 'Чеснок',
          value: '3'
        },
        {
          text: 'Солёные огурчики',
          value: '4'
        },
        {
          text: 'Сырный соус',
          value: '5'
        },
        {
          text: 'Моцарелла',
          value: '6'
        },
        {
          text: 'Чеснок',
          value: '7'
        },
        {
          text: 'Солёные огурчики',
          value: '8'
        },
        {
          text: 'Сырный соус',
          value: '9'
        },
        {
          text: 'Моцарелла',
          value: '10'
        },
        {
          text: 'Чеснок',
          value: '11'
        },
        {
          text: 'Солёные огурчики',
          value: '12'
        },
        {
          text: 'Сырный соус',
          value: '13'
        },
        {
          text: 'Моцарелла',
          value: '14'
        },
        {
          text: 'Чеснок',
          value: '15'
        },
        {
          text: 'Солёные огурчики',
          value: '16'
        },
        {
          text: 'Сырный соус',
          value: '17'
        },
        {
          text: 'Моцарелла',
          value: '18'
        },
        {
          text: 'Чеснок',
          value: '19'
        },
        {
          text: 'Солёные огурчики',
          value: '20'
        },
        {
          text: 'Сырный соус',
          value: '21'
        },
        {
          text: 'Моцарелла',
          value: '22'
        },
        {
          text: 'Чеснок',
          value: '23'
        },
        {
          text: 'Солёные огурчики',
          value: '24'
        },
      ]}
      onChange={(selectedItems) => console.log('Выбранные элементы:', selectedItems)}
    />
    </div>
  )
}
