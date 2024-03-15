/* All rights reserved. 2022-2024 (c) Peter HU */


export function readjson(){
    var data;
    var request = new XMLHttpRequest();
    request.open('GET', '../data/test.json', true);
    request.onreadystatechange = function() {
        if (request.readyState === 4) {
        data = JSON.parse(request.responseText);
        // Do something with the JSON data
        }
    };
    request.send();
    return data;
}