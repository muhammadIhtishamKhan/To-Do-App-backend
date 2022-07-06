"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const TaskSchema = new mongoose_1.default.Schema({
    title: { type: String, index: true },
    description: {
        type: String,
        required: [true, "task description is required"],
    },
    dateAdded: { type: Date, default: Date.now },
}, { timestamps: true });
const Task = mongoose_1.default.model("tasks", TaskSchema);
module.exports = Task;
//# sourceMappingURL=tasks.js.map