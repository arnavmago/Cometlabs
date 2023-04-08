export const handleLandingPageEmailSubmit = (email: string) => {
  alert(email + " submitted for learn more");
};

export const handleFestCardLike = (id: string) => {
  // id is the fest identifier
  alert("user liked fest - " + id);
};

// var form = $('#profile-photo')[0];
// var formData = new FormData(form);


// TODO: Add FestId
export const handleSingleImageUpload = async (
  festId: string,
  file: File,
  accessToken: string
): Promise<string | null> => {
  let uploadFormData = new FormData();
  uploadFormData.append('fileName', file, file.name);
  uploadFormData.append('festId', festId);
  console.log(uploadFormData);
  let res = await fetch(
    process.env.NEXT_PUBLIC_API_URL + "/fests/uploadToFestS3",
    {
      method: "POST",
      headers: {
        Authorization: accessToken,
      },
      body: uploadFormData,
    }
  );
  let url = null;
  if (res.ok) {
    res = await res.json();
    url = res.url;
  }
  return url;
};


export const handleProfileImageUpload = async (
  email: string,
  file: File,
  accessToken: string
): Promise<string | null> => {
  console.log(email)
  const uploadFormData = new FormData();
  uploadFormData.append("fileName", file, file.name);
  uploadFormData.append("email", email);
  let res = await fetch(
    process.env.NEXT_PUBLIC_API_URL + "/user/uploadProfileImage",
    {
      method: "POST",
      headers: {
        Authorization: accessToken,
      },
      body: uploadFormData,
    }
  );
  let url = null;
  if (res.ok) {
    res = await res.json();
    url = res.url;
  }
  return url;
};


export const handleSubmissionImageUpload = async (
  team_id: string,
  file: File
): Promise<string | null> => {
  console.log(team_id)
  const uploadFormData = new FormData();
  uploadFormData.append("fileName", file);
  uploadFormData.append("team_id", team_id);
  let res = await fetch(
    process.env.NEXT_PUBLIC_API_URL + "/c2d/uploadS3submission",
    {
      method: "POST",
      body: uploadFormData,
    }
  );
  let url = null;
  if (res.ok) {
    res = await res.json();
    url = res.url;
  }
  return url;
};

export interface UserCredentails {
  username: string;
  password: string;
}

export type NewUser = {
  id: string;
  name: string;
  email: string;
  profileImage: string;
  accessToken: string;
  username: string;
  role: string;
};

export type DefaultUser = {
  id: string;
  name: string;
  email: string;
  profileImage: string;
  accessToken: string;
  username: string;
  role: string;
  createdAt: Date;
  lastLogin: Date;
}

export const handleCustomSignIn = async (
  params: UserCredentails
): Promise<DefaultUser | null> => {
  let user: DefaultUser | null = null;
  try {
    const res = await fetch(
      process.env.NEXT_PUBLIC_API_URL + "/api/loginwithpassword",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: params.username,
          password: params.password,
          remember: "true",
        }),
      }
    );
    if (res.ok) {
      const { firstName, email, accessToken, profileImage, error, username, role, id } = await res.json();
      if (!error) {
        user = {
          name: firstName,
          email: email,
          accessToken: accessToken,
          // TODO: replace uuid, festid and imageUrl with backend data
          id: id,
          profileImage: profileImage,
          username: username,
          role: role,
          createdAt: new Date(),
          lastLogin: new Date(),
        };
      }
    }
  } catch (error) {
    console.log(error);
  } finally {
    return user;
  }
};

export const getGitHubEmail = async (
  accessToken: string | undefined
): Promise<string> => {
  if (accessToken === undefined) {
    return "";
  }
  const requestHeaders: HeadersInit = new Headers();
  const authToken = `token ${accessToken}`;
  requestHeaders.set("Authorization", authToken);
  const res = await fetch("https://api.github.com/user/emails", {
    headers: requestHeaders,
  });
  const emails = await res.json();
  let email: string = "";
  if (emails?.length > 0) {
    email = emails.sort((a: any, b: any) => b.primary - a.primary)[0].email;
  }
  return email;
};

type SigninWithoutPasswordProps = {
  email: string;
  name: string;
  imageUrl: string;
  username: string;
};

type LoginInfo = {
  accessToken?: string;
  id?: string;
  username?: string;
  profileImage?: string;
  name?: string;
  createdAt?: Date;
  lastLogin?: Date;
};

export const signinWithoutPassword = async (
  props: Partial<SigninWithoutPasswordProps>
): Promise<LoginInfo> => {
  const { email, name, imageUrl } = props;
  const firstName = name?.substring(0, name.indexOf(" "));
  const lastName = name?.substring(name.indexOf(" ") + 1);
  try {
    const res = await fetch(
      process.env.NEXT_PUBLIC_API_URL + "/api/loginwithoutpassword",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          firstName, lastName,
          profileImage: imageUrl,
        }),
      }
    );
    if (res.ok) {
      const { accessToken, id, username, profileImage, firstName, lastName, error, createdAt, lastLogin } = await res.json();
      if (!error) {
        // TODO: Replace with uuid
        return {
          accessToken: accessToken,
          id: id,
          username: username,
          profileImage: profileImage,
          name: firstName + ' ' + lastName,
          createdAt: createdAt,
          lastLogin: lastLogin
        };
      }
    }
  } catch (error) {
    console.log(error);
  }
  return {};
};

export type SignupData = {
  email: string;
  password: string;
  confirm: string;
  firstName: string;
  lastName: string;
  profileImage?: string;
  mobile: string;
  mobileLocal: number;
  countryCode: string;
  role: string;
  otpm: string;
  otpe: string;
};

export const sendOtp = async (data: SignupData, type: string) => {
  try {
    let res = await fetch(
      process.env.NEXT_PUBLIC_API_URL + "/api/signup/mailotp",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify({ ...data }),
      }
    );
    if (res.ok) {
      const mailer = await res.json();
      if (type === "RESEND" && mailer.success) {
        console.log("OTP sent to " + data.email);
      } else return mailer;
    } else {
      throw new Error("ON OTP_SEND: Bad response from server");
    }
  } catch (error) {
    console.log("Oops! Unable to send OTP.");
  }
};

export const sendMobileOtp = async (data: SignupData, type: string) => {
  try {
    let res = await fetch(
      process.env.NEXT_PUBLIC_API_URL + "/api/smsOTP",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify({ phone: data.mobile }),
      }
    );
    if (res.ok) {
      const mailer = await res.json();
      if (type === "RESEND" && mailer.success) {
        console.log("OTP sent to " + data.mobile);
      } else return mailer;
    } else {
      throw new Error("ON OTP_SEND: Bad response from server");
    }
  } catch (error) {
    console.log("Oops! Unable to send OTP.");
  }
};



// export const userLogOut = async (token: string) => {
//   try {
//     let res = await fetch(
//       process.env.NEXT_PUBLIC_API_URL + "/api/logout",
//       {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json;charset=utf-8",
//           Authorization: `bearer ${token}`,
//         },
//       }
//     );
//     if (res.ok) {
//       const result = await res.json();
//       if (result.success) {
//         return result;
//       }
//       else {
//         return result;
//       }
//      } else {
//       throw new Error("unable to logout");
//     }
//   } catch (error) {
//     console.log("unable to log out");
//   }
// };