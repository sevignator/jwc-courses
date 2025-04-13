import { faker } from '@faker-js/faker';

export function getRandomWord(length: number) {
  return faker.word
    .noun({
      length,
    })
    .toUpperCase();
}

export function range(start: number, end?: number, step = 1) {
  let output = [];
  if (typeof end === 'undefined') {
    end = start;
    start = 0;
  }
  for (let i = start; i < end; i += step) {
    output.push(i);
  }
  return output;
}

export function getPreferredColorScheme() {
  return window?.matchMedia &&
    window.matchMedia('(prefers-color-scheme: light)').matches
    ? 'light'
    : 'dark';
}
