var blogs = [
    {
        title: "This is my first blog",
        date: "The date is October 22",
        description: "I am very excited!",
        slug: "slugg1"
    },
    {
        title: "This is my second blog",
        date: "The date is October 23",
        description: "I am less excited.",
        slug: "slugg2"
    },
];
var item = document.getElementById("blog");
blogs.forEach(function (_a) {
    var title = _a.title, date = _a.date, description = _a.description, slug = _a.slug;
    var postblog = document.createElement('div');
    var head = document.createElement('h1');
    head.innerHTML = title;
    var time = document.createElement('p');
    time.innerHTML = date;
    var desc = document.createElement('p');
    desc.innerHTML = description;
    var link = document.createElement('a');
    link.href = "blog/".concat(slug, ".html");
    postblog.appendChild(head);
    postblog.appendChild(time);
    postblog.appendChild(desc);
    postblog.appendChild(link);
    item === null || item === void 0 ? void 0 : item.appendChild(postblog);
});
