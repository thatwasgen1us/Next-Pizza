'use client'

import React, { useState } from 'react'
import { cn } from '../../lib/utils'
import { FilterCheckbox, FilterCheckboxProps } from '../shared/filter-checkbox';
import { Input } from '.';



interface Props {
  title: string;
  items: FilterCheckboxProps[];
  defaultItems: FilterCheckboxProps[];
  limit?: number;
  searchPlaceholder?: string;
  onChange: (items: string[]) => void; 
  defaultValue?: string[];
  className?: string;
}

export const CheckboxFiltersGroup: React.FC<Props> = ({ className, title, items, defaultItems, limit = 5, searchPlaceholder = 'Поиск', onChange, defaultValue }) => {
  const [showAll, setShowAll] = useState(false)
  const [searchValue, setSearchValue] = useState('')

  const onChangeSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value)
  }

  const list = showAll 
  ? items.filter(item => item.text.toLowerCase().includes(searchValue.toLocaleLowerCase())) 
  : defaultItems.slice(0, limit)

  
  return (
    <div className={cn('', className)}>
      <p className='font-bold mb-3'>{title}</p>

      {showAll && 
      <div className='mb-5'>
        <Input placeholder={searchPlaceholder} className="bg-gray-50 border-none" onChange={onChangeSearchInput}/>
      </div>}

      <div className='flex flex-col gap-4 max-h-96 pr-2 overflow-auto scrollbar'>
        {
          list.map((item, index) => (
            <FilterCheckbox
              key={item.value} 
              text={item.text} 
              value={item.value}
              endAdornment={item.endAdornment}
              checked={false} 
              onCheckedChange={(checked) => console.log(checked)
              }
            />
          ))
        }
      </div>

      {items.length > limit && (
        <div className={showAll ? 'border-t border-t-neutral-100 mt-4' : ''}>
          <button onClick={() => setShowAll(!showAll)} className='text-primary mt-3'>
            {showAll ? 'Скрыть' : '+ Показать все'}
          </button>
        </div>
      )}
    </div>
  )
}
