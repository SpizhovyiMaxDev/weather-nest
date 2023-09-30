function sleep(time){
    return new Promise((res, rej) => {
        setTimeout(() => rej(new Error('Request took too long!')), time * 1000)
    })
}


export default async function AJAX(url){
    try{

    const response = await Promise.race([fetch(url), sleep(5)]);
    const data = await response.json();
    
    if(!response.ok)
        throw new Error('Something went wrong, check your ajax call');

     return data;

    } catch(err){
        throw err;
    }
}