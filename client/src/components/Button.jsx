const Button = ({disabled, children, styles, onClickAction}) => {
  return (
    <button
      onClick={onClickAction}
      className={styles}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
