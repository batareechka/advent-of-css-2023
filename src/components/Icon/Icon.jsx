export function Icon({ id, size = 24 }) {
  return (
    <svg fill="currentColor" width={size} height={size}>
      <use href={`/sprite.svg#${id}`} />
    </svg>
  );
}
