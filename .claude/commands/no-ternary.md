# TypeScript & Ternary Rules

## 🚫 Never Use Nested Ternary Operators

This is a **hard rule, zero exceptions**.

### ❌ Bad
```ts
const label = isAdmin ? 'Admin' : isUser ? 'User' : 'Guest'
const message = condition1 ? value1 : condition2 ? value2 : condition3 ? value3 : value4
```

### ✅ Good
```ts
const getLabel = () => {
  if (isAdmin) return 'Admin'
  if (isUser) return 'User'
  return 'Guest'
}
const label = getLabel()

// Or use helper const
const messageMap = {
  condition1: value1,
  condition2: value2,
  condition3: value3,
  default: value4
} as const
const message = messageMap[activeCondition] ?? messageMap.default
```

---

## TypeScript Rules Checklist

- [ ] **Define types for all props and data structures**
  ```ts
  interface Props {
    isActive: boolean
    onSubmit: (data: FormData) => void
  }
  ```

- [ ] **Use `const` arrow functions, not `function` declarations**
  ```ts
  // ✅ Good
  const handleClick = () => {}
  
  // ❌ Bad
  function handleClick() {}
  ```

- [ ] **Prefix event handlers with `handle`**
  ```ts
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {}
  const handleSubmit = (e: FormEvent) => {}
  const handleKeyDown = (e: KeyboardEvent) => {}
  ```

- [ ] **Use TypeScript, not JavaScript** (unless explicitly required)
  - All files should be `.ts` or `.tsx`
  - No implicit `any` types
  - Enable strict mode in `tsconfig.json`

- [ ] **Use early returns to reduce nesting**
  ```ts
  // ✅ Good
  if (!user) return null
  if (!isValid) return <Error />
  return <Component />
  
  // ❌ Avoid
  if (user) {
    if (isValid) {
      return <Component />
    } else {
      return <Error />
    }
  } else {
    return null
  }
  ```
