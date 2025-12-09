// let heroes=[
//     ["Ironman","spiderman","thor"],
//     ["superman","wonderman","flash"]
// ]
// for(let i=0;i<heroes.length;i++){
//     console.log(i,heroes[i], heroes.length);{
//         for(let j=0;j<heroes[1].length;j++){
//             console.log('j=${j}, ${heroes[i][j]}');
//         }
//     }
// }

let student=[["nitish",34],["kumar",90],["thakur",89]];
for(let i=0;i<student.length;i++){
    console.log('Information of student ${i}');
    for(let j=0;j<student[i].length;j++){
        console.log(i,student[i][j]);
    }
}