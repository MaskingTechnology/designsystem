# Customization | Masking Technology Design System

Customizations can be made globally and per layout, element / component.

```css
/* customizations.css */

.mtds
{
    /* Global options */
    --font-family: 'Inter', sans-serif;

    /* Layout, element / component specific options (by selector) */
    .button
    {
        --type-primary-background-color: #e06666;
        --type-primary-foreground-color: #ffffff;
        --type-secondary-background-color: #cccccc;
    }
}
```

All global options can be found below. Specific selectors and options can be found in the [layouts](./LAYOUTS.md), [elements](./ELEMENTS.md) and [components](./COMPONENTS.md) documentation.

## Activation

Customizations must be loaded after loading the design system style.

```tsx
import '@maskingtech/designsystem/style.css';
import '/path/to/customizations.css';
```

## Global options

### Font properties

- `--font-family` (default: `sans-serif`)
- `--font-size` (default: `16px`)
- `--font-weight-extra-light` (default: `200`)
- `--font-weight-light` (default: `300`)
- `--font-weight-normal` (default: `400`)
- `--font-weight-medium` (default: `500`)
- `--font-weight-semi-bold` (default: `600`)
- `--font-weight-bold` (default: `700`)

### Color definitions

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

### Element properties

- `--element-border-small` (default: `0.1em`)
- `--element-border-medium` (default: `0.2em`)
- `--element-border-large` (default: `0.3em`)
- `--element-font-small` (default: `0.9em`)
- `--element-font-medium` (default: `1em`)
- `--element-font-large` (default: `1.2em`)

### Container properties

- `--container-gap-small` (default: `0.4em`)
- `--container-gap-medium` (default: `1em`)
- `--container-gap-large` (default: `2em`)
- `--container-padding-small` (default: `1em`)
- `--container-padding-medium` (default: `1.5em`)
- `--container-padding-large` (default: `2em`)

### Input properties

- `--input-background-hover-color` (default: `rgba(0, 0, 0, 0.05)`)
- `--input-border-style` (default: `solid`)
- `--input-border-color` (default: `var(--color-border)`)
- `--input-border-small` (default: `0.05em`)
- `--input-border-medium` (default: `0.075em`)
- `--input-border-large` (default: `0.1em`)
- `--input-padding-small` (default: `0.4em`)
- `--input-padding-medium` (default: `0.8em`)
- `--input-padding-large` (default: `1.2em`)
