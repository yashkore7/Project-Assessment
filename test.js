console.log("Running application tests...");

const result = 2 + 2;

if (result === 4) {
  console.log("Tests Passed");
  process.exit(0);
} else {
  console.log("Tests Failed");
  process.exit(1);
}
