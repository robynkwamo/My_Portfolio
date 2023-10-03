import axios from 'axios';

const getInviteInfo = async (phoneNumber, firstName, lastName) => {
  try {
    const data = JSON.stringify({
      query: `query{
        guestInfoById(phoneNumber: "${phoneNumber}") 
          {
            _id,
            firstName,
            lastName,
            phoneNumber,
            isAttending,
            canHavePlusOne,
            hasPlusOne,
            eventId,
            isDeleted,
          }
        }`,
      variables: {},
    });

    const config = {
      method: 'post',
      url: `/graphql`,
      headers: {
        // Authorization: `Bearer ${(await Auth.currentSession()).getAccessToken().getJwtToken()}`,
        'Content-Type': 'application/json',
      },
      data,
    };

    return await axios(config).then((response) => {
      if (response?.data?.errors?.length > 0) {
        return {};
      }
      return response.data.data.guestInfoById;
    });
  } catch (error) {
    console.log('Error getting guest info: ', error);
  }
};

const guestUpdate = async (phoneNumber, isAttending, hasPlusOne) => {
  try {
    let updatedFields = { isAttending, hasPlusOne };

    const data = JSON.stringify({
      query: `mutation ($updatedFields: [JSON]!) {
        guestUpdateById(
          phoneNumber: "${phoneNumber}",
          updatedField: $updatedFields,
        )
      }`,
      variables: {
        updatedFields,
      },
    });

    const config = {
      method: 'post',
      url: `/graphql`,
      headers: {
        // Authorization: `Bearer ${(await Auth.currentSession()).getAccessToken().getJwtToken()}`,
        'Content-Type': 'application/json',
      },
      data,
    };

    return await axios(config).then((response) => {
      // console.log({ response });
      if (response?.data?.errors?.length > 0) {
        return false;
      }
      return response.data.data.guestUpdateById;
    });
  } catch (error) {
    console.log('Error getting guest info: ', error);
  }
};

// async function updateEmployeeInfo(companyID, newEmployeeInfo) {
//   try {
//     const { firstName, lastName, email, username, phoneNumber, DOB, pin, address } = newEmployeeInfo;

//     const data = JSON.stringify({
//       query: `mutation ($updatedFields: [JSON]!) {
//         guestUpdateById(
//           phoneNumber: "${phoneNumber}",
//           updatedFields: $updatedFields,
//         )
//       }`,
//       variables: {
//         updatedFields: {
//           isAttending: true,
//         },
//       },
//     });

//     const config = {
//       method: 'post',
//       url: `${BASE_URL}/graphql`,
//       headers: {
//         Authorization: `Bearer ${(await Auth.currentSession()).getAccessToken().getJwtToken()}`,
//         'Content-Type': 'application/json',
//       },
//       data,
//     };

//     return await axios(config).then((response) => {
//       if (response?.data?.errors?.length > 0) {
//         return {};
//       }
//       return response.data.data.updateEmployeeInfo;
//     });
//   } catch (error) {
//     console.log('Error updating employee info from employee api: ', error);
//   }
// }

export { getInviteInfo, guestUpdate };
