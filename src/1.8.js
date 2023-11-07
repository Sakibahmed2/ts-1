"use strict";
{
    //Destructuring
    const user = {
        id: 123,
        name: {
            firstName: "sakib",
            lastName: "loskor",
        },
        contact: "123445",
    };
    const { contact, name: { firstName }, } = user;
    //Array destructuring
    const myFriends = ["jhon", "charls", "Ross", "charly", "Hatis"];
    const [, , bestFriend, ...rest] = myFriends;
}
