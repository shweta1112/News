
var apiDomain = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=3019e9553a444460bfc5cf02edf42866';

// var query = apiDomain.split("?")[1];
//   var arr1 = document.getElementById("cat-data-bus").innerHTML;
//   var arr2 = document.getElementById("cat-data-ent").innerHTML;
//   var arr3 = document.getElementById("cat-data-gen").innerHTML;
//   var arr4 = document.getElementById("cat-data-hea").innerHTML;
//   var arr5 = document.getElementById("cat-data-sci").innerHTML;
//   var arr6 = document.getElementById("cat-data-por").innerHTML;
//   var arr7 = document.getElementById("cat-data-tech").innerHTML;

//   var query = [arr1 , arr2 , arr3 , arr4 , arr5 , arr6 ,arr7];
//   for(i = 0; i < query.length; i++){
//   var apiUrl = apiDomain + '&' + 'category' + '=' + query[i];

// document.getElementsByClassName('cat-box')[i]
//         .addEventListener('click', onload12);
//   }

function get_click(event) {
  var categoryid = event.target.id;
  var category = document.getElementById(categoryid).innerHTML;
  var apiUrl = apiDomain + '&' + 'category' + '=' + category;
  document.getElementById("NewsContent").innerHTML = "";
  fetch(apiUrl).then(response => {
    return response.json();
  }).then(data => {
    renderData(data);
  });
}

function onload12() {
  var apiUrl = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=3019e9553a444460bfc5cf02edf42866';
  fetch(apiUrl).then(response => {
    return response.json();
  }).then(data => {
    renderData(data);
  });
}

function renderData(data) {
  for (i = 0; i < data.articles.length; i++) {
    var title = document.createElement('h3');
    var description = document.createElement('h4');
    var TagAuthor = document.createElement('h5');
    var TagPublished = document.createElement('h5');
    var imgTag = document.createElement('img');
    var contentRowTag = document.createElement('div');
    var contentTag = document.createElement('div');
    var imagebodyTag = document.createElement('div');
    var NewsContentTag = document.createElement('div');
    var TagpublishDetail = document.createElement('div');
    var TagUrl = document.createElement('a');
    // title.innerHTML = data.articles[i].title;
    description.innerHTML = data.articles[i].description;
    NewsContentTag.innerHTML = data.articles[i].content;
    TagAuthor.innerHTML = data.articles[i].author;
    TagPublished.innerHTML = data.articles[i].publishedAt;
    TagUrl.innerHTML = data.articles[i].title;
    TagpublishDetail.setAttribute("class", 'publisher')
    contentRowTag.setAttribute("class", 'row')
    contentTag.setAttribute("class", 'content')
    title.setAttribute("class", 'myhsdj')
    imgTag.setAttribute("class", 'image')
    imagebodyTag.setAttribute("class", 'NewsImage')
    description.setAttribute("class", 'description')
    NewsContentTag.setAttribute("class", 'NewsContent')
    TagAuthor.setAttribute("class", 'author')
    TagPublished.setAttribute("class", 'publisherAt')
    TagUrl.setAttribute("class", 'clUrl')
    TagUrl.setAttribute("target", '_blank')
    // imgTag.src = data.articles[i].urlToImage;
    // console.log(title)
    document.getElementById('NewsContent').appendChild(contentRowTag);
    document.getElementsByClassName('row')[i].appendChild(contentTag);
    document.getElementsByClassName('row')[i].appendChild(imagebodyTag);
    document.getElementsByClassName('NewsImage')[i].appendChild(imgTag);
    // document.getElementById('content').appendChild(title);

    document.getElementsByClassName('content')[i].appendChild(title);
    document.getElementsByClassName('myhsdj')[i].appendChild(TagUrl);
    document.getElementsByClassName('clUrl')[i].href = data.articles[i].url;
    // document.getElementsByClassName('myhsdj')[i].addEventListener("click", function(e) {
    // window.location.href = TagUrl ;
    // });

    document.getElementsByClassName('content')[i].appendChild(description);
    document.getElementsByClassName('content')[i].appendChild(NewsContentTag);
    document.getElementsByClassName('content')[i].appendChild(TagpublishDetail);
    document.getElementsByClassName('publisher')[i].appendChild(TagAuthor);
    document.getElementsByClassName('publisher')[i].appendChild(TagPublished);
    // document.getElementsByClassName('image')[i] = imgTag;
    // document.getElementById('content').appendChild(description);
    // document.getElementById('image').appendChild(imgTag);
    document.getElementsByClassName('image')[i].src = data.articles[i].urlToImage;
  }
  //       document.getElementsByClassName("cat-row").addEventListener("click", function(){
  //   document.getElementById("NewsContent").appendChild(contentRowTag);
  // });
}
