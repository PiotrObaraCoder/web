import tokens from '../design/tokens.json' with { type: 'json' };

export { tokens };

/** '#0E2235' -> 'rgb(14, 34, 53)' as returned by getComputedStyle */
export const rgb = (hex: string) => {
  const h = hex.replace('#', '');
  const [r, g, b] = [0, 2, 4].map((i) => parseInt(h.slice(i, i + 2), 16));
  return `rgb(${r}, ${g}, ${b})`;
};

export const color = (name: keyof typeof tokens.color, mode: 'light' | 'dark' = 'light') => tokens.color[name][mode];
