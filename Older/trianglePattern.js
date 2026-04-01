// Triangle Pattern
// Prints various triangle patterns

function starTriangle(rows) {
    console.log("\nPattern 2: Right-angled triangle with stars");
    for (let i = 1; i <= rows; i++) {
        let pattern = "";
        for (let j = 1; j <= i; j++) {
            pattern += "* ";
        }
        console.log(pattern);
    }
}

starTriangle(5);
