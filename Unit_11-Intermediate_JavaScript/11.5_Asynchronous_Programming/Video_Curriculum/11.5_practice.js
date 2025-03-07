// let promise = fetch(wordnikAPI);
// promise.then(gotData);
// promise.catch(gotErr);

// function gotData(data){
//     console.log(data);
// }

// function gotErr(err){
//     console.log(err);
// }

// fetch(wordnikAPI)
//     .then(function (data){
//      console.log(data);
// }
// ).catch(function (err){
//     console.log(err);
// });

// fetch(wordnikAPI)
//     .then(data => console.log (data))
//     .catch(err => console.log(err));

//     fetch(wordnikAPI)
//     .then(response => response.json())
//     .then (json => createP(json.word))
//     .catch(err => console.log(err));

    function setup() {
        noCanvas();
        setTimeout(sayHellom, 1000);
    }

    function sayHello() {
        createP('hello');
    }