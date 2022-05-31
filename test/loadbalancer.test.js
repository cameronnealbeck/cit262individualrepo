import assert from 'assert';
import fetch from 'node-fetch';

it ('Should get Hello', async ()=>{
    const response = await fetch('http://34.73.150.198');
    const text = await response.text();
    assert.equal(text,"Hello");
})