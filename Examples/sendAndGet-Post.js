const posts = [
    {id:"post 1",from:"Oliver"},
    {id:"post 2",from:"Alex"},
    {id:"post 3",from:"Jesus"}
]

console.log(posts)

const listPost = ()=>{
    posts.map(post => {
        console.log(post.id,post.from)
    })
}

const addPosts = ()=>{
    const promiseAddPosts = new Promise ((resolve,reject)=>{
        posts.push({id: "post 4", from: "Selman"})
        // resolve("New Post added")
        reject("error")
    })
    return promiseAddPosts;
}

async function addListsPosts(){
    try{
        let response = await addPosts();
        console.log(response)
        listPost()
    }

    catch(error){
        console.log("error")

    }
}

addListsPosts();