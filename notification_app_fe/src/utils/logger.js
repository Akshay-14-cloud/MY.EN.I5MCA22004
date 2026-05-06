export function Log(stack, level, pkg, message) {
  console.log(`[${level}] [${stack}] [${pkg}] ${message}`);
}