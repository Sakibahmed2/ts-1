//Spread operator
//Rest operator
//Destructuring

//learn spread operator

const bros1: string[] = ["sakib", "sakib", "sakib"];
const bros2: string[] = ["sakib", "sakib", "sakib"];
bros1.push(...bros2);

const mentors1 = {
  typescript: "Mezba",
  redux: "Mir",
  dbms: "parbez",
};

const mentors2 = {
  prisma: "firoz",
  cloud: "nahid",
  nextjs: "tonmoy",
};

const mentorList = {
  ...mentors1,
  ...mentors2,
};

//Learn rest operator

const greetFriend = (...friends: string[]) => {
  friends.forEach((friend) => {
    console.log(`Hi ${friend}`);
  });
};

greetFriend("habul", "babul", "abul", "kabul");
