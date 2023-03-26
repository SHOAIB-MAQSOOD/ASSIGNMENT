"use strict";
/*. Large Shirts: Modify the make_shirt() function so that shirts are large
by default with a message that reads I love TypeScript. Make a large shirt
and a medium shirt with the default message, and a shirt of any size with a different message.*/
Object.defineProperty(exports, "__esModule", { value: true });
let make_shirt = (size1 = "large", message = "i love typescript") => {
    console.log(`Make a  ${size1} shirt and a ${message}`);
};
make_shirt();
make_shirt("medium");
make_shirt("small");
