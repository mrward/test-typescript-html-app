function f(x) {
    if (x) {
        return true;
    }
    else {
        return false;
    }

    x = 0; // Error: Unreachable code detected.
} 