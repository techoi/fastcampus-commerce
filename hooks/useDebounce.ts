import { useEffect, useState } from 'react'

const useDebounce = <T = any>(value: T, delay = 600) => {
  const [debouncedValue, setDebouncedValue] = useState<T>(() => value)

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)

    return () => {
      clearTimeout(timer)
    }
  }, [value, delay])

  return debouncedValue
}

export default useDebounce
