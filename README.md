# react-calling-stack

1. React flow
   1. trigger -> render -> commit (initial) -> useEffect
   2. trigger - rerender(compare) -> commit -> useEffect
2. useEffect clean up flow
   1. initial: jsx - useEffect: from child -> parent
   2. rerender: jsx - cleanup(child -> parent) -> useEffect(child ->parent)
