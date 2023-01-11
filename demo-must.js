async function dadMakesPromise(){
    try{
        const dadsPromise= await new Promise ((resolve,reject)=>{
        new setTimeout(() => {
            var salaryCredited=true
            var salary=3000
            var costOfPs5=50000
            var costOfPs4=30000

            if (salaryCredited===true && salary> costOfPs5){
                resolve('buy him ps5')
            }else if(salaryCredited===true && salary> costOfPs4){
                reject('buy him ps4')
            }else{
                reject('sorry son, i will buy you next month')
            }
        }, 1000);
    })
    console.log(dadsPromise)
    }catch(err){
        console.log(err)
    }
    
}
dadMakesPromise()