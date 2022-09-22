import { useState } from 'react';

export default useToggle = initialValue => {
  const [value, setValue] = useState(initialValue);

  const toggleValue = value => {
    setValue(currentValue =>
      typeof value === 'boolean' ? value : !currentValue
    );
  };
  return [value, toggleValue];
};
// Usage -> const [state,setState] = useToggle(boolean)
