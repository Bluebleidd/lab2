(function () {
  const example = document.getElementById('example')
  const cw1 = document.getElementById('cw1')
  const cw2 = document.getElementById('cw2')
  const cw3 = document.getElementById('cw3')
  const cw4 = document.getElementById("cw4")
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
    fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then((response) => response.json())
    .then((array) => {
      console.log(array);
      answer.innerHTML = JSON.stringify(array);
    });
  })

  cw4.addEventListener("click", function () {
    answer.innerHTML = "Processing…";

    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=UTF-8"
      },
      body: JSON.stringify({
        title: "Nowy Post",
        body: "Tekst nowego posta",
        userId: 1
      })
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        answer.innerHTML = `Dodano nowy post o ID = ${data.id}`;
      })
  })

})();
