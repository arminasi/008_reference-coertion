////////////////////////////////////////I thought////////// but was 
console.log(null + undefined);      //- 0                // NaN
console.log(null + true);           //+ 1                // 1
console.log(null + false);          //- 1                // 0
console.log(null + 3);              //+ 3                // 3
console.log(null + NaN);            //+ NaN              // NaN
console.log(null + 'hello');        //+ "nullhello"      // "nullhello"
console.log(undefined + true);      //- 1                // NaN
console.log(undefined + false);     //- 0                // NaN
console.log(undefined + 5);         //- 5                // NaN
console.log(undefined + NaN);       //+ NaN              // NaN
console.log(undefined + 'hello');   //+ 'undefinedhello' // 'undefinedhello
console.log(true + false);          //+ 1                // 1
console.log(true + 2);              //+ 3                // 3
console.log(true + NaN);            //+ NaN              // NaN
console.log(true + 'hello');        //+ "truehello"      // "truehello"
console.log(false + 4);             //+ 4                // 4
console.log(false + NaN);           //+ NaN              // NaN
console.log(false + 'hello');       //+ "falsehello"     // "falsehello"
console.log(5 + 3);                 //+ 8                // 8
console.log(5 + NaN);               //+ NaN              // NaN
console.log(5 + 'hello');           //+ "5hello"         // "5hello"
console.log('hello' + NaN);         //+ "helloNaN"       // "helloNaN"
console.log(-undefined);            //- -0               // NaN
console.log(-false);                //+ -0               // -0
console.log(-5);                    //+ -5               // -5 
console.log(-'hello');              //+ NaN              // NaN
console.log(-'234');                //+ -234             // -234
console.log(-'234.32e3');           //- -234.32e3        // -234320
console.log(-new Number(NaN));      //+ NaN              // NaN
console.log(-new String('hello'));  //+ NaN              // NaN
console.log(-(/google.com/));       //+ NaN              // NaN
console.log(-([]));                 //- NaN              // -0
console.log(-([2]));                //- NaN              // -2
console.log(-([2, 3]));             //+ NaN              // NaN
console.log(-(function() { }));     //+ NaN              // NaN
///////////////////////////////////////////////////////////////






