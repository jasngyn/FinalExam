// JavaScript Document

let requestURL = 'https://jessicagilfillan.github.io/Final_Exam_Prep/Q3/cats.json';

let request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
	let listCats = request.response;
	console.log(listCats);
	cats(listCats);
};

function cats(jsonObj) {
	let cats = jsonObj.cats;
	let section = document.querySelector('section');
	for(let i = 0; i < cats.length; i++) {
		let article = document.createElement('article');
		let img = document.createElement('img');
		let h2 = document.createElement('h2');
		let p1 = document.createElement('p');
		let p2 = document.createElement('p');
		let p3 = document.createElement('p');
		
		img.setAttribute('src', 'https://github.com/JessicaGilfillan/Final_Exam_Prep/tree/master/Q3/assets/' + cats[i].image);
		h2.textContent = cats[i].name;
		p1.textContent = 'species' + cats[i].species;
		p2.textContent = 'favFoods ' + cats[i].favFoods;
		p3.textContent = 'age ' + cats[i].age;
		
		article.appendChild(img);
		article.appendChild(h2);
		article.appendChild(p1);
		article.appendChild(p2);
		article.appendChild(p3);
		section.appendChild(article);
	}
}