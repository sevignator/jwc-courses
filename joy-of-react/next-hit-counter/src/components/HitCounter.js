import { readFile, writeFile } from '../helpers/file-helpers';

const DATABASE_PATH = '/src/database.json';

async function HitCounter() {
  const json = await readFile(DATABASE_PATH);
  const { hits } = JSON.parse(json);
  const nextHits = hits + 1;

  writeFile(
    DATABASE_PATH,
    JSON.stringify({
      hits: nextHits,
    })
  );

  return nextHits;
}

export default HitCounter;
