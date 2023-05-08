//
// File: promises-async-await.js
// Date: 3/21/2022
// Desc: To run, execute: node promises-async-await
//

const myPromise = () => {
    return new Promise((resolve, reject) => {
        // Perform some sort of async operation.
        let isFinished = true;
        if (isFinished) { 
            resolve("It worked.");
        }
        else {
            reject("It broke!");
        }
  }) 
}

const main1 = () => {  // Not preferred.
    myPromise()
        .then(r => console.log(r))
        .catch(r => console.log(r)); 
}

const main2 = async () => { // Elegant, preferred.
    try {
        let r = await myPromise();
        console.log(r);
    }
    catch (err) {
        console.log(err);
    }
}

//////////////////////////////////////////////////////////////////////////
// Topics
/////////////////////////////////////////////////////////////////////////

//main1();
main2();