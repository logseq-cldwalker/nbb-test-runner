#!/usr/bin/env node

import { loadFile, addClassPath } from '@logseq/nbb-logseq'
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const __dirname = fileURLToPath(dirname(import.meta.url));
addClassPath(resolve(__dirname, 'src'));
const { main } = await loadFile(resolve(__dirname, 'src/nextjournal/test_runner.cljs'));

// Necessary to find project and its test namespaces
addClassPath(resolve('.', 'src'));
addClassPath(resolve('.', 'test'));

// Expects to be called as node X.js ...
const args = process.argv.slice(2)
main.apply(null, args);
