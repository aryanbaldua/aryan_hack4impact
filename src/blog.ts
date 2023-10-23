type Blog = {
    title: string;
    date: string;
    description: string;
    slug: string;

};

const blogs: Blog[] = [
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


const item = document.getElementById("blog")
blogs.forEach(({title, date, description, slug}) => {
    
    const postblog = document.createElement('div')
    const head = document.createElement('h1')
    head.innerHTML = title

    const time = document.createElement('p')
    time.innerHTML = date
    
    const desc = document.createElement('p')
    desc.innerHTML = description

    const link = document.createElement('a')
    link.href = `blog/${slug}.html`

    postblog.appendChild(head)
    postblog.appendChild(time)
    postblog.appendChild(desc)
    postblog.appendChild(link)

    item?.appendChild(postblog)
})
