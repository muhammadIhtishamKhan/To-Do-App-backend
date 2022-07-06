"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectMongoDB = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
function connectMongoDB() {
    try {
        console.log(process.env.MONGO_CONNECTION);
        mongoose_1.default.connect(process.env.MONGO_CONNECTION);
        const db = mongoose_1.default.connection;
        db.on("error", console.error.bind(console, "Unable to connect with database"));
        db.once("open", () => {
            console.log("Successfully connect with database.");
        });
    }
    catch (err) {
        console.log("The following error occured while connecting to MongoDB: ", err);
    }
}
exports.connectMongoDB = connectMongoDB;
//# sourceMappingURL=mongodb.js.map