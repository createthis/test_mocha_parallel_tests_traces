# Getting Started

```bash
npm install
npm test
npm test -- -g other # uses mocha-parallel-tests and does NOT grep properly and runs entire suite.
npm run mochatest -- -g other # uses regular mocha and DOES grep properly, running only other test
```
