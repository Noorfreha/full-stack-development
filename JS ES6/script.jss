setTimeout(function () {
    console.log("DB-1 Query entertained");
  }, 0);
  
  console.log("1");
  console.log("2");
  console.log("3");
  
  setTimeout(function () {
    console.log("DB-2 Query entertained");
  }, 10); // ← You missed a comma here in your version
  
  console.log("4");
  console.log("5");
  
  console.log("6"); // ← You had a typo: 'console,log'
  console.log("7")     

  