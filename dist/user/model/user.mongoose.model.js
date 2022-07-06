"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const UserSchema = new mongoose_1.default.Schema({
    username: {
        type: String,
        required: [true, "Username is Required"],
        index: true,
    },
    email: {
        type: String,
        lowercase: true,
        index: true,
        required: [true, "email is Required"],
    },
    password: { type: String, required: [true, "Password cannot be blank"] },
}, { timestamps: true });
exports.User = mongoose_1.default.model("Users", UserSchema);
//# sourceMappingURL=user.mongoose.model.js.map