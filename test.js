console.log("Running application tests...");

const result = 5 + 7;

if (result === 12) {
  console.log("Tests Passed");
  process.exit(0);
} else {
  console.log("Tests Failed");
  process.exit(1);
}
