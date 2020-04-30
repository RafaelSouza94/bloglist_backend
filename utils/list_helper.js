const lodash = require('lodash')

const dummy = (blogs) => {
    return 1
}

const totalLikes = (blogs) => {
    const reducer = (sum, item) => {
        return sum + item['likes']
    }

    return blogs.length === 0 
        ? 0
        : blogs.reduce(reducer, 0)
}

const favoriteBlog = (blogs) => {
    if (blogs.length === 0){
        return {}
    }

    const reducer = (largest, item) => {
        if(item["likes"] > largest)
            largest = item["likes"]
        return largest
    }

    const mostLikes = blogs.reduce(reducer, 0)
    const result = blogs.filter((blog) => blog.likes === mostLikes)

    return result[0]

}

const mostBlogs = (blogs) => {
    if (blogs.length === 0){
        return {}
    }

    const count = lodash.countBy(blogs, "author")
    const author = lodash.max(Object.keys(count), value => count[value])

    return {"author": author, "blogs": count[author]}

}

const mostLikes = (blogs) => {
    if (blogs.length === 0){
        return {}
    }

}

module.exports = {
    dummy,
    totalLikes,
    favoriteBlog,
    mostLikes,
    mostBlogs
}
