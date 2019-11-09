var term = "obama";
var startDate = "";
var endDate = "";

var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + term + "&api-key=GKIxxmPHOb2rp7cP8COlG42Nuycd9dow";

var startFlag = false;
var endFlag = false;

if(startDate !== "")
{
    startFlag = true;
}
if(endDate !== "")
{
    endFlag = true;
}
if(startFlag && endFlag)
{
    queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + term + "&begin_date=" + startDate + "&end_date=" + endDate + "&api-key=GKIxxmPHOb2rp7cP8COlG42Nuycd9dow";
}
else if (startFlag && !endFlag)
{
    queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + term + "&begin_date=" + startDate + "&api-key=GKIxxmPHOb2rp7cP8COlG42Nuycd9dow";
}
else if (!startFlag && endFlag)
{
    queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + term + "&end_date=" + endDate + "&api-key=GKIxxmPHOb2rp7cP8COlG42Nuycd9dow";

}
console.log(queryURL);
// Creating an AJAX call for the specific movie button being clicked
$.ajax({
  url: queryURL,
  method: "GET"
}).then(function(response) {
    console.log(response);
    console.log(response.response.docs[0])
    console.log(response.response.docs[0])
})