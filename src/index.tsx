export function multiply(a: number, b: number): number {
  // @ts-expect-error global func is a native JSI func
  return global.multiply(a, b);
}