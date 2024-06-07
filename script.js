"use strict";
const markRead = document.querySelector(".mark-read");
const unread = document.querySelectorAll(".unread");
const notificationCount = document.querySelector(".notification-count");
const notificationDots = document.querySelectorAll(".dot");
let counter = 3;
const readState = {};

//mark as read functionality
const markAsRead = () => {
Array.from(unread).forEach(element => {
element.style.backgroundColor = "#242526";
counter = 0;
notificationCount.innerHTML = counter;
});
Array.from(notificationDots).forEach(dot => {
dot.classList.add("hidden");
})
}
//event listener mark read all
markRead.addEventListener("click", (e) => {
markAsRead();
});

//event listener mark read individually
Array.from(unread).forEach((element, index) => {
element.addEventListener("click", (e) => {
if(!readState[index]){
element.style.backgroundColor = "#242526";
if(counter > 0){
counter--;
} else {
counter = 0;
}
};
notificationCount.innerHTML = counter;
notificationDots[index].classList.add("hidden");
readState[index] = true;
})
});