'use strict';

let tableDiv = document.getElementById('tableDiv');
let formDiv = document.getElementById('formDiv');
let movieName = document.getElementById('movieName');
let catagory = document.getElementById('catagory');
let issueYear = document.getElementById('issueYear');
let submit = document.getElementById('submit');
let form=document.getElementById('form');
let tableEle = document.createElement('table')
tableDiv.appendChild(tableEle);



let imageArr = ['action.png', 'adventure.png', 'animation.png', 'comedy.png', 'detective.png', 'fantasy.png', 'history.png',
    'horror.png', 'musical.png', 'pirate.png', 'romantic.png', 'sci-fi.png', 'war.png', 'western.png'];
let allArr = [];

function Movie(movieName, catagory,issueYear) {

    this.movieName = movieName;
    this.catagory = catagory;
    this.issueYear = issueYear;

    allArr.push(this);

}






// Movie.prototype.getImage=function(){
// for(let i=0; i<imageArr.length;i++){

//     this.imgSrc=imageArr[i].split('.').[0];
// }

// }

function tableHeadRender() {

    let tr0 = document.createElement('tr');
    tableEle.appendChild(tr0);

    let th0 = document.createElement('th');
    th0.textContent = `Movie Name`;
    tr0.appendChild(th0);

    let th1 = document.createElement('th');
    th1.textContent = `Catagory`;
    tr0.appendChild(th1);

    let th2 = document.createElement('th');
    th2.textContent = `Issue Year`;
    tr0.appendChild(th2);

   

}
tableHeadRender();


Movie.prototype.tableRowRender = function () {


    let tr1 = document.createElement('tr');
    tableEle.appendChild(tr1);

    // for (let i = 0; i < allArr.length; i++) {


        let td0 = document.createElement('td');
        td0.textContent = `${this.movieName}`;
        tr1.appendChild(td0);

        let td1 = document.createElement('td');
        td1.textContent = `${this.catagory}`;
        tr1.appendChild(td1);

        let td2 = document.createElement('td');
        td2.textContent = `${this.issueYear}`;
        tr1.appendChild(td2);

        let td3=document.createElement('td');
        let img=document.createElement('img');
        img.src = `./img/${this.catagory}.png`;
        tr1.appendChild(td3);
        td3.appendChild(img);



        // let td3 = document.createElement('td');
        // td3.textContent = `${allArr[i].imgSrc}`;
        // tr1.appendChild(td3);
    // }
    setLocal();
}

form.addEventListener('submit',submitRes);

function submitRes(event){
event.preventDefault();

let movieName = event.target.movieName.value;
let catagory = event.target.catagory.value;
let issueYear = event.target.issueYear.value;
let newMovie=new Movie(movieName, catagory,issueYear);



// newMovie.getFrom();
newMovie.tableRowRender();


return newMovie;

}





function setLocal(){

localStorage.setItem('Movies',JSON.stringify(allArr));

}

function getData(){

let data=localStorage.getItem('Movies');
let parsedData=JSON.parse(data);

if (parsedData){
for(let i=0;i<parsedData.length;i++){

    let newMoviee=new Movie(parsedData[i].movieName,parsedData[i].catagory,parsedData[i].issueYear);
    newMoviee.tableRowRender();
}

}

}
getData();
