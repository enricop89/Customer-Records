/**
 * Compare fn for user_id sorting
 * @param a
 * @param b
 * @returns {number}
 */
export function compareUserId(a, b) {
    if (a.user_id < b.user_id) {
        return -1;
    }
    if (a.user_id > b.user_id) {
        return 1;
    }
    return 0;
};
