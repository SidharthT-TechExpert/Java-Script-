/**
 * @return {Generator<number>}
 */
const fibGenerator = function* () {
    let a = 0, b = 1;

    while (true) {
        yield a;
        let next = a + b;
        a = b;
        b = next;
    }
};


/**
 * const gen = fibGenerator();
 * gen.next().value; // 0
 * gen.next().value; // 1
 */