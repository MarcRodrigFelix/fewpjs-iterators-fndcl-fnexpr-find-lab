

const record = [
  {year: "2018", result: "L"},
  {year: "2017", result: "W"},
  {year: "2016", result: "N/A"}
];



function superbowlWin(arrayOfObjects){
  const superbowl = arrayOfObjects.find( obj => obj.result === "W")

  return superbowl ? superbowl.year : undefined
};
