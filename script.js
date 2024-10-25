(function () {
  const example = document.getElementById('example')
  const cw1 = document.getElementById('cw1')
  const cw2 = document.getElementById('cw2')
  const cw3 = document.getElementById('cw3')
  const answer = document.getElementById('answer')

  example.addEventListener("click", function () {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(array => {
        console.log(array)
        answer.innerHTML = JSON.stringify(array);
      })
  })

  cw1.addEventListener("click", function () {
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((array) => {
      console.log(array);
      for (let i = 0; i < array.length; i++) {
        answer.innerHTML +=
          JSON.stringify(array[i].userId) +
          "<br>" +
          JSON.stringify(array[i].id) +
          "<br>" +
          JSON.stringify(array[i].title) +
          "<br>" +
          JSON.stringify(array[i].body) +
          "<br>";
      }
    });
  })

  cw2.addEventListener("click", function () {
    answer.innerHTML = "Loading...";
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((array) => {
        var temp = "";
        console.log(array);
        for (let i = 0; i < array.length; i++) {
          temp +=
            JSON.stringify(array[i].userId) +
            "<br>" +
            JSON.stringify(array[i].id) +
            "<br>" +
            JSON.stringify(array[i].title) +
            "<br>" +
            JSON.stringify(array[i].body) +
            "<br>";
        }
        answer.innerHTML = temp;
      });
  })

  cw3.addEventListener("click", function () {
    //TODO
  })

})();
