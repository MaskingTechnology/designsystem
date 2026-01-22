# Components | Masking Technology Design System

The following components are available:

* **Tabs** - Tabbed navigation component.

All details are described per component below.

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

<Tabs selectedId='tab1' separator={<hr />} onChange={(n,o)=>console.log(n,o)}>
  <Tabs.Tab title='First' active={true} onClick={() => console.log('First clicked')} />
  <Tabs.Tab title='Second' active={false} onClick={() => console.log('Second clicked')} />
</Tabs>
```
