# Components | Masking Technology Design System

The following components are available:

* **Dropdown** - Simple selection dropdown.
* **Tabs** - Tabbed navigation component.

All details are described per component below.

## Dropdown

Simple selection dropdown (custom UI) that accepts a `Map` of options.

Properties:

- **options** - `Map<string, string>` (required)
- **selected** - string (optional, key of the selected option)
- **onChange** - `(oldKey: string, newKey: string) => void` (optional)

Example:

```tsx
import { Dropdown } from '@maskingtech/designsystem';

const opts = new Map([['a','A'],['b','B']]);
<Dropdown options={opts} selected='a' onChange={(o,n)=>console.log(o,n)} />
```

Customization options (selector: `.dropdown`):

- `--background-color` (default: `transparent`)
- `--background-color-options` (default: `var(--color-primary-background)`)
- `--background-color-options-hover` (default: `var(--color-background-hover)`)
- `--arrow-color` (default: `var(--color-alert-foreground)`)
- `--border-color` (default: `var(--color-border)`)

## Tabs

Tabs provide a tabbed navigation. Use `Tab` elements as children of `Tabs`.

`Tabs` Properties:

- **separator** - ReactNode (optional)
- **selectedId** - string (optional)
- **children** - one or more `Tab` elements (required)
- **onChange** - `(newId: string, oldId?: string) => void` (optional)

`Tab` Properties:

- **id** - string (required)
- **title** - ReactNode (required)
- **children** - ReactNode (required)

Example:

```tsx
import { Tabs, Tab } from '@maskingtech/designsystem';

<Tabs selectedId='tab1' onChange={(n,o)=>console.log(n,o)}>
  <Tab id='tab1' title='First'>First content</Tab>
  <Tab id='tab2' title='Second'>Second content</Tab>
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
