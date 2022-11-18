// const refs = {
//     valueEl: document.querySelector('#value'),
//     decrementBtn: document.querySelector('button[data-action="decrement"]'),
//     incrementBtn: document.querySelector('button[data-action="increment"]'),
// };

// const counter = {
//     value: 0,
//     decrement() {
//         this.value -=1;
//     },

//     increment() {
//         this.value +=1;
//     },

// };

// // console.log(refs.decrementBtn);

// refs.decrementBtn.addEventListener("click", () => {
// // console.log("Click -1");
// counter.decrement();
// refs.valueEl.textContent = counter.value;
// });


// refs.incrementBtn.addEventListener("click", () => {
//     // console.log("Click +1");
//     counter.increment();
//     refs.valueEl.textContent = counter.value;
//     });



// ==================================
const value = document.querySelector('#value');
const Btn = document.querySelectorAll('button');

const counter = {
    value: 0,
    decrement() {
        this.value -=1;
    },

    increment() {
        this.value +=1;
    },

};

// console.log(Btn.dataset.action)

Btn.forEach(button => button.addEventListener("click", () => {
     (button.dataset.action == "decrement")
        ? counter.decrement()
        : counter.increment();
        value.textContent = counter.value
    },
));