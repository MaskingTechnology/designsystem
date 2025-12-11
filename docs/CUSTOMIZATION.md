# Customization | Masking Technology Design System

Customizations can be made globally and per element / component.

```css
/* customizations.css */

.mtds
{
    /* Global options */
    --font-family: 'Inter', sans-serif;

    /* Element / component specific options (by selector) */
    .button
    {
        --type-primary-background-color: #e06666;
        --type-primary-foreground-color: #ffffff;
        --type-secondary-background-color: #cccccc;
    }
}
```

All global options can be found below. Specific selectors and options can be found in the [elements](./ELEMENTS.md) and [components](./COMPONENTS.md) documentation.

## Activation

Customizations must be loaded after loading the design system style.

```tsx
import '@maskingtech/designsystem/style.css';
import '/path/to/customizations.css';
```

## Global options

### Font

- `--font-family` (default: `sans-serif`)
- `--font-size` (default: `16px`)
- `--font-weight-extra-light` (default: `200`)
- `--font-weight-light` (default: `300`)
- `--font-weight-normal` (default: `400`)
- `--font-weight-medium` (default: `500`)
- `--font-weight-semi-bold` (default: `600`)
- `--font-weight-bold` (default: `700`)

### Color

- `--color-background` (default: `transparent`)
- `--color-background-hover` (default: `#efefef`)
- `--color-foreground` (default: `#000000`)
- `--color-border` (default: `#b7b7b7`)
- `--color-primary-background` (default: `#ffffff`)
- `--color-primary-foreground` (default: `#000000`)
- `--color-secondary-background` (default: `#f3f3f3`)
- `--color-secondary-foreground` (default: `#666666`)
- `--color-primary-action-background` (default: `#cccccc`)
- `--color-primary-action-foreground` (default: `#000000`)
- `--color-secondary-action-background` (default: `#f3f3f3`)
- `--color-secondary-action-foreground` (default: `#000000`)
- `--color-input-background` (default: `#ffffff`)
- `--color-input-foreground` (default: `#000000`)
- `--color-alert-background` (default: `#d9d9d9`)
- `--color-alert-foreground` (default: `#666666`)
- `--color-error-background` (default: `#666666`)
- `--color-error-foreground` (default: `#f3f3f3`)
- `--color-warning-background` (default: `#999999`)
- `--color-warning-foreground` (default: `#f3f3f3`)
- `--color-success-background` (default: `#efefef`)
- `--color-success-foreground` (default: `#666666`)

### Size

- `--margin-container` (default: `0 0 1.2em 0`)
- `--width-border` (default: `0.05em`)
