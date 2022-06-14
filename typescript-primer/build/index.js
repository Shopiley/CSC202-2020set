"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Value = void 0;
const tools_1 = __importDefault(require("./tools"));
class Value {
    constructor() {
        this.value = 10;
        this.props = { x: 0, y: 0 };
    }
    getValue() {
        return this.value;
    }
    setValue(value) {
        this.value = value;
    }
    setProps(props) {
        this.props = props;
    }
    getProps() {
        return this.props;
    }
}
exports.Value = Value;
const value = new Value();
value.setValue(1000);
value.setProps({ x: 1000, y: 2000 });
(0, tools_1.default)(`Value is ${value.getValue()} and Props are { x: ${value.getProps().x}, y: ${value.getProps().y}}`);
//# sourceMappingURL=index.js.map