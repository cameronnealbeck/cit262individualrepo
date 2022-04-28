import fetch from 'node-fetch';

const login = async ({userName, password}) => {
    
    const options = {
        method: 'POST',
        body: JSON.stringify({userName, password}),
        headers: {
            'Content-Type':'application/json',
            'Accept':'text'    
        }
    };

    const apiResponse = await fetch('https://dev.stedi.me/login', options);
    const loginResponse = await apiResponse.text();

    return loginResponse;
}

export {login};