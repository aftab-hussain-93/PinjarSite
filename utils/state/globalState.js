import { createState } from '@hookstate/core';

const globalState = createState({
    isAuthenticated: false,
    user: null
});

export default globalState