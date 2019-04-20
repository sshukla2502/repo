var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
    if (xhr.readyState == XMLHttpRequest.DONE) {
        alert(xhr.responseText);
    }
}
xhr.open('GET', 'http://localhost:3000', true);
xhr.send(null);

console.log("Script attached");