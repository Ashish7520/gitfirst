console.log('person1: show the tickets')
console.log('person2: show the tickets')
const preMovie = async()=>{
    const promiseWifeBringTick=new Promise((resolve, reject)=>{
        setTimeout(() => 
          resolve('ticket')  
        , 2000);
    })

    const getPopcorn=new Promise ((resolve, reject)=> resolve(`popcorn`))
    const getButter= new Promise((resolve, reject)=> resolve(`butter`))
    const getColdrinks = new Promise((resolve, reject)=> resolve(`coldrinks`))
let ticket
try {
    ticket=await promiseWifeBringTick
 
} catch (error) {
    ticket='sad face'
}
    console.log('wife:i have ticks')
    console.log('hubby : lets get in')
    console.log('wify: no i am hungry')  
    let popcorn=await getPopcorn; 
    console.log("hubby: now let go")
    console.log('wify: no i need butter in popcorn')
    let butter =await getButter
    console.log("hubby: anything else sweetheart")
    console.log('wify: i need some coldrinks with popcorn')
    console.log("hubby: wait i bring some coldrinks")
    let coldrinks = await getColdrinks


    return ticket
}
preMovie().then((m)=>console.log(m))
console.log('person4: show the tickets')
console.log('person5: show the tickets')