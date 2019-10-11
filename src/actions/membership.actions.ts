export const membershipTypes = {
    MEMBERSHIP_UPDATE: 'MEMBERSHIP_UPDATE'
};

export const updateMembership = (amount: number) => (dispatch: any) => {
    dispatch({
        payload: {
            amount
        },
        type: membershipTypes.MEMBERSHIP_UPDATE
    })
}