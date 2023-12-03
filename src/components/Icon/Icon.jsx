function Icon({ contextClass, id, size = 24 }) {
  return (
    <svg
      className={contextClass}
      fill="currentColor"
      width={size}
      height={size}
    >
      <use href={`/sprite.svg#${id}`} />
    </svg>
  );
}

export default Icon;
