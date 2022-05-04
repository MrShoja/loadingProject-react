export function c(v) {
    const n = [];
    if (!v) {
        for (let i = 100; i > 0; i--) {
            n.push(i);
        }
    } else {
        for (let i = v; i > 0; i--) {
            n.push(i);
        }
    }
    return n;
}