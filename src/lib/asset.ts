/** Path to a file in public/, with the GitHub Pages base path when building for Pages. */
export function asset(path: string): string {
  return `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`;
}
