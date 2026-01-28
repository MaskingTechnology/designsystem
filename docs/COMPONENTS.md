# Components | Masking Technology Design System

The following components are available:

* **Menu** - Icon based navigation component.
* **Tabs** - Tabbed navigation component.

All details are described per component below.

## Menu

Menu provides an icon-based navigation component. Use `Menu.Item` elements as children of `Menu`.

`Menu` Properties:

- **orientation** - `horizontal` | `vertical` (optional, default: `horizontal`)
- **children** - one or more `Menu.Item` elements (required)

`Menu.Item` Properties:

- **title** - string (required)
- **active** - boolean (required)
- **activeIcon** - string (required, icon source for active state)
- **inactiveIcon** - string (required, icon source for inactive state)
- **orientation** - `horizontal` | `vertical` (optional, default: `horizontal`)
- **onClick** - `() => void` (required)

Example:

```tsx
import { Menu } from '@maskingtech/designsystem';

<Menu orientation='vertical'>
  <Menu.Item
    title='Home'
    active={true}
    activeIcon='/icons/home-active.svg'
    inactiveIcon='/icons/home-inactive.svg'
    onClick={() => console.log('Home clicked')}
  />
  <Menu.Item
    title='Settings'
    active={false}
    activeIcon='/icons/settings-active.svg'
    inactiveIcon='/icons/settings-inactive.svg'
    onClick={() => console.log('Settings clicked')}
  />
</Menu>
```

## Tabs

Tabs provide a tabbed navigation. Use `Tab` elements as children of `Tabs`.

`Tabs` Properties:

- **children** - one or more `Tab` elements (required)

`Tabs.Tab` Properties:

- **title** - string (required)
- **active** - boolean (required)
- **onClick** - `() => void` (required)

Example:

```tsx
import { Tabs } from '@maskingtech/designsystem';

<Tabs>
  <Tabs.Tab title='First' active={true} onClick={() => console.log('First clicked')} />
  <Tabs.Tab title='Second' active={false} onClick={() => console.log('Second clicked')} />
</Tabs>
```
