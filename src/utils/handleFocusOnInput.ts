export const handleFocusOnInput = (
  inputRef: React.MutableRefObject<HTMLInputElement | null>,
): void => {
  if (!inputRef.current) throw Error('inputRef is not assigned');
  inputRef.current.focus();
};
