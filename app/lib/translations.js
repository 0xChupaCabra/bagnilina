import fs from 'fs';
import path from 'path';

export async function getTranslations(locale) {
  const filePath = path.join(process.cwd(), 'public', 'locales', locale, 'common.json');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(fileContents);
}