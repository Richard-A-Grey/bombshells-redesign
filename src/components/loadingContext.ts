import { createContext } from 'react'

type LoadingContextValue = {
  loadingCycle: number
  playLoadingScreen: (onComplete?: () => void, duration?: number) => void
}

const loadingContext = createContext<LoadingContextValue>({
  loadingCycle: 0,
  playLoadingScreen: () => {},
})

export default loadingContext
