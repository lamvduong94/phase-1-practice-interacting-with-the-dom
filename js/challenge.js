const counter = document.getElementById('counter');
const minus = document.getElementById('minus');
const plus = document.getElementById('plus');
const heart = document.getElementById('heart');
const pause = document.getElementById('pause');
const likes = document.querySelector('.likes');
const commentInput = document.getElementById('comment-input');
const submit = document.getElementById('submit');

let count = 0;
function timer() {
    count++;
    counter.innerText = count;
}

function reverseTimer() {
    count--;
    counter.innerText = count;
}

let hearts = 1;
function countHearts() {
    heart.onclick = function() {
        hearts++;
    }

    while (likes.firstChild) {
        likes.removeChild(likes.firstChild);
    }

    return hearts;
}

function heartComment() {
    countHearts();
    const li = document.createElement('li');
    li.innerHTML = `${count} has been liked ${hearts} times`
    likes.appendChild(li);
}

let paused = false;
function pauseAndResume() {
    if (paused) {
        paused = false;
        pause.innerText = 'Pause';
        ['minus', 'plus', 'heart', 'submit'].forEach(id => {
            document.getElementById(`${id}`).disabled = false;
        })
    } else {
        paused = true;
        pause.innerText = 'Resume';
        ['minus', 'plus', 'heart', 'submit'].forEach(id => {
            document.getElementById(`${id}`).disabled = true;
        })
    }
}

function leaveAComment(str) {
    const list = document.getElementById('list');
    const p = document.createElement('p');
    p.innerText = str;
    list.appendChild(p);
}

function submitComment(e) {
    e.preventDefault();
    leaveAComment(commentInput.value);
}

setInterval(function() {
    if (paused === true) {
        console.error('Paused')
    } else {
        timer()
    }
}, 1000)

document.addEventListener('DOMContentLoaded', function() {
    plus.addEventListener("click", timer)
    minus.addEventListener("click", reverseTimer)
    heart.addEventListener("click", heartComment)
    pause.addEventListener("click", pauseAndResume)
    submit.addEventListener("click", submitComment)
})