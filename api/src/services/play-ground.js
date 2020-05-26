//--------callback example 

// const getBooks = (callback) => {
//     const dataBuffer = fs.readFile('../books.json', (err, data) => {
//         callback(JSON.parse(data.toString()));
//     });

// }

// getBooks((data) => {
//     console.log(data);
// });

//----------Promise Example

// const getBooks = () => {

//     return new Promise((resolve, reject) => {

//         fs.readFile('../books.json', (err, data) => {
//             if (err) {
//                 reject(err);
//             }
//             resolve(data);
//         });


//     });
// }

// getBooks().then((data) => {
//     console.log(JSON.parse(data.toString()));
// }).catch((err) => {
//     console.log(err);
// })


// ---------------- async await example 

const getBooks = () => {

    return new Promise((resolve, reject) => {

        fs.readFile('../books.json', (err, data) => {
            if (err) {
                reject(err);
            }
            resolve(data);
        });


    });
}

const printData = async () => {
    const data = await getBooks();
    return data;
}

printData()
    .then((data) => {
        console.log(JSON.parse(data.toString()));
    });