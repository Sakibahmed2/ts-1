{
  //
  // ternary operator || optional chaining || nullish coalescing operator

  const age: number = 18;

  if (age >= 18) {
    console.log("Adult");
  } else {
    console.log("No adult");
  }

  const isAdult = age >= 18 ? "Adult" : "Not adult";
  //   console.log({ isAdult });

  // nullish coalescing operator
  // null - undefined -----> decision making

  const isAuthenticated = undefined;

  const result1 = isAuthenticated ?? "Guest";
  console.log({ result1 });

  type User = {
    name: string;
    address: {
      city: string;
      presentAddress: string;
      permanentAddress?: string;
      roadNo: string;
    };
  };

  const user: User = {
    name: "sakib",
    address: {
      city: "hbg",
      roadNo: "banga road",
      presentAddress: "Baniyachong",
    },
  };

  const permanentAddress =
    user?.address?.permanentAddress ?? "No permanent address found";
  console.log({ permanentAddress });

  //
}
