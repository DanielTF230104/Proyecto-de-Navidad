"use strict";

async function APIresponse(url) {
    try {
        const response = await fetch(url);
        const responseJSON = await response.json();
        return responseJSON;
    } catch(error) {
        return error;
    }
}