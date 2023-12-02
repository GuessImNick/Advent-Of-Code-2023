var fs = require("fs");

const day1part1 = () => {
  const data = fs.readFileSync(
    "days/day1/aoc_2023_day_1_input.txt",
    function (err, data) {
      return data;
    }
  );

  const dataArr = data
    .toString()
    .split("\n")
    .map((str) => {
      const returnedData = [];
      const strArr = str.replace(/\D/g, "").split("");
      returnedData.push(strArr[0], strArr[strArr.length - 1]);
      return parseInt(returnedData.join(""));
    });

  const result = dataArr
    .filter((value) => !isNaN(value))
    .reduce((a, b) => a + b);

  console.log(result);
};

const day1part2 = async () => {
  let answer = [];
  const numbersAsString = {
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  };

  const data = fs.readFileSync(
    "days/day1/aoc_2023_day_1_input.txt",
    function (err, data) {
      return data;
    }
  );

  const dataArr = data
    .toString()
    .split("\n")
    .map((str) => {
      const parsedArr = [];
      const strAsArr = str.split("");
      let tempStr = "";
      strAsArr.forEach((char, index) => {
        if (isNaN(parseInt(char))) {
          tempStr += char;
          if (index === strAsArr.length - 1)
            tempStr.length > 0 ? parsedArr.push(tempStr) : null;
        } else {
          tempStr.length > 0 ? parsedArr.push(tempStr) : null;
          parsedArr.push(char);
          tempStr = "";
        }
      });
      return parsedArr;
    });

  dataArr.forEach((data) => {
    const tempArr = [];
    data.forEach((str) => {
      if (tempArr.length === 0) {
        if (!isNaN(parseInt(str)) && tempArr.length !== 1) {
          tempArr.push(parseInt(str));
        } else {
          tempStr = "";
          str.split("").forEach((char) => {
            tempStr += char;
            if (tempStr.length >= 3) {
              Object.keys(numbersAsString).forEach((key) => {
                if (tempStr.includes(key) && tempArr.length !== 1) {
                  tempArr.push(numbersAsString[key]);
                }
              });
            }
          });
        }
      }
    });

    data
      .slice()
      .reverse()
      .forEach((str) => {
        if (tempArr.length === 1) {
          if (!isNaN(parseInt(str)) && tempArr.length !== 2) {
            tempArr.push(parseInt(str));
          } else {
            tempStr = "";
            str
              .split("")
              .reverse()
              .forEach((char) => {
                tempStr += char;
                if (tempStr.length >= 3) {
                  Object.keys(numbersAsString).forEach((key) => {
                    if (
                      tempStr.split("").reverse().join("").includes(key) &&
                      tempArr.length !== 2
                    ) {
                      tempArr.push(numbersAsString[key]);
                    }
                  });
                }
              });
          }
        }
      });
    answer.push(parseInt(tempArr.join("")));
  });
  const result = answer
    .filter((value) => !isNaN(value))
    .reduce((a, b) => a + b);
  console.log(result);
};

day1part2();
