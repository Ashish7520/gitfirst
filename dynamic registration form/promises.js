const posts=[
    {title: 'post one', body:'this is the first post' , createdAt:new Date().getTime()},
    {title: 'post two', body: ' this is the second post', createdAt:new Date().getTime()}
];


function getPost(){
  
    intervalId = setInterval(()=>{
        let output=''
        posts.forEach((post, index)=>{
            output+= `<li> ${post.title} - last updated ${(new Date()-post.createdAt)/1000} seconds ago</li>`
        })
        document.body.innerHTML=output

    }, 1000)
}

function createPost(post){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            posts.push({...post, createdAt:new Date().getTime()});
            const error=false;
           if(!error){
            resolve();
           }else{
            reject('Error: something went wrong');
           }
        }, 2000);
    })
}


function deletePost(){

    return new Promise ((resolve, reject)=>{
        setTimeout(() => {

            if(posts.length>0){
                resolve(posts.pop)
            }else{
                reject('Array is empty now')
            }
            
        }, 1000);
    })
    
}


createPost({title:'post three', body:'this this post three'})
.then(()=>{
    getPost()
    deletePost().then(()=>{
        getPost()
        deletePost().then(()=>{
            getPost()
            deletePost().then(()=>{
                getPost()
                deletePost().then(()=>{})
                .catch(error=>{console.log('inside array catch block', error)})
            }).catch(error=>console.log(error))
        }).catch(error=>console.log(error))
    }).catch(error=>console.log(error))
}).catch(error=>console.log(error))