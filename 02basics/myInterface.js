"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ambuj = {
    githubToken: "abcd new token",
    dbId: 12312,
    email: 'anskansd@xyz.com',
    userId: 123,
    startTrial: function () {
        return "true";
    },
    getCoupon: function (coupon) {
        if (coupon === void 0) { coupon = "ambuj123"; }
        return 123;
    }
};
var admin = {
    githubToken: "abcd new token",
    dbId: 123,
    email: 'admin@xyz.com',
    userId: 1,
    role: 'admin',
    startTrial: function () {
        return "false";
    },
    getCoupon: function (coupon) {
        if (coupon === void 0) { coupon = "ambuj123"; }
        return 1;
    }
};
