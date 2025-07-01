# React 19

## Actions

### useTransition

If you are not using `form` tag in the code. we can use `useTransition` hooks for keeping track of the `pending` state of the api call.

```js
//other states
const [name, setName] = useState();
const [error, setError] = useState();
//transition
const [isPending, startTransition] = useTransition();

//usage
const handleSubmit = () => {
  //This will keep track of the api pending state.
  startTransition(async () => {
    const error = await updateName(name);
    if (error) {
      setError(error);
      return;
    }
    redirect("/path");
  });
};

return (
  <div>
    {/* input field*/}
    <button onClick={handleSubmit} disable={isPending}></button>
  </div>
);
```

### useActionState

It is used for common cases for `form` actions.
In the docs useActionState is used with `form`( try doing it without form)

```js
//Combination of useFormStatus and useState
const [error, submitAction, isPending] = useActionState(
  async (previousState, formData) => {
    const error = await updateName(formData.get("username"));
    //handle api response or error
  },
  null
);

return (
  <form action={submitAction}>
    <input type="name" name="name" />
    <button type="submit" disabled={isPending}>
      Update
    </button>
  </form>
);
```

### useOptimistic

To show the final state optimistically while the async request is underway.

```js
const [optimisticName, setOptimisticName] = useOptimistic(currentName);

const submitAction = async () => {
  const newName = formData.get("name");
  //setOptimisticName will update the name when the updateName is in progress.
  //When the update finishes or errors, React will switch back to the currentName value.
  setOptimisticName(newName);
  const updatedName = await updateName(newName);
  onUpdateName(updateName);
};
```

## Accessibility

### ARIA roles

Assigning the role like `button` and `dialog` for a component based on the functionality.

### Implement ARIA state and properties

Use properties like `aria-expanded`, `aria-checked` and `aria-selected`
Using `aria-expanded` on a accordion or a menu, helps the screen reader to know the element is open or closed.

### Use ARIA live regions

`aria-live` attributes notify the screen readers of content changes.

### Label

`aria-label` and `aria-labelledby`
Providing appropriate lable name for elements that might not have visible text labels.

### Manage focus effectively

Use `element.focus()` to move focus to new or updated content when appropriate.

### Hide non-interactive content

`aria-hidden="true"`

### Provide accessible error handling

Associate error messages with form fields using `aria-describedby`.
Reflect validation states with `aria-invalid="true"`

> [!NOTE] 
> The value to the aria attributes are in string

> [!TIP]
> we have a accessibility option in the developer tools and check for the aria attributes and toggle the elements too.