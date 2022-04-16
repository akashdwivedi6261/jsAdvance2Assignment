function toggler([...arr]) {
    let index = -1;

    return () => { 
        index++;
        if(index == arr.length) {
            index = 0
        }
        console.log(arr[index])
     }
}

let toggle = toggler([1,2,3])

toggle()
toggle()
toggle()
toggle()
toggle()
toggle()