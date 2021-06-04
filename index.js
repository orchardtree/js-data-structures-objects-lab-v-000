// Write your solution in this file!
const driver = [];

function updateDriverWithKeyAndValue(driver, key, value) {
  const newDriver = { ...driver };
  newDriver[key] = value;
  return newDriver;
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  driver[key] = value;
  console.log(driver);
}

function deleteFromDriverByKey(driver, key) {
  const newDriver = {...driver};
  delete newDriver.key;
  return newDriver;
}

function destructivelyDeleteFromDriverByKey() {

}
