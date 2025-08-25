'use client'
import { cn } from '@/app/utils/cn'
import { useInView } from './use-in-view'


type Direction = 'left' | 'right' | 'up' | 'down'

export function AnimatedSection({
  children,
  className,
  dir = 'left',
  delay = 0,
}: {
  children: React.ReactNode
  className?: string
  dir?: Direction
  delay?: number // ms
}) {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.2, once: true })

  const offset = {
    left: '-translate-x-10',
    right: 'translate-x-10',
    up: 'translate-y-10',
    down: '-translate-y-10',
  }[dir]

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn(
        'will-change-transform opacity-0',
        'transition-all duration-700 ease-out w-full',
        inView ? 'translate-x-0 translate-y-0 opacity-100' : offset,
        className
      )}
    >
      {children}
    </div>
  )
}
