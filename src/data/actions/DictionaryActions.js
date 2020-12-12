import { BASE_URL } from '../../constants/URL';

export const addDictionaryItem = (word) => {
    return async dispatch => {
        try {
            const request = await fetch(`${BASE_URL}`, {
                method: 'POST',
                body: JSON.stringify({
                    "word": word.toLowerCase()
                }),
                headers: {
                    "Content-Type":"application/json"
                }
            });

            if (request.ok) {
                const response = await request.json();

                if (response.error) {
                    throw new Error(response.message);
                } else {
                    return dispatch({
                        type: "UPDATE_DATA",
                        result: response.dict
                    });
                }
            } else {
                const response = await request.json();
                throw new Error(response.message);
            }
        } catch (error) {
            throw new Error(error.message);
        }
    }
}

export const searchWord = (word) => {
    return async dispatch => {
        try {
            const request = await fetch(`${BASE_URL}search?word=${word}`);

            if (request.ok) {
                const response = await request.json();

                if (response.error) {
                    throw new Error(response.message);
                } else {
                    return dispatch({
                        type: "ADD_DATA",
                        result: response.result
                    });
                }
            } else {
                const response = await request.text();
                throw new Error(response);
            }
        } catch (error) {
            throw new Error(error.message);
        }
    }
}

export const getAllItems = () => {
    return async dispatch => {
        try {
            const request = await fetch(`${BASE_URL}`, {
                method: 'GET',
            });

            if (request.ok) {
                const response = await request.json();

                if (response.error) {
                    throw new Error(response.message);
                } else {
                    return dispatch({
                        type: "ADD_DATA",
                        result: response.result
                    });
                }
            } else {
                const response = await request.text();
                throw new Error(response);
            }
        } catch (error) {
            throw new Error(error.message);
        }
    }
}