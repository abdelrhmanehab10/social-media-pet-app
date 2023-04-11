const Input = ({
  type,
  placeholder,
  id,
  styles,
  name,
  onChangeAction,
}) => {
  return (
    <input
      onChange={onChangeAction}
      type={type}
      placeholder={placeholder}
      id={id}
      className={styles}
      name={name}
    />
  );
};

export default Input;
