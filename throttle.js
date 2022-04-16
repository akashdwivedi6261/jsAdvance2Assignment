
let inputBox = document.getElementById("search-bar")
let searchCount = document.getElementById("search-count")
let apiCallCount = document.getElementById("makecall-count")
let id;

inputBox.addEventListener("input", () => {
    let count2 = searchCount.innerHTML || 0;
    searchCount.innerHTML = Number(count2) + 1;
    Throttler(handleFetch, 2000)
})
const handleFetch = () => { 
    let count = apiCallCount.innerHTML || 0;

    apiCallCount.innerHTML = Number(count)+1;
    console.log("fetching data from backend")
 }

function Throttler(callback, delay) {

    if(id) {
        return
    }

  id = setTimeout(() => {
    callback()
    id = undefined
  }, delay)
}