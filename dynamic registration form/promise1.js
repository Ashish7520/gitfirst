console.log('person1: show the ticket')
console.log('person2: show the ticket')

const promiseWifeBringTick=new Promise((resolve, reject)=>{
    setTimeout(() => {
      resolve('ticket')  
    }, 2000);
})

const getPopcorn=promiseWifeBringTick.then((t)=>{
    console.log('wife:i have ticks')
    console.log('hubby : lets get in')
    console.log('wify: no i am hungry')
    return new Promise ((resolve, reject)=> resolve(`${t} popcorn`))
})

const getButter = getPopcorn.then((t)=>{
    console.log("hubby: now let go")
    console.log('wify: no i need butter in popcorn')
    return new Promise((resolve, reject)=> resolve(`${t} butter`))
})

const getColdrinks= getButter.then((t)=>{
    console.log("hubby: anything else sweetheart")
    console.log('wify: i need some coldrinks with popcorn')
    console.log("hubby: wait i bring some coldrinks")
    return new Promise((resolve, reject)=> resolve(`${t} coldrinks`))
})

getColdrinks.then((t)=> console.log(t))

console.log('person4: show the ticket')
console.log('person5: show the ticket')