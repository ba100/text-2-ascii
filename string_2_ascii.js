/**
 * This method will take a string and convert it ASCII code
 * @param text
 */
function cs2a(text) {
    let ascii = "";
    for (const c of text) {
        ascii += c.charCodeAt(0);
    }
    return ascii;
}

module.exports = cs2a;