import { lazy, Suspense, useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import { initScroll } from './lib/scroll'
import LoadingScreen from './components/LoadingScreen'
import loadingContext from './components/loadingContext'
import Home from './pages/Home'

const Menu = lazy(() => import('./pages/Menu'))
const Locations = lazy(() => import('./pages/Locations'))
const Events = lazy(() => import('./pages/Events'))
const Careers = lazy(() => import('./pages/Careers'))
const Contact = lazy(() => import('./pages/Contact'))

// Resets scroll position on every route change so a page that was scrolled
// before navigation doesn't carry that offset into the next view.
function ScrollManager() {
  const location = useLocation()

  useEffect(() => {
    if (!('scrollRestoration' in window.history)) return
    const previous = window.history.scrollRestoration
    window.history.scrollRestoration = 'manual'
    return () => {
      window.history.scrollRestoration = previous
    }
  }, [])

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [location.pathname])

  return null
}

function AppRoutes() {
  return (
    <>
      <ScrollManager />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/menu"
          element={
            <Suspense fallback={null}>
              <Menu />
            </Suspense>
          }
        />
        <Route
          path="/locations"
          element={
            <Suspense fallback={null}>
              <Locations />
            </Suspense>
          }
        />
        <Route
          path="/events"
          element={
            <Suspense fallback={null}>
              <Events />
            </Suspense>
          }
        />
        <Route
          path="/careers"
          element={
            <Suspense fallback={null}>
              <Careers />
            </Suspense>
          }
        />
        <Route
          path="/contact"
          element={
            <Suspense fallback={null}>
              <Contact />
            </Suspense>
          }
        />
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  )
}

export default function App() {
  useEffect(() => {
    initScroll()
  }, [])

  const [isLoading, setIsLoading] = useState(true)
  const [loadingCycle, setLoadingCycle] = useState(0)
  const loadingTimeoutRef = useRef<number | null>(null)

  // Programmatic loader trigger — used by the navbar logo and any other
  // surface that wants to play the branded 3s transition before navigation.
  const playLoadingScreen = useCallback(
    (onComplete?: () => void, duration = 3000) => {
      if (loadingTimeoutRef.current) {
        window.clearTimeout(loadingTimeoutRef.current)
      }

      setIsLoading(true)
      window.scrollTo(0, 0)

      loadingTimeoutRef.current = window.setTimeout(() => {
        if (typeof onComplete === 'function') onComplete()
        setLoadingCycle((n) => n + 1)
        window.requestAnimationFrame(() => {
          setIsLoading(false)
          loadingTimeoutRef.current = null
        })
      }, duration)
    },
    [],
  )

  // Initial-mount loader — plays once on first load
  useEffect(() => {
    loadingTimeoutRef.current = window.setTimeout(() => {
      setIsLoading(false)
      loadingTimeoutRef.current = null
    }, 3000)
    return () => {
      if (loadingTimeoutRef.current) window.clearTimeout(loadingTimeoutRef.current)
    }
  }, [])

  const loadingContextValue = useMemo(
    () => ({ loadingCycle, playLoadingScreen }),
    [loadingCycle, playLoadingScreen],
  )

  return (
    <loadingContext.Provider value={loadingContextValue}>
      <BrowserRouter>
        <AppRoutes />
        {isLoading ? <LoadingScreen key={loadingCycle} /> : null}
      </BrowserRouter>
    </loadingContext.Provider>
  )
}
