//API URL
const link= "https://api.github.com/search/repositories?q=created:%3E2020-01-28&sort=stars&order=desc&per_page=100";

//page start number
let pageNo = 1;
//an array where we push all the results for easier manipulation
let newArr = [];

//calling the function with id of the parent div
getRepo(pageNo);

//the function to fetch each
async function getRepo(pageNo){
    if(pageNo > 10){
        return newArr;
    }
    getRepo(pageNo + 1);
    const resultArray = await fetch(link + `&page=${pageNo}`);
    const data = await resultArray.json();
    console.log(data.items);
    newArr.push(data.items);
    
    }
