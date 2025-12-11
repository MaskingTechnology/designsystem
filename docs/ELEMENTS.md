# Elements | Masking Technology Design System

The following elements are available:

* **Container:** `Border`, `Panel`, `Modal`
* **Layout:** `Grid`, `Column`, `Row`, `Cell`
* **Text:** `Title`, `Paragraph`, `Text`
* **Interaction:** `Button`, `Clickarea`, `Link`
* **Form:** `Form`, `Input`, `Label`, `Select`, `TextArea`, `TextBox`
* **Graphic:** `Avatar`, `Icon`, `Image`
* **Other:** `Ruler`, `Spinner`

All details are described per category below.

## Container elements

### Border

A bordered container element.

Properties:

- **type** - `normal`| `dashed` | `dotted` (optional, default `normal`)
- **padding** - `large` | `medium` | `small` | `none` (optional, default `large`)
- **size** - `large` | `medium` | `small` (optional, default `large`)

Example:

```tsx
import { Border } from '@maskingtech/designsystem';

<Border padding='small' size='small'>
    <p>This is the bordered content</p>
</Border>
```

Customization options (selector: `.border`):

- `--border-radius` (default: `0`)
- `--color` (default: `var(--color-border)`)
- `--margin` (default: `0`)
- `--padding-large` (default: `2em`)
- `--padding-medium` (default: `1.5em`)
- `--padding-small` (default: `1em`)
- `--size-large` (default: `0.3em`)
- `--size-medium` (default: `0.2em`)
- `--size-small` (default: `0.1em`)

### Panel

A versatile container for contextual content (alerts, messages, etc.).

Properties:

- **padding** - `large` | `medium` | `small` (optional, default `large`)
- **type** - `normal` | `alert` | `warning` | `success` | `error` | `transparent` (optional, default `normal`)
- **children** - ReactNode (optional)

Example:

```tsx
import { Panel } from '@maskingtech/designsystem';

<Panel padding='small' type='warning'>Check this out</Panel>
```

Customization options (selector: `.panel`):

- `--border-radius` (default: `0`)
- `--margin` (default: `0 0 1.5em 0`)
- `--padding-large` (default: `2em`)
- `--padding-medium` (default: `1.5em`)
- `--padding-small` (default: `1em`)
- `--type-normal-background-color` (default: `var(--color-secondary-background)`)
- `--type-normal-foreground-color` (default: `var(--color-primary-foreground)`)
- `--type-alert-background-color` (default: `var(--color-alert-background)`)
- `--type-alert-foreground-color` (default: `var(--color-alert-foreground)`)
- `--type-warning-background-color` (default: `var(--color-warning-background)`)
- `--type-warning-foreground-color` (default: `var(--color-warning-foreground)`)
- `--type-success-background-color` (default: `var(--color-success-background)`)
- `--type-success-foreground-color` (default: `var(--color-success-foreground)`)
- `--type-error-background-color` (default: `var(--color-error-background)`)
- `--type-error-foreground-color` (default: `var(--color-error-foreground)`)

### Modal

A modal dialog built on the native `<dialog>` element.

Properties:

- **open** - boolean (required)
- **sizing** - `full` | `content` (optional, default `content`)
- **children** - ReactNode (optional)

Example:

```tsx
import { Modal } from '@maskingtech/designsystem';

<Modal open={true} sizing='content'>
  <p>Modal content</p>
</Modal>
```

This element does not have customization options.

## Layout elements

### Grid

A grid layout with preset column layouts and gaps.

Properties:

- **layout** - `two-columns` | `three-columns` | `four-columns` (required)
- **gap** - `large` | `medium` | `small` | `none` (optional, default `medium`)
- **children** - ReactNode

Example:

```tsx
import { Grid } from '@maskingtech/designsystem';

<Grid layout='three-columns' gap='small'>
  <div>1</div>
  <div>2</div>
  <div>3</div>
</Grid>
```

Customization options (selector: `.grid`):

- `--gap-small` (default: `0.5em`)
- `--gap-medium` (default: `1em`)
- `--gap-large` (default: `2em`)

### Column

A vertical layout container with alignment and gap options.

Properties:

- **alignX** - `left` | `center` | `right` | `stretch` (optional, default `left`)
- **alignY** - `top` | `center` | `bottom` | `justify` (optional, default `top`)
- **gap** - `large` | `medium` | `small` | `none` (optional, default `medium`)
- **wrap** - `wrap` | `nowrap` (optional, default `nowrap`)
- **children** - ReactNode

Example:

```tsx
import { Column } from '@maskingtech/designsystem';

<Column alignX='center' gap='small'>
  <div>Item 1</div>
  <div>Item 2</div>
</Column>
```

Customization options (selector: `.column`):

- `--gap-small` (default: `0.4em`)
- `--gap-medium` (default: `1em`)
- `--gap-large` (default: `2em`)

### Row

A horizontal layout container with alignment and gap options.

Properties:

- **alignX** - `left` | `center` | `right` | `justify` (optional, default `left`)
- **alignY** - `top` | `center` | `bottom` | `stretch` (optional, default `top`)
- **gap** - `large` | `medium` | `small` | `none` (optional, default `medium`)
- **wrap** - `wrap` | `nowrap` (optional, default `nowrap`)
- **children** - ReactNode

Example:

```tsx
import { Row } from '@maskingtech/designsystem';

<Row alignX='center' gap='large'>
  <div>Left</div>
  <div>Right</div>
</Row>
```

Customization options (selector: `.row`):

- `--gap-small` (default: `0.4em`)
- `--gap-medium` (default: `1em`)
- `--gap-large` (default: `2em`)

### Cell

A layout cell that can be fixed or fluid.

Properties:

- **sizing** - `fixed` | `fluid` (optional, default `fluid`)
- **children** - ReactNode

Example:

```tsx
import { Cell } from '@maskingtech/designsystem';

<Cell sizing='fixed'>Fixed content</Cell>
```

This element does not have customization options.

## Text elements

### Title

Heading element that maps `size` to `h1`/`h2`/`h3`.

Properties:

- **size** - `large` | `medium` | `small` (optional, default `large`)
- **children** - ReactNode

Example:

```tsx
import { Title } from '@maskingtech/designsystem';

<Title size='medium'>Section title</Title>
```

Customization options (selector: `.title`):

- `--margin` (default: `0 0 0.8em 0`)
- `--size-large` (default: `2em`)
- `--size-medium` (default: `1.5em`)
- `--size-small` (default: `1em`)

### Paragraph

Styled paragraph element.

Properties:

- **size** - `large` | `medium` | `small` (optional, default `medium`)
- **children** - ReactNode

Example:

```tsx
import { Paragraph } from '@maskingtech/designsystem';

<Paragraph size='small'>A short paragraph.</Paragraph>
```

Customization options (selector: `.paragraph`):

- `--margin` (default: `var(--margin-container)`)
- `--line-height` (default: `1.5em`)
- `--size-large` (default: `1.5em`)
- `--size-medium` (default: `1em`)
- `--size-small` (default: `0.75em`)

### Text

Inline text element with variants for type, size and weight.

Properties:

- **value** - string (required)
- **type** - `primary` | `secondary` (optional, default `primary`)
- **size** - `large` | `medium` | `small` (optional, default `medium`)
- **weight** - `light` | `normal` | `bold` (optional, default `normal`)
- **wrap** - `none` | `normal` | `break-word` (optional, default `none`)

Example:

```tsx
import { Text } from '@maskingtech/designsystem';

<Text value='Label' type='secondary' size='small' />
```

Customization options (selector: `.text`):

- `--primary-color` (default: `var(--color-primary-foreground)`)
- `--secondary-color` (default: `var(--color-secondary-foreground)`)
- `--size-large` (default: `1.2em`)
- `--size-medium` (default: `1.0em`)
- `--size-small` (default: `0.9em`)
- weights are defined at global level.

## Interaction elements

### Button

A clickable input element styled as a button.

Properties:

- **type** - `submit` | `primary` | `secondary` | `disabled` (optional, default `primary`)
- **size** - `large` | `medium` | `small` (optional, default `medium`)
- **text** - string (required)
- **onClick** - `() => void` (optional)

Example:

```tsx
import { Button } from '@maskingtech/designsystem';

<Button type='primary' size='medium' text='Save' onClick={() => console.log('clicked')} />
```

Customization options (selector: `.button`):

- `--border-radius` (default: `2em`)
- `--margin` (default: `0`)
- `--border-style` (default: `solid`)
- `--border-color` (default: `var(--color-border)`)
- `--border-width` (default: `var(--width-border)`)
- `--type-primary-background-color` (default: `var(--color-primary-action-background)`)
- `--type-primary-foreground-color` (default: `var(--color-primary-action-foreground)`)
- `--type-secondary-background-color` (default: `var(--color-secondary-action-background)`)
- `--type-secondary-foreground-color` (default: `var(--color-secondary-action-foreground)`)
- `--type-disabled-background-color` (default: `transparent`)
- `--size-large` (default: `0.9em 2.2em`)
- `--size-medium` (default: `0.5em 2.2em`)
- `--size-small` (default: `0.2em 2.2em`)

**Note:** the `submit` type has the `primary` style.

### ClickArea

A wrapper element that handles clicks and optional padding.

Properties:

- **padding** - `large` | `medium` | `small` | `none` (optional, default `none`)
- **onClick** - `() => void` (optional)
- **children** - ReactNode (optional)

Example:

```tsx
import { ClickArea } from '@maskingtech/designsystem';

<ClickArea padding='small' onClick={() => alert('clicked')}>Clickable content</ClickArea>
```

Customization options (selector: `.clickarea`):

- `--margin` (default: `0`)
- `--padding-large` (default: `2em`)
- `--padding-medium` (default: `1.5em`)
- `--padding-small` (default: `1em`)
- `--padding-none` (default: `0em`)

### Link

A styled anchor element.

Properties:

- **url** - string (optional)
- **target** - string (optional)
- **children** - ReactNode

Example:

```tsx
import { Link } from '@maskingtech/designsystem';

<Link url='https://example.com' target='_blank'>Visit</Link>
```

Customization options (selector: `.link`):

- `--color` (default: `var(--color-primary-foreground)`)
- `--color-hover` (default: `var(--color-primary-foreground)`)
- `--text-decoration` (default: `dotted underline`)
- `--text-decoration-hover` (default: `underline`)

## Form elements

### Form

A form wrapper that prevents default submit and forwards the form element via a handler.

Properties:

- **children** - ReactNode
- **submitHandler** - `(form: HTMLFormElement) => void` (optional)

Example:

```tsx
import { Form } from '@maskingtech/designsystem';

<Form submitHandler={(form) => console.log('submit', form)}>
  {/* inputs here */}
</Form>
```

This element does not have customization options.

### Input

A labeled input wrapper that composes `Label` with an input element (`TextBox`, `TextArea` or `Select`).

Properties:

- **label** - `ReactElement<LabelProps>` (required)
- **element** - `ReactElement<TextBoxProps | TextAreaProps | SelectProps>` (required)

Example:

```tsx
import { Input, Label, TextBox } from '@maskingtech/designsystem';

<Input label={<Label value='Name' />} element={<TextBox name='name' />} />
```

Customization options (selector: `.input`):

- `--margin` (default: `0 0 1em 0`)
- `--gap` (default: `0.5em`)

### Label

Simple text label for inputs.

Properties:

- **value** - string (required)

Example:

```tsx
import { Label } from '@maskingtech/designsystem';

<Label value='Email' />
```

Customization options (selector: `.label`):

- `--margin` (default: `0`)

### Select

A styled select element that accepts a `Map` of options.

Properties:

- **name** - string (required)
- **options** - `Map<string, string>` (required)
- **value** - string (optional)
- **size** - `large` | `medium` | `small` (optional, default `medium`)
- **onChange** - `ChangeEventHandler<HTMLSelectElement>` (optional)

Example:

```tsx
import { Select } from '@maskingtech/designsystem';

const options = new Map([['a', 'Option A'], ['b', 'Option B']]);

<Select name='example' options={options} />
```

Customization options (selector: `.select`):

- `--margin` (default: `0`)
- `--size-small` (default: `0.4em`)
- `--size-medium` (default: `0.8em`)
- `--size-large` (default: `1.2em`)
- `--border-style` (default: `solid`)
- `--border-color` (default: `var(--color-border)`)
- `--border-width` (default: `var(--width-border)`)

### TextArea

A multiline text input.

Properties:

- **name** - string (required)
- **placeholder** - string (optional)
- **value** - string (optional)
- **size** - `large` | `medium` | `small` (optional, default `medium`)
- **rows** - number (optional)
- **limit** - number (optional)
- **onChange** - `ChangeEventHandler<HTMLTextAreaElement>` (optional)

Example:

```tsx
import { TextArea } from '@maskingtech/designsystem';

<TextArea name='message' placeholder='Write...' rows={4} />
```

Customization options (selector: `.textarea`):

- `--margin` (default: `0`)
- `--size-small` (default: `0.4em`)
- `--size-medium` (default: `0.8em`)
- `--size-large` (default: `1.2em`)
- `--border-style` (default: `solid`)
- `--border-color` (default: `var(--color-border)`)
- `--border-width` (default: `var(--width-border)`)

### TextBox

A single-line text input.

Properties:

- **name** - string (required)
- **placeholder** - string (optional)
- **value** - string (optional)
- **limit** - number (optional)
- **pattern** - string (optional)
- **title** - string (optional)
- **type** - `email` | `number` | `password` | `search` | `text` | `tel` | `url` (optional, default `text`)
- **size** - `large` | `medium` | `small` (optional, default `medium`)
- **required** - boolean (optional)
- **onChange** - `ChangeEventHandler<HTMLInputElement>` (optional)

Example:

```tsx
import { TextBox } from '@maskingtech/designsystem';

<TextBox name='firstName' placeholder='First name' />
```

Customization options (selector: `.textbox`):

- `--margin` (default: `0`)
- `--size-small` (default: `0.4em`)
- `--size-medium` (default: `0.8em`)
- `--size-large` (default: `1.2em`)
- `--border-style` (default: `solid`)
- `--border-color` (default: `var(--color-border)`)
- `--border-width` (default: `var(--width-border)`)

## Graphic elements

### Avatar

A rounded image element.

Properties:

- **source** - string (required)
- **title** - string (optional)
- **alt** - string (optional)
- **width** - string (optional)
- **height** - string (optional)
- **fit** - `fill` | `contain` | `cover` | `none` | `scale-down` (optional, default `contain`)

Example:

```tsx
import { Avatar } from '@maskingtech/designsystem';

<Avatar
    source='http://example.com/avatar.png'
    title='My avatar'
    alt='My avatar'
    width='100px'
/>
```

This element does not have customization options.

### Icon

A simple icon span using a set of predefined icon types.

Types:

`attachment` | `bookmark` | `box` | `box-checked` | `box-crossed` | `calendar` | `caution` | `check` | `clock` | `close` | `cloud` |
`comment` | `diamond` | `eye` | `flag` | `heart` | `home` | `info` | `lock` | `mail` | `music` | `phone` | `piece` | `plus` | `question` | `rain` |
`recycle` | `search` | `settings` | `star` | `sun` | `tag` | `trash` | `umbrella` | `unlock` | `user` | `video` | `warning` | `yinyang`

Properties:

- **type** - one of the supported icon identifiers (required)

Example:

```tsx
import { Icon } from '@maskingtech/designsystem';

<Icon type='search' />
```

This element does not have customization options.

### Image

A styled image element.

Properties:

- **source** - string (required)
- **title** - string (optional)
- **alt** - string (optional)
- **width** - string (optional)
- **height** - string (optional)
- **fit** - `fill` | `contain` | `cover` | `none` | `scale-down` (optional, default `contain`)

Example:

```tsx
import { Image } from '@maskingtech/designsystem';

<Image source='http://example.com/photo.jpg' alt='Example' width='200px' fit='cover' />
```

This element does not have customization options.

## Other elements

### Ruler

A decorative divider either horizontal or vertical.

Properties:

- **direction** - `horizontal` | `vertical` (required)
- **size** - `small` | `medium` | `large` (optional, default `medium`)

Example:

```tsx
import { Ruler } from '@maskingtech/designsystem';

<Ruler direction='horizontal' />
```

Customization options (selector: `.ruler`):

- `--color` (default: `var(--color-border)`)
- `--size-small` (default: `0.1rem`)
- `--size-medium` (default: `0.2rem`)
- `--size-large` (default: `0.3rem`)

### Spinner

A small loading indicator.

Properties:

- **active** - boolean (optional, default `true`)

Example:

```tsx
import { Spinner } from '@maskingtech/designsystem';

<Spinner active={true} />
```

Customization options (selector: `.spinner`):

- `--color` (default: `var(--color-border)`)
- `--size` (default: `2em`)
- `--speed` (default: `1.2s`)
- `--thickness` (default: `0.3em`)
