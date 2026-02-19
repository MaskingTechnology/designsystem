# Layouts | Masking Technology Design System

The following responsive layouts are available:

* **Centered** - Simple layout that centers its content.
* **Portrait** - Simple vertical layout with an optional header and footer.
* **Sidebar** - Two panel layout with a sidebar on the left and the main content on the right.

All details are described per component below.

## Centered

Simple layout that vertically and horizontally centers its content.

Properties:

- **children** - ReactNode (required)

Example:

```tsx
import { CenteredLayout } from '@maskingtech/designsystem';

<CenteredLayout>
    This is centered.
</CenteredLayout>
```

Responsive behaviour:

- **width < 500px** - The side padding gets halved.

Customization options (selector: `.layout-centered`):

- `--content-max-width` (default: `696px`)

## Portrait

Simple horizontally centered, vertical oriented layout.

Properties:

- **children** - ReactNode (required)
- **header** - ReactNode (optional)
- **footer** - ReactNode (optional)

Example:

```tsx
import { PortraitLayout } from '@maskingtech/designsystem';

<PortraitLayout header={<>Header</>} footer={<>Footer</>}>
    This is centered.
</PortraitLayout>
```

Responsive behavior:

- **width < 500px** - The side padding gets halved.

Customization options (selector: `.layout-portrait`):

- `--content-width` (default: `900px`)

## Sidebar

Horizontally centered, two panel layout with a sidebar on the left and the main content on the right, and an optional header and footer for the response view.

Properties:

- **sidebar** - ReactNode (required)
- **children** - ReactNode (required)
- **header** - ReactNode (optional)
- **footer** - ReactNode (optional)

Example:

```tsx
import { SidebarLayout } from '@maskingtech/designsystem';

const sidebar = <>
    <Logo />
    <Menu />
</>;

const header = <Logo />;
const footer = <Menu />;

<SidebarLayout sidebar={sidebar} header={header} footer={footer}>
    Main content.
</SidebarLayout>
```

Responsive behaviour:

- **width < 960px** - The sidebar is hidden, the header and footer shown.
- **width < 500px** - The side padding gets halved.

Customization options (selector: `.layout-sidebar`):

- `--header-height` (default: `3.4em`)
- `--footer-height` (default: `4.4em`)
- `--sidebar-width` (default: `260px`)
- `--content-width` (default: `640px`)
- `--modal-width` (default: `700px`)
- `--content-gap` (default: `2em`)
