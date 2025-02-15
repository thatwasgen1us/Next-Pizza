import React from 'react'
import { cn } from '../../lib/utils'
import Image from 'next/image'
import { Container } from './container'
import { Button } from '../ui'
import { ArrowRight, ShoppingCart, User } from 'lucide-react'

interface Props {
  className?: string
}

export const Header: React.FC<Props> = ({ className }) => {
  return <header className={cn('border-b border-gray-100', className)}>
            <Container className='flex items-center justify-between py-8'>
              {/* Левая часть */}
              <div className="flex items-center gap-4">
                <Image src="/logo.png" width={35} height={35} alt="Logo" />
                <div>
                  <h1 className="text-2xl uppercase font-black">Next Pizza</h1>
                  <p className="text-sm text-gray-400 leading-3">вкусней уже некуда</p>
                </div>
              </div>

              {/* Правая часть */}
              <div className="flex items-center gap-3">
                <Button variant="outline" className='flex items-center gap-1'>
                  <User size={16}/>
                  Войти
                </Button>

                <div>
                  <Button className='group relative'>
                    <b>520 ₽</b>
                    <span className='h-full w-[1px] bg-white/30 mx-3'></span>
                    <div className='flex items-center gap-1 transition duration-300 group-hover:opacity-0 opacity-100'>
                      <ShoppingCart size={16} className='relative' strokeWidth={2}/>
                      <b>3</b>
                    </div>
                    <ArrowRight size={20} className='absolute right-5 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition duration-300' strokeWidth={2}/>
                  </Button>
                </div>
              </div>
            </Container>
          </header>
}
