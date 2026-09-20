export const useScrollTo = () => {
  const scrollTo = (element: HTMLElement | null) => {
    element?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }

  return {
    scrollTo,
  }
}
