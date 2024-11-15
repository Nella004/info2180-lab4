const searchBtn = document.getElementById('search-btn');
const queryInput = document.getElementById('query');
const resultDiv = document.getElementById('result');

searchBtn.addEventListener('click', () => {
    const query = queryInput.value.trim();

    const xhr = new XMLHttpRequest();

    const url = query ? `superheroes.php?query=${encodeURIComponent(query)}` : 'superheroes.php';

    xhr.open('GET', url, true);

    xhr.onload = function() {
        if (xhr.status === 200) {
            resultDiv.innerHTML = xhr.responseText;
        } else {
            resultDiv.innerHTML = '<p style="color: red;">An error occurred while fetching data.</p>';
        }
    };

    xhr.send();
});
