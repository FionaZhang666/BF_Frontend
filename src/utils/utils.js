export function showLocalNum(numString) {
    if (numString) {
        return parseInt(numString, 10).toLocaleString();
    }
    return 'N/A';
}

export function validDate(dateRange) {
    if (dateRange.start && dateRange.end) {
        if (dateRange.end < dateRange.start) {
            return false;
        }
    }
    return true;
}

export function toLocalDate(date) {
    return new Date(date).toLocaleString();
}