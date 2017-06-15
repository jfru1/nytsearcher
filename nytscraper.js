$(document).ready(
var url = 'https://api.nytimes.com/svc/search/v2/articlesearch.json';
var searchTerm = ''
var numberRecords = ''
var startYear = ''
var endYear = ''

$("search-button").on("click", function() {
url += '?' + $.param({
  'api-key': 'a9d41afd6f4a42d2822c1ff39ad8733c'
  'q': searchTerm
  'begin_date': startYear
  'end_date': endYear
});
var lengthOfResult = parseInt(numberRecords)
if(startYear.length && endYear.length === 8) {
$.ajax({
  url: url,
  method: 'GET',
}).done(function(result) {
	var output = this.data
	var link = this.response.docs.web_url
	var headline = this.response.docs.snippet
	var date = this.response.docs.pub_date
	var author = this.response.docs.source
	var abstract this.response.docs.lead_paragraph
	for (var i = 0; i < lengthOfResult; i++){
		var storyDiv = $("<div>")

	console.log(result);
	}
}).fail(function(err) {
  throw err;
}
});