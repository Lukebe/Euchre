export const membershipTypes = {
    MEMBERSHIP_UPDATE: 'MEMBERSHIP_UPDATE'
};

export const updateMembership = (membershipType: string, endDate: number) => (dispatch: any) => {
    dispatch({
        payload: {
            membershipType, endDate
        },
        type: membershipTypes.MEMBERSHIP_UPDATE
    });
}