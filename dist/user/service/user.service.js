"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllUsers = void 0;
const user_mongoose_model_1 = require("../model/user.mongoose.model");
/**
 * gets all users present in the users collection
 * @returns response from the Database
 */
function getAllUsers() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const users = yield user_mongoose_model_1.User.find({});
            if (!users) {
                throw new Error("No users exist!");
            }
            const response = users.map((user) => {
                const userObject = {
                    _id: user._id.toString(),
                    email: user.email,
                    username: user.username,
                };
                return userObject;
            });
            return response;
        }
        catch (err) {
            console.error("[UserService][getAllUsers] unable to get users", err);
            // throw new Error(err.message);
        }
    });
}
exports.getAllUsers = getAllUsers;
//# sourceMappingURL=user.service.js.map