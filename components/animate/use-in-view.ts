'use client'
import { useEffect, useRef, useState } from 'react'

type Options = Omit<IntersectionObserverInit, 'root'> & { once?: boolean }

export function useInView<T extends HTMLElement>(opts: Options = { threshold: 0.2, once: true }) {
  const ref = useRef<T | null>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          if (opts.once) observer.unobserve(entry.target)
        } else if (!opts.once) {
          setInView(false)
        }
      },
      { threshold: opts.threshold ?? 0.2, rootMargin: opts.rootMargin }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [opts.threshold, opts.rootMargin, opts.once])

  return { ref, inView }
}
