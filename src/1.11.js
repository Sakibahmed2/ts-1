"use strict";
var _a, _b;
{
    //
    // ternary operator || optional chaining || nullish coalescing operator
    const age = 18;
    if (age >= 18) {
        console.log("Adult");
    }
    else {
        console.log("No adult");
    }
    const isAdult = age >= 18 ? "Adult" : "Not adult";
    //   console.log({ isAdult });
    // nullish coalescing operator
    // null - undefined -----> decision making
    const isAuthenticated = undefined;
    const result1 = isAuthenticated !== null && isAuthenticated !== void 0 ? isAuthenticated : "Guest";
    console.log({ result1 });
    const user = {
        name: "sakib",
        address: {
            city: "hbg",
            roadNo: "banga road",
            presentAddress: "Baniyachong",
        },
    };
    const permanentAddress = (_b = (_a = user === null || user === void 0 ? void 0 : user.address) === null || _a === void 0 ? void 0 : _a.permanentAddress) !== null && _b !== void 0 ? _b : "No permanent address found";
    console.log({ permanentAddress });
    //
}
