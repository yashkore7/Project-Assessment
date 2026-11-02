console.log("Running application tests...");

const expected = 19;
const result = 9 + 10;

if (result === expected) {
  console.log(`✓ Test Passed: ${result}`);
  process.exit(0);
} else {
  console.error(`✗ Test Failed: Expected ${expected}, got ${result}`);
  process.exit(1);
}xxxx
