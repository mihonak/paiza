import {yourScript} from './yourScript.js';

let result = document.getElementById('result');
let xhr = new XMLHttpRequest();

xhr.open('GET', 'data.txt', true);
xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
        if (xhr.status === 200) {
            result.textContent = '';
            let lines = xhr.responseText.split('\n');
            let result_lines = yourScript(lines).split('\n');
            let line = '<h1>before</h1>';
            line += lines.join('<br />');
            line += '<h1>after</h1>';
            line += result_lines.join('<br />');

            result.insertAdjacentHTML('afterbegin', line);

        } else {
            result.textContent = 'error';
        }
    } else {
        result.textContent = 'processisng';
    }
}
xhr.send(null);