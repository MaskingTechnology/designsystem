# Elements | Masking Technology Design System

The following elements are available:

* **Container:** `Border`, `Panel`, `Modal`, `Navigation`
* **Layout:** `Grid`, `Column`, `Row`, `Cell`
* **Text:** `Title`, `Paragraph`, `Text`, `List`
* **Interaction:** `Button`, `Clickarea`, `Link`
* **Form:** `Form`, `Input`, `Label`, `DateTime`, `Select`, `TextArea`, `TextBox`, `CheckBox`
* **Graphic:** `Avatar`, `Icon`, `Image`
* **Other:** `Ruler`, `Spinner`

All details are described per category below.

## Container elements

### Border

A bordered container element.

Properties:

- **type** - `normal` | `dashed` | `dotted` (optional, default `normal`)
- **padding** - `none` | `small` | `medium` | `large` (optional, default `large`)
- **size** - `small` | `medium` | `large` (optional, default `large`)

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
- `--padding-large` (default: `var(--container-padding-small)`)
- `--padding-medium` (default: `var(--container-padding-medium)`)
- `--padding-small` (default: `var(--container-padding-large)`)
- `--size-large` (default: `var(--element-border-small)`)
- `--size-medium` (default: `var(--element-border-medium)`)
- `--size-small` (default: `var(--element-border-large)`)

### Panel

A versatile container for contextual content (alerts, messages, etc.).

Properties:

- **padding** - `small` | `medium` | `large` (optional, default `large`)
- **type** - `normal` | `alert` | `warning` | `success` | `error` | `transparent` (optional, default `normal`)
- **children** - ReactNode (optional)

Example:

```tsx
import { Panel } from '@maskingtech/designsystem';

<Panel padding='small' type='warning'>Check this out</Panel>
```

Customization options (selector: `.panel`):

- `--border-radius` (default: `0`)
- `--margin` (default: `0`)
- `--padding-small` (default: `var(--container-padding-small)`)
- `--padding-medium` (default: `var(--container-padding-medium)`)
- `--padding-large` (default: `var(--container-padding-large)`)
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

- **id** - string | undefined (optional, default `undefined`)
- **open** - boolean (optional, default `true`)
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

### Navigation

A navigation container for semantic content (links).

Properties:

- **padding** - `none` | `small` | `medium` | `large` (optional, default `none`)
- **children** - ReactNode (optional)

Example:

```tsx
import { Navigation } from '@maskingtech/designsystem';

<Navigation padding='small'>Main Menu</Navigation>
```

Customization options (selector: `.navigation`):

- `--margin` (default: `0`)
- `--padding-small` (default: `var(--container-padding-small)`)
- `--padding-medium` (default: `var(--container-padding-medium)`)
- `--padding-large` (default: `var(--container-padding-large)`)

## Layout elements

### Grid

A grid layout with preset column layouts and gaps.

Properties:

- **layout** - `two-columns` | `three-columns` | `four-columns` (required)
- **gap** - `none` | `small` | `medium` | `large` (optional, default `medium`)
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

- `--gap-small` (default: `var(--container-padding-small)`)
- `--gap-medium` (default: `var(--container-padding-medium)`)
- `--gap-large` (default: `var(--container-padding-large)`)

### Column

A vertical layout container with alignment and gap options.

Properties:

- **alignX** - `left` | `center` | `right` | `stretch` (optional, default `left`)
- **alignY** - `top` | `center` | `bottom` | `justify` (optional, default `top`)
- **gap** - `none` | `small` | `medium` | `large` (optional, default `medium`)
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

- `--gap-small` (default: `var(--container-gap-small)`)
- `--gap-medium` (default: `var(--container-gap-medium)`)
- `--gap-large` (default: `var(--container-gap-large)`)

### Row

A horizontal layout container with alignment and gap options.

Properties:

- **alignX** - `left` | `center` | `right` | `justify` (optional, default `left`)
- **alignY** - `top` | `center` | `bottom` | `stretch` (optional, default `top`)
- **gap** - `none` | `small` | `medium` | `large` (optional, default `medium`)
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

- `--gap-small` (default: `var(--container-gap-small)`)
- `--gap-medium` (default: `var(--container-gap-medium)`)
- `--gap-large` (default: `var(--container-gap-large)`)

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

### Table

A table layout with a head, body and footer containing rows and cells.

`Table` properties:

- **padding** - `small` | `medium` | `large` (optional, default `medium`)
- **children** - `ReactElement<Table.Header | Table.Body | Table.Footer>` (required)

`Table.Header` properties:

- **children** - `ReactElement<Table.Row>` (required)

`Table.Body` properties:

- **border** - `none` | `small` | `medium` | `large` (optional, default `medium`)
- **children** - `ReactElement<Table.Row>` (required)

`Table.Footer` properties:

- **children** - `ReactElement<Table.Row>` (required)

`Table.Row` properties:

- **children** - `ReactElement<Table.Cell>` (required)

`Table.Cell` properties:

- **colspan** - number (optional)
- **rowspan** - number (optional)
- **alignX** - `left` | `center` | `right` (optional, default `left`)
- **alignY** - `top` | `center` | `bottom` (optional, default `center`)
- **size** - `95` | `90` | `85` | `80` | `75` | `70` | `65` | `60` | `55` | `50` | `45` | `40` | `35` | `30` | `25` | `20` | `15` | `10` | `5` % (optional, default `fluid`)
- **children** - ReactNode

Example:

```tsx
import { Table } from '@maskingtech/designsystem';

<Table>
  <Table.Header>
    <Table.Row>
      <Table.Cell size='30'>Month</Table.Cell>
      <Table.Cell size='70'>Amount</Table.Cell>
    </Table.Row>
  </Table.Header>
  <Table.Body>
    <Table.Row>
      <Table.Cell alignX='left'>January</Table.Cell>
      <Table.Cell alignX='right'>200</Table.Cell>
    </Table.Row>
  </Table.Body>
  <Table.Footer>
    <Table.Row>
      <Table.Cell colspan='2'>Total: 200</Table.Cell>
    </Table.Row>
  </Table.Footer>
</Table>
```

Customization options (selector: `.table`):

- `--padding-large` (default: `1em`)
- `--padding-medium` (default: `0.7em`)
- `--padding-small` (default: `0.4em`)
- `--header-background-color` (default: `var(--color-border);`)
- `--header-forground-color` (default: `var(--color-primary-foreground)`)
- `--row-odd-color` (default: `var(--color-primary-background)`)
- `--row-even-color` (default: `var(--color-secondary-background)`)
- `--footer-border-small` (default: `var(--element-border-small)`)
- `--footer-border-medium` (default: `var(--element-border-medium)`)
- `--footer-border-large` (default: `var(--element-border-large)`)
- `--footer-border-color` (default: `var(--color-border)`)
- `--footer-forground-color` (default: `var(--color-primary-foreground)`)

## Text elements

### Title

Heading element that maps `size` to `h1`/`h2`/`h3`.

Properties:

- **size** - `small` | `medium` | `large` (optional, default `large`)
- **children** - ReactNode

Example:

```tsx
import { Title } from '@maskingtech/designsystem';

<Title size='medium'>Section title</Title>
```

Customization options (selector: `.title`):

- `--margin` (default: `0 0 0.8em 0`)
- `--size-small` (default: `1em`)
- `--size-medium` (default: `1.5em`)
- `--size-large` (default: `2em`)

### Paragraph

Styled paragraph element.

Properties:

- **size** - `small` | `medium` | `large` (optional, default `medium`)
- **children** - ReactNode

Example:

```tsx
import { Paragraph } from '@maskingtech/designsystem';

<Paragraph size='small'>A short paragraph.</Paragraph>
```

Customization options (selector: `.paragraph`):

- `--margin` (default: `var(--margin-container)`)
- `--line-height` (default: `1.5em`)
- `--size-small` (default: `var(--element-font-small)`)
- `--size-medium` (default: `var(--element-font-medium)`)
- `--size-large` (default: `var(--element-font-large)`)

### Text

Inline text element with variants for type, size and weight.

Properties:

- **value** - string (required)
- **type** - `primary` | `secondary` (optional, default `primary`)
- **size** - `small` | `medium` | `large` (optional, default `medium`)
- **weight** - `light` | `normal` | `bold` (optional, default `normal`)
- **wrap** - `none` | `normal` | `break-word` (optional, default `normal`)

Example:

```tsx
import { Text } from '@maskingtech/designsystem';

<Text value='Label' type='secondary' size='small' />
```

Customization options (selector: `.text`):

- `--primary-color` (default: `var(--color-primary-foreground)`)
- `--secondary-color` (default: `var(--color-secondary-foreground)`)
- `--size-small` (default: `var(--element-font-small)`)
- `--size-medium` (default: `var(--element-font-medium)`)
- `--size-large` (default: `var(--element-font-large)`)
- weights are defined at global level.

### List

Element for ordered and unordered lists.

`List` properties:

- **type** - `ordered` | `unordered` (required)
- **size** - `small` | `medium` | `large` (optional, default `medium`)
- **children** - `ReactElement<List.Item>` (required)

`List.Item` properties:

- **children** - ReactNode

Example:

```tsx
import { List } from '@maskingtech/designsystem';

<List type='ordered' size='small'>
  <List.Item>First</List.Item>
  <List.Item>Second</List.Item>
</List>
```

Customization options (selector: `.list`):

- `--margin` (default: `var(--margin)`)

## Interaction elements

### Button

A clickable input element styled as a button.

Properties:

- **type** - `submit` | `primary` | `secondary` | `disabled` (optional, default `primary`)
- **border** - `none` | `small` | `medium` | `large` (optional, default `small`)
- **size** - `small` | `medium` | `large` (optional, default `medium`)
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
- `--border-style` (default: `var(--input-border-style)`)
- `--border-color-disabled` (default: `var(--input-border-color)`)
- `--border-small` (default: `var(--input-border-small)`)
- `--border-medium` (default: `var(--input-border-medium)`)
- `--border-large` (default: `var(--input-border-large)`)
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

A wrapper element that handles clicks and optional alignment, hover effect and padding.

Properties:

- **alignX** - `left` | `center` | `right` (optional, default `left`)
- **effect** - `none` | `hover` (optional, default `none`)
- **padding** - `none` | `small` | `medium` | `large` (optional, default `none`)
- **onClick** - `() => void` (optional)
- **children** - ReactNode (optional)

Example:

```tsx
import { ClickArea } from '@maskingtech/designsystem';

<ClickArea padding='small' onClick={() => alert('clicked')}>Clickable content</ClickArea>
```

Customization options (selector: `.clickarea`):

- `--background-hover-color` (default `var(--input-background-hover-color)`)
- `--margin` (default: `0`)
- `--padding-small` (default: `var(--input-padding-small)`)
- `--padding-medium` (default: `var(--input-padding-medium)`)
- `--padding-large` (default: `var(--input-padding-large)`)

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

- **label** - `ReactElement<Label>` (required)
- **element** - `ReactElement<TextBox | TextArea | Select>` (required)

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

### DateTime

A date and time input.

Properties:

- **name** - string (required)
- **defaultValue** - string (optional)
- **value** - string (optional)
- **title** - string (optional)
- **type** - `datetime` | `date` | `time` | `month` | `week` (optional, default `datetime`)
- **border** - `small` | `medium` | `large` (optional, default `small`)
- **size** - `small` | `medium` | `large` (optional, default `medium`)
- **required** - boolean (optional)
- **onChange** - `ChangeEventHandler<HTMLInputElement>` (optional)

Example:

```tsx
import { TextBox } from '@maskingtech/designsystem';

<TextBox name='firstName' placeholder='First name' />
```

Customization options (selector: `.datetime`):

- `--margin` (default: `0`)
- `--border-color` (default: `var(--input-border-color)`)
- `--border-style` (default: `var(--input-border-style)`)
- `--border-small` (default: `var(--input-border-small)`)
- `--border-medium` (default: `var(--input-border-medium)`)
- `--border-large` (default: `var(--input-border-large)`)
- `--size-small` (default: `var(--input-padding-large)`)
- `--size-medium` (default: `var(--input-padding-large)`)
- `--size-large` (default: `var(--input-padding-large)`)

### Select

A styled select element that accepts a `Map` of options.

Properties:

- **name** - string (required)
- **options** - `Map<string, string>` (required)
- **defaultValue** - string (optional)
- **value** - string (optional)
- **border** - `small` | `medium` | `large` (optional, default `small`)
- **size** - `small` | `medium` | `large` (optional, default `medium`)
- **onChange** - `ChangeEventHandler<HTMLSelectElement>` (optional)

Example:

```tsx
import { Select } from '@maskingtech/designsystem';

const options = new Map([['a', 'Option A'], ['b', 'Option B']]);

<Select name='example' options={options} defaultValue='a' />
```

Customization options (selector: `.select`):

- `--margin` (default: `0`)
- `--border-color` (default: `var(--input-border-color)`)
- `--border-style` (default: `var(--input-border-style)`)
- `--border-small` (default: `var(--input-border-small)`)
- `--border-medium` (default: `var(--input-border-medium)`)
- `--border-large` (default: `var(--input-border-large)`)
- `--size-small` (default: `var(--input-padding-large)`)
- `--size-medium` (default: `var(--input-padding-large)`)
- `--size-large` (default: `var(--input-padding-large)`)

### TextArea

A multiline text input.

Properties:

- **name** - string (required)
- **placeholder** - string (optional)
- **defaultValue** - string (optional)
- **value** - string (optional)
- **border** - `small` | `medium` | `large` (optional, default `small`)
- **size** - `small` | `medium` | `large` (optional, default `medium`)
- **cols** - number (optional)
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
- `--border-color` (default: `var(--input-border-color)`)
- `--border-style` (default: `var(--input-border-style)`)
- `--border-small` (default: `var(--input-border-small)`)
- `--border-medium` (default: `var(--input-border-medium)`)
- `--border-large` (default: `var(--input-border-large)`)
- `--size-small` (default: `var(--input-padding-large)`)
- `--size-medium` (default: `var(--input-padding-large)`)
- `--size-large` (default: `var(--input-padding-large)`)

### TextBox

A single-line text input.

Properties:

- **name** - string (required)
- **placeholder** - string (optional)
- **defaultValue** - string (optional)
- **value** - string (optional)
- **limit** - number (optional)
- **pattern** - string (optional)
- **title** - string (optional)
- **type** - `email` | `number` | `password` | `search` | `text` | `tel` | `url` (optional, default `text`)
- **border** - `small` | `medium` | `large` (optional, default `small`)
- **size** - `small` | `medium` | `large` (optional, default `medium`)
- **required** - boolean (optional)
- **onChange** - `ChangeEventHandler<HTMLInputElement>` (optional)

Example:

```tsx
import { TextBox } from '@maskingtech/designsystem';

<TextBox name='firstName' placeholder='First name' />
```

Customization options (selector: `.textbox`):

- `--margin` (default: `0`)
- `--border-color` (default: `var(--input-border-color)`)
- `--border-style` (default: `var(--input-border-style)`)
- `--border-small` (default: `var(--input-border-small)`)
- `--border-medium` (default: `var(--input-border-medium)`)
- `--border-large` (default: `var(--input-border-large)`)
- `--size-small` (default: `var(--input-padding-large)`)
- `--size-medium` (default: `var(--input-padding-large)`)
- `--size-large` (default: `var(--input-padding-large)`)

### CheckBox

A check box input with a label.

Properties:

- **name** - string (required)
- **label** - string (required)
- **checked** - boolean (optional, default `false`)
- **value** - string (optional)
- **required** - boolean (optional)
- **onChange** - `ChangeEventHandler<HTMLInputElement>` (optional)

Example:

```tsx
import { CheckBox } from '@maskingtech/designsystem';

<CheckBox name='enabled' label='Option enabled' />
```

This element does not have customization options.

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

`attachment` | `bookmark` | `box` | `box-checked` | `box-crossed` | `calendar` | `caution` | `check` | `clock` | `close` | `cloud` | `comment` |
`diamond` | `eye` | `flag` | `heart` | `home` | `info` | `lock` | `mail` | `music` | `pencil` | `phone` | `piece` | `plus` | `question` | `rain` |
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
- `--size-large` (default: `var(--element-border-small)`)
- `--size-medium` (default: `var(--element-border-medium)`)
- `--size-small` (default: `var(--element-border-large)`)

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
