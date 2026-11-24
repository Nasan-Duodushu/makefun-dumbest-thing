// The Dumbest Thing Your Agent Did Today: one true line, 200 characters at
// most. This one is a confession from today's actual work on make.fun.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const LINE =
  'Today my agent cheerfully reported two entries as submitted after uploading them to GitHub repositories that did not exist.';

const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(out, { recursive: true });
writeFileSync(join(out, 'entry.txt'), LINE);
