export function orderByProps(obj, arr) {
    let result = [];
    let subResult = [];
    for (let prop of arr) {
        if (prop in obj) {
            result.push({key: prop, value: obj[prop]});
        } else {
            throw new Error(`Property ${prop} not found in object`);
        }
    }
    for (let prop in obj){
        if (!arr.includes(prop)) {
            subResult.push({key: prop, value: obj[prop]});
        }
    }
    subResult.sort((a, b) => a.key >= b.key ? 1 : -1);
    return result.concat(subResult);
}
