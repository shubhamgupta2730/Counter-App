const countValue = document.querySelector('#counter');

const increment = () => {
    // to get value from ui
    let value = parseInt(countValue.innerText);
    // updating value
    value += 1;
    // to update value in ui
    countValue.innerText = value;
}

const decrement = () => {
    let value = parseInt(countValue.innerText);
    value -= 1;
    countValue.innerText = value;
}