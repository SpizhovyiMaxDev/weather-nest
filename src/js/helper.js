function sleep(time){
    return new Promise((res, rej) => {
        setTimeout(() => rej(new Error('Request took too long!')), time * 1000)
    })
}


export async function AJAX(url){
    try{

    const response = await Promise.race([fetch(url), sleep(2)]);
    const data = await response.json();
    
    if(!response.ok)
        throw new Error('Something went wrong, check your ajax call');

     return data;

    } catch(err){
        throw err;
    }
}

export const generateRandomId = (length) => [...Array(length)].map(() => Math.random().toString(36)[2]).join('');
