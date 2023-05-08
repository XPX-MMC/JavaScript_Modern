//
// File: if-else-switch.js
// Date: 5/24/2022
// Desc: 
//

const ifElse = () => {
    let a = 1
    if (a == 1) {
        console.log('It is equal')
    }

    if (a == 1) {
        console.log('here')
    } else {
        console.log('over here')
    }

    if (a == 2) {
        console.log('here')
    } else if (a == 3) {
        console.log('now here')
    } else {
        console.log('now end')
    }
}

const switchExample = () => {
    let name = "joey"

    switch(name) {
        case "Joe":
          console.log("Hello Joe");
          break;
        case "Fred":
          console.log("Hello Fred");
          break;
        default:
          console.log("I don't know you");
    }
}

//////////////////////////////////////////////////////////////////////////
// Topics
/////////////////////////////////////////////////////////////////////////

ifElse();
//switchExample();
