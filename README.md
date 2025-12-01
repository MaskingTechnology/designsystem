# Design System | Masking Technology

Simple design system used for our internal projects.

## Installation

```bash
npm install @maskingtech/designsystem
```

## Basic elements

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

### Border

A bordered container element.

Properties:

- **type** - `normal`| `dashed` | `dotted` (optional, default `normal`)
- **size** - `large` | `medium` | `small` (optional, default `large`)
- **padding** - `large` | `medium` | `small` | `none` (optional, default `large`)

Example:

```tsx
import { Border } from '@maskingtech/designsystem';

<Border size='small' padding='small'>
    <p>This is the bordered content</p>
</Border>
```

### Button

A clickable input element styled as a button.

Properties:

- **type** - `submit` | `primary` | `secondary` | `disabled` (optional, default `primary`)
- **size** - `large` | `medium` | `small` (optional, default `medium`)
- **text** - string (required)
- **onClick** - `() => void` (optional)

Example:

```tsx
import { Button } from '@maskingtech.designsystem';

<Button type='primary' size='medium' text='Save' onClick={() => console.log('clicked')} />
```

### Cell

A layout cell that can be fixed or fluid.

Properties:

- **sizing** - `fixed` | `fluid` (optional, default `fluid`)
- **children** - ReactNode

Example:

```tsx
import { Cell } from '@maskingtech.designsystem';

<Cell sizing='fixed'>Fixed content</Cell>
```

### ClickArea

A wrapper element that handles clicks and optional padding.

Properties:

- **padding** - `large` | `medium` | `small` | `none` (optional, default `none`)
- **onClick** - `() => void` (optional)
- **children** - ReactNode (optional)

Example:

```tsx
import { ClickArea } from '@maskingtech.designsystem';

<ClickArea padding='small' onClick={() => alert('clicked')}>Clickable content</ClickArea>
```

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
import { Column } from '@maskingtech.designsystem';

<Column alignX='center' gap='small'>
  <div>Item 1</div>
  <div>Item 2</div>
</Column>
```

### Form

A form wrapper that prevents default submit and forwards the form element via a handler.

Properties:

- **children** - ReactNode
- **submitHandler** - `(form: HTMLFormElement) => void` (optional)

Example:

```tsx
import { Form } from '@maskingtech.designsystem';

<Form submitHandler={(form) => console.log('submit', form)}>
  {/* inputs here */}
</Form>
```

### Grid

A grid layout with preset column layouts and gaps.

Properties:

- **layout** - `two-columns` | `three-columns` | `four-columns` (required)
- **gap** - `large` | `medium` | `small` | `none` (optional, default `medium`)
- **children** - ReactNode

Example:

```tsx
import { Grid } from '@maskingtech.designsystem';

<Grid layout='three-columns' gap='small'>
  <div>1</div>
  <div>2</div>
  <div>3</div>
</Grid>
```

### Icon

A simple icon span using a set of predefined icon types.

Properties:

- **type** - one of the supported icon identifiers (e.g. `attachment`, `bookmark`, `close`, `user`, `search`, etc.) (required)

Example:

```tsx
import { Icon } from '@maskingtech.designsystem';

<Icon type='search' />
```

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
import { Image } from '@maskingtech.designsystem';

<Image source='http://example.com/photo.jpg' alt='Example' width='200px' fit='cover' />
```

### Input

A labeled input wrapper that composes `Label` with an input element (`TextBox`, `TextArea` or `Select`).

Properties:

- **label** - `ReactElement<LabelProps>` (required)
- **element** - `ReactElement<TextBoxProps | TextAreaProps | SelectProps>` (required)

Example:

```tsx
import { Input, Label, TextBox } from '@maskingtech.designsystem';

<Input label={<Label value='Name' />} element={<TextBox name='name' />} />
```

### Label

Simple text label for inputs.

Properties:

- **value** - string (required)

Example:

```tsx
import { Label } from '@maskingtech.designsystem';

<Label value='Email' />
```

### Link

A styled anchor element.

Properties:

- **url** - string (optional)
- **target** - string (optional)
- **children** - ReactNode

Example:

```tsx
import { Link } from '@maskingtech.designsystem';

<Link url='https://example.com' target='_blank'>Visit</Link>
```

### Modal

A modal dialog built on the native `<dialog>` element.

Properties:

- **open** - boolean (required)
- **sizing** - `full` | `content` (optional, default `content`)
- **children** - ReactNode (optional)

Example:

```tsx
import { Modal } from '@maskingtech.designsystem';

<Modal open={true} sizing='content'>
  <p>Modal content</p>
</Modal>
```

### Panel

A versatile container for contextual content (alerts, messages, etc.).

Properties:

- **type** - `normal` | `alert` | `warning` | `success` | `error` | `transparent` (optional, default `normal`)
- **padding** - `large` | `medium` | `small` (optional, default `large`)
- **children** - ReactNode (optional)

Example:

```tsx
import { Panel } from '@maskingtech.designsystem';

<Panel type='warning' padding='small'>Check this out</Panel>
```

### Paragraph

Styled paragraph element.

Properties:

- **size** - `large` | `medium` | `small` (optional, default `medium`)
- **children** - ReactNode

Example:

```tsx
import { Paragraph } from '@maskingtech.designsystem';

<Paragraph size='small'>A short paragraph.</Paragraph>
```

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
import { Row } from '@maskingtech.designsystem';

<Row alignX='center' gap='large'>
  <div>Left</div>
  <div>Right</div>
</Row>
```

### Ruler

A decorative divider either horizontal or vertical.

Properties:

- **direction** - `horizontal` | `vertical` (required)
- **size** - `small` | `medium` | `large` (optional, default `medium`)

Example:

```tsx
import { Ruler } from '@maskingtech.designsystem';

<Ruler direction='horizontal' />
```

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
import { Select } from '@maskingtech.designsystem';

const options = new Map([['a', 'Option A'], ['b', 'Option B']]);

<Select name='example' options={options} />
```

### Spinner

A small loading indicator.

Properties:

- **active** - boolean (optional, default `true`)

Example:

```tsx
import { Spinner } from '@maskingtech.designsystem';

<Spinner active={true} />
```

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
import { Text } from '@maskingtech.designsystem';

<Text value='Label' type='secondary' size='small' />
```

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
import { TextArea } from '@maskingtech.designsystem';

<TextArea name='message' placeholder='Write...' rows={4} />
```

### TextBox

A single-line text input.

Properties:

- **name** - string (required)
- **placeholder** - string (optional)
- **value** - string (optional)
- **limit** - number (optional)
- **pattern** - string (optional)
- **title** - string (optional)
- **size** - `large` | `medium` | `small` (optional, default `medium`)
- **required** - boolean (optional)
- **onChange** - `ChangeEventHandler<HTMLInputElement>` (optional)

Example:

```tsx
import { TextBox } from '@maskingtech.designsystem';

<TextBox name='firstName' placeholder='First name' />
```

### Title

Heading element that maps `size` to `h1`/`h2`/`h3`.

Properties:

- **size** - `large` | `medium` | `small` (optional, default `large`)
- **children** - ReactNode

Example:

```tsx
import { Title } from '@maskingtech.designsystem';

<Title size='medium'>Section title</Title>
```

## Components

### Dropdown

Simple selection dropdown (custom UI) that accepts a `Map` of options.

Properties:

- **options** - `Map<string, string>` (required)
- **selected** - string (optional, key of the selected option)
- **onChange** - `(oldKey: string, newKey: string) => void` (optional)

Example:

```tsx
import { Dropdown } from '@maskingtech.designsystem';

const opts = new Map([['a','A'],['b','B']]);
<Dropdown options={opts} selected='a' onChange={(o,n)=>console.log(o,n)} />
```

### Tabs / Tab

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
import { Tabs, Tab } from '@maskingtech.designsystem';

<Tabs selectedId='tab1' onChange={(n,o)=>console.log(n,o)}>
  <Tab id='tab1' title='First'>First content</Tab>
  <Tab id='tab2' title='Second'>Second content</Tab>
</Tabs>
```