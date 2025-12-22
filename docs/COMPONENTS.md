# Components | Masking Technology Design System

The following components are available:

* **Tabs** - Tabbed navigation component.

All details are described per component below.

## Tabs

Tabs provide a tabbed navigation. Use `Tab` elements as children of `Tabs`.

`Tabs` Properties:

- **separator** - ReactNode (optional)
- **selectedId** - string (optional)
- **children** - one or more `Tab` elements (required)
- **onChange** - `(newId: string, oldId?: string) => void` (optional)

`Tabs.Tab` Properties:

- **id** - string (required)
- **title** - ReactNode (required)
- **children** - ReactNode (required)

Example:

```tsx
import { Tabs } from '@maskingtech/designsystem';

<Tabs selectedId='tab1' separator={<hr />} onChange={(n,o)=>console.log(n,o)}>
  <Tabs.Tab id='tab1' title='First'>First content</Tabs.Tab>
  <Tabs.Tab id='tab2' title='Second'>Second content</Tabs.Tab>
</Tabs>
```

Customization options (selector: `.tabs`):

- `--margin` (default: `var(--margin-container)`)
- `--foreground-color` (default: `var(--color-primary-foreground)`)
- `--font-size-nav` (default: `1.1em`)
- `--background-color-nav-item` (default: `transparent`)
- `--background-color-nav-item-active` (default: `var(--background-color-nav-item)`)
- `--background-color-nav-item-hover` (default: `var(--color-background-hover)`)
- `--padding-nav-item` (default: `0.5em 1em`)
- `--margin-separator` (default: `0.2em 0 1em 0`)
