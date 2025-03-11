function printTitles(obj) {
  var arr = obj.books;
  for (var i = 0; i < arr.length; i++) {
    document.writeln("Title" + (i + 1) + ": " + arr[i].title + "<br>");
  }
}
var library = {
  books: [
    {
      title: "Golden Ticket",
      author: "Mohamed Elgendy",
      published: "2025",
    },
    {
      title: "Life is life",
      author: "Justin St.",
      published: "2015",
    },
    {
      title: "On the Roof",
      author: "Samah Anwar",
      published: "2014",
    },
    {
      title: "Easy Peasy",
      author: "Agatha Christe",
      published: "2019",
    },
  ],
};

printTitles(library);
