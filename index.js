console.log("Script running!")

// This is the arrays you'll interact with! It's pretty good. Scroll down for the first challenge.
let names = ["Daniel","Yaika","Luke","William","Kathryn","Taylor","Makenzie","Brenton","Max","Mike","Olivia","Rebecca","Daley","Tim","Ahmad","Chelsey","Faedra","Terrace","Kate","Zaire"]

let nickname = ["Danny","Yikes","Loki","Wild Bill","Kath","Tay","Kenzy","Smelly","Smallman","","Liv","Becca","","Tim","Ahms","","Mattox","T-Dawg","KMoMo",""]

let age = [31,30,28,29,51,25,27,30,100,19,26,29,25,27,29,29,43,31,27,29]

let favoriteBand = ["Booker T and the MGs","OAR","Miike Snow","Pentatonix","Imagine Dragons","Joseph","Something Corporate","Guster","adele","Led Zeppelin","","The Beatles","Leon Bridges","Kishi Bashi","Saves The Day","Eli young band","OAR","Chicago","Chicago","Adele","MCR"]

let favoriteShow = ["Mad Men","Penny Dreadful","Game of Thrones","Steven Universe","Game of Thrones","The West Wing","Bob's Burgers","Rick and Morty","Game of Thrones","Welcome to the NHK","Parks and Rec","Hunter x Hunter","Stranger Things","The Wire","The West Wing","WOD","The Office","The Office","Game of Thrones","Rick and morty"]

let isProgrammer  = [true,false,false,false,false,true,false,false,true,false,true,false,false,true,false,false,false,false,false,false]

let state = ["NY","TX","N/A - UK","TX","NC","NY","TX","ON","CA","AZ","AZ","TX","TN","CA","MI","ID","WI","AZ","AZ","TX"]

let hairColor = ["Brown","Black","Dark Blonde","Brown","Brown","Brown","Brown","Blonde","Brown","Blonde","Blonde","Brown","Brown","Black","Black","Blonde","Brown","Brown","Amber ","Black"]

let motto = ["Don't overthink it.","I guess we'll find out. ","People have catchphrases in America?","Being kind is always a good idea.","You can practice being right or you can practice being kind. ","The work always gets done.","Meh","Ohmydog","Get along little doggy","I never die.","The best is yet to come!","The thing is","You can lock your heart up","Swing Away","That's Dope!","Don't tell me","She is clothed in strength and dignity and she laughs without fear of the future","Beep beep beep. ","Do not pity the dead. Pity the living; most of all","I totally got this Motto/0","Don't overthink it.","I guess we'll find out. ","People have catchphrases in America?","Being kind is always a good idea.","You can practice being right or you can practice being kind. ","The work always gets done.","Meh","Ohmydog","Get along little doggy","I never die.","The best is yet to come!","The thing is","You can lock your heart up","Swing Away","That's Dope!","Don't tell me","She is clothed in strength and dignity and she laughs without fear of the future","Beep beep beep. ","Do not pity the dead. Pity the living; most of all","I totally got this "]

// 1a. console.log the name of every person who responded to the survey
for(let i = 0; i < names.length; i++){
	console.log(names[i])
}

// 1b. console.log "Hi, my name is _____, and I live in ____." for every person who responded to the survey
for(let i = 0; i < names.length; i++){
	console.log(`Hi my name is ${names[i]}, and I live in ${state[0]}`)
}

// 2a. Create an empty array and name it shortBios. Inside of shortBios, create an object that stores each respondents name, nickname, and age. Then, console.log shortBios.
let shortBios = []
for(let i = 0; i < names.length; i++)
{
	let dic = {}
	dic.name = names[i]
	dic.nickname = nickname[i]
	dic.age = age[i]
	shortBios.push(dic)
}

//console.log(final)


// 2b. Add the favorite show and favorite band to each person object inside of the shortBios array. Then, console.log shortBios.
for(let i = 0; i < shortBios.length; i++)
{
	shortBios[i].tvShow = favoriteShow[0]
	shortBios[i].band = favoriteBand[0]
}

console.log(shortBios)
// 2c. Create a new array called longBios. Inside of longBios, create an object that stores each respondents name, nickname, age, favorite show, favorite band, if they are a programmer, the state they live in, their hair color, and their personal bio. Then, console.log longBios.
let longBios = []
for(let i = 0; i < names.length; i++)
{
	let dic = {}
	dic.name = names[i]
	dic.nickname = nickname[i]
	dic.age = age[i]
	dic.band = favoriteBand[i]
	dic.tvShow = favoriteShow[i]
	dic.isProgrammer = isProgrammer[i]
	dic.state = state[i]
	dic.hairColor = hairColor[i]
	dic.motto = motto[i]
	longBios.push(dic)
}

console.log(longBios)

// 3a. For each person in longBios, console.log a descriptor of where they live.
// It will look something like this: "____ lives in _____."
for(let i = 0; i < longBios.length; i++)
{
	console.log(`${longBios[i].name} lives in ${longBios[i].state}`)
}



// 3b. console.log each person's nickname.
// BONUS: Write some control flow that determines whether / how to respond if someone didn't provide a nickname.
for(let i = 0; i < longBios.length; i++)
{
	if(longBios[i].nickname == ""){
		console.log(`${longBios[i].name} does not have a nickname`)
	}
	else {
		console.log(`${longBios[i].nickname}`)
	}
	
}



// 4. Find the average of the respondents' ages. Console.log this average (please use a loop, don't hard code the answer).
let totalAge = 0
for(let i = 0; i < age.length; i++){
	totalAge += age[i]

}
console.log(`Average Age: ${totalAge/age.length}`)



// 5. Print out the percentage of respondents who have brown hair. Console.log this percentage (please use a loop, don't hard code the answer).
let brownHairCount = 0
for(let i = 0; i < hairColor.length; i++){
	if(hairColor[i] == "Brown")
	{
		brownHairCount += 1
	}

}

console.log(`BROWN HAIR PERCENT: ${brownHairCount/hairColor.length * 100}%`)


// 6. Create two new arrays - one for programmers, and one for non programmers.
//    Sort all the people in the contacts array into these two more specific arrays.
let isAProgrammer = []
let notAProgrammer = []
for(let i = 0; i < isProgrammer.length; i++)
{
	if(isProgrammer[i])
	{
		isAProgrammer.push(names[i])
	}
	else {
		notAProgrammer.push(names[i])
	}
}

console.log(isAProgrammer)
console.log(notAProgrammer)



// 7. Create a new array only for people who listed "Game of Thrones" as their one of their favorite shows.
let teamThrone = []

for(let i = 0; i < favoriteShow.length; i++)
{
	if(favoriteShow[i] == "Game of Thrones")
	{
		teamThrone.push(names[i])
	}
}
console.log(teamThrone)


// 8. Console.log a list of all the bands that are liked by at least two people.
//    Pro-tip: some respondents capitalized band names and other respondents did not, so for example, if Panic at the Disco isn't listed, your code isn't accurately reporting your results.
let duplicates = []
for(let i = 0; i < favoriteBand.length; i++)
{
	let currentBand = favoriteBand[i].toLowerCase()
	console.log(currentBand)
	for(let j = i+1; j < favoriteBand.length; j++)
	{
		if(currentBand == favoriteBand[j])
		{
			duplicates.push(favoriteBand[j])
		}
	}
}

console.log(duplicates)


// EXTENSIONS //
// 9. Use the `.map()` method on the names array to create a new array called formattedNames which concatenates each name to an opening and closing `<h1>` tag.
//Map examplelet 
nums = [3,10,1,25]
let doubles = nums.map(x => {
  return(2 * x)
})
console.log(doubles)


let formattedNames = names.map(x => {
	return(`<h1>${x.charAt(0).toUpperCase() + x.slice(1)}</h1>`)
})

console.log(formattedNames)
// 10. Add each person's name to the webpage inside of the div with the id of "names."
const namesDiv = document.querySelector("#names")
for(let i = 0; i < formattedNames.length; i++)
{
	namesDiv.innerHTML += formattedNames[i]
}



// 11. Create a bio for each person and add it to the webpage inside of the div with the id of "biographies." Please use all the information about each person in this bio. For example: "_____, better know as _____ to friends currently lives in _____. ______'s motto is _______, which they heard on their favorite TV show ________." Be creative in the bio you create.
const bioDiv = document.querySelector("#biographies")
for(let i = 0; i < formattedNames.length; i++)
{
	bioDiv.innerHTML += `<p>${names[i]}, better know as ${nickname[i]} to friends currently lives in ${state[i]}. ${name[i]}'s motto is ${motto[i]}, which they heard on their favorite TV show ${favoriteShow[i]}</p>`
}