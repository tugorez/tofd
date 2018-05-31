# tofd

Converts an object to a FormData representation. Also supports nested arrays, objects, File, and Buffers.

## Installation
```bash
npm i tofd --save
```

## Why
This allows you to declaratively create a `FormData` instead of having to `append` each property.

### Before
```diff
- const payload = new FormData()
- payload.append('first_name', firstName)
- payload.append('last_name', lastName)
+ const payload = tofd({
+   first_name: firstName,
+   last_name: lastName
+ })
fetch('/user', { method: 'POST', body: payload })
```

## Usage
```js
const payload = tofd({
  // Basic data types
  first_name: 'hello',
  last_name: 'hello',
  // Nested arrays and objects
  tags: [{ id: 1 } , { id: 2 }],
  // Files and buffers
  attachments: [File],
  avatar: avatar
})
```

## API
```
tofd(obj: Object): FormData
```
Accepts an object that gets converted into FormData.
