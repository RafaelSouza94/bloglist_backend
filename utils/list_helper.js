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

module.exports = {
    dummy,
    totalLikes,
    favoriteBlog
}
