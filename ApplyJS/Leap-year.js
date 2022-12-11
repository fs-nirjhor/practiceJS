//invalid shortcut leapyear
let year = 2020;
let remainder = year % 4;

if (remainder == 0) {
   console.log(year, "Its a leap year!");
} else {
   console.log(year, "Its not a leap year!");
}

// valid leapyear
let y = 1900;
let rem4 = y % 4;
let rem100 = y % 100;
let rem400 = y % 400;

if (rem4 == 0) {
   if (rem100 == 0) {
      if (rem400 == 0) {
         console.log(y, "Its a Leap-year!");
      } else {
         console.log(y, "Its not a Leap-year!");
      }
   } else {
      console.log(y, "Its a Leap-year!");
   }
} else {
   console.log(y, "Its not a Leap-year!");
}
