const posts=[
    {title: 'post one', body:'this is the first post' , createdAt:new Date().getTime()},
    {title: 'post two', body: ' this is the second post', createdAt:new Date().getTime()}
];
let intervalId=0

function getPosts(){
    clearInterval(intervalId)
    intervalId = setInterval(()=>{
        let output=''
        posts.forEach((post, index)=>{
            output+= `<li> ${post.title} - last updated ${(new Date()-post.createdAt)/1000} seconds ago</li>`
        })
        document.body.innerHTML=output

    }, 1000)
}

function createPost (post, callback){
    setTimeout(()=>{

        posts.push({...post, createdAt:new Date().getTime()});
        callback();

    }, 2000)
}

createPost(
    {title:'post three', body:'this is third post'}, getPosts
)

createPost({title:'post four', body:'this is fourth post'}, getPosts)