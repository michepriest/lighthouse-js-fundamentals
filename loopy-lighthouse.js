for (var i = 100; i <= 200; i++) {
  console.log(i);
  var multipleOf3 = (i % 3 === 0);
  var multipleOf4 = (i % 4 === 0);

  if (multipleOf3 && multipleOf4) {
    console.log("LoopyLighthouse");

  } else if (multipleOf3) {
    console.log("Loopy");

  } else if (multipleOf4) {
    console.log("Lighthouse");
  } else {
    console.log(i);
  }
}