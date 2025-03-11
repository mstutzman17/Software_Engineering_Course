// const whereIsMyCoffeeOrder = funciton(orderId){
//     return new Promise((resolve, reject) =>) {
//         cofffeeApi.checkStatus(orderId, (error, coffeeStatus)) => {
//             if (error) {
//                 //Promise fails
//                 reject(error)
//             }
//             else {
//                 //Promise is fulfilled
//                 resolve(coffeeStatus)
//             }
//         }
//     }
// }

// let response =axiosRequest.get('https://www.boredapi.com/api/activity')
// console.log(`You could ${response.data.activity}`)

// axiosRequest
//     .get('https://www.boredapi.com/api/activity')
//     .then(response => {
//         console.log (`You could ${response.data.activity}`)
//     })
//     .catch(error => {
//         console.log(`ERROR ${error}`)
//     })

    // https://httpstat.us/404

// const axiosRequest = require('axios')

// async function getActivity() {
//     try {
//         let response = await axiosRequest.get('https://www.boredapi.com/api/activity')
//         console.log (`You could ${response.data.activity}`)
//     } catch (error) {
//         console.error(`ERROR ${error}`)
//     }
// }

// function promiseA (a) {
//     return new Promise((resolve, reject ) => {
//         setTimeout(() => {
//             if (a == 1) {
//                 return reject ('a cannot equal to 1')
//             }

//             resolve (a + a)
//         }, 1000)
//     })
// }

// const STATE = {
//     PENDING: 'PENDING',
//     SUCCESS: 'SUCCESS',
//     FAILED: 'FAILED'
// }

// class MyPromise{
//     constructor(executeFunction) {
//         this.val = null;
//         this.state= STATE.PENDING;
//         this.successfulCallbacks = [];
//         this.failedCallbacks = [];
//         try {
//             executeFunction(
//                 value => this.resolve(val),
//                 val => this.reject(val)
//             )
//         } catch(error) {
//             this.reject(error)
//         }
//     }

//     resolve(val) {
//         this.val = val;
//         this.state= STATE.SUCCESS;
//         this.successfulCallbacks.forEach(cb => cb());
//     }

//     reject(val) {
//         this.val = val;
//         this.state= STATE.REJECTED;
//         this.failedCallbacks.forEach(cb => cb());

//     }

//     then(onResolve, onReject) {
//         return new MyPromise((resolve, reject) => {

//             const successCaller = () => {
//                 if(!onResolve)return resolve(this.val);

//                 try {
//                     let val = onResolve(this.val);
//                     resolve(onResolve);
//                 } catch(error) {
//                   reject(error);
//                 }
//             }

//             const failedCaller = () => {
//                 if(!onReject) return reject (this.val);

//                 try {
//                     let val = onReject(this.val);
//                     resolve(val);
//                 } catch(error) {
//                   reject(error);
//                 }
//             }

//             switch(this.state) {
//                 case STATE.PENDING:
//                     this.successfulCallbacks.push(successCaller);
//                     this.failedCallbacks.push(failedCaller);
//                     break;
//                 case STATE.SUCCESS:
//                     successCaller();
//                     break;
//                 case STATE.REJECTED:
//                     faileCaller();
//                     break;
//                 default:
//                     throw new Error('State not defined')
//             }
//         })
//     }

//     catch(onReject) {
//         return this.then
//     }

// }


// promiseA(1)
//     .then (res => console.log(res))
//     .catch (err => console.error (err))

    
function walkDog(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            const dogWalked = true;

            if(dogWalked){
                resolve('You walked the dog');
            }
            else{
                reject("You DIDN'T walk the dog");
            }
        }, 1500)
    })
}

function cleanKitchen(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            const kitchenCleaned = true;

            if(kitchenCleaned){
                resolve('You cleaned the kitchen');
            }
            else{
                reject("You DIDN'T clean the kitchen!");
            }
        }, 2500)
    })
}

function takeOutTrash(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            const trashDone = true;

            if(trashDone){
                resolve('You took out the trash');
            }
            else{
                reject("You DIDN'T take out the trash!");
            }
        }, 500)
    })
}


async function doChores(){
    const walkDogResult = await walkDog();
    console.log(walkDogResult);

    const cleanKitchenResult = await cleanKitchen()
    console.log(cleanKitchenResult)

    const takeOutTrashResult = await takeOutTrash()
    console.log(takeOutTrashResult)

    console.log("You finished all the chores!")
}

doChores()

