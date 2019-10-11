export const homeTypes = {
    HOME_UPDATE: 'HOME_UPDATE'
};

export const updateHome = (amount: number) => (dispatch: any) => {
    dispatch({
        payload: {
            amount
        },
        type: homeTypes.HOME_UPDATE
    })
}