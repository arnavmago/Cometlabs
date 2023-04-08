# Festec Docs

## **Starting with Backend code**

📦backend  
┗ 📂functions  
┃ ┗ 📜index.tsx

This directory contains all the backend related functions encapsulated to simplify connecting with backend and improve de-coupling.

---

`handleLandingPageEmailSubmit = (email: string) =>`

Function to handle e-mail submissions for the landing page "Learn more" `TextField`.

---

`handleFestCardLike = (id: string) =>`

Function to handle like clicks on the `FestCard` component.

---

` handleSingleImageUpload = async (festId: string, file: File) =>`

Function to upload a single image to S3 bucket. Returns the url of the uploaded image.

---

`handleCustomSignIn = async (params: UserCredentails) =>`

Function to handle the **credentials** signin, used with `NextAuthJs` in /api/auth.

---

`getGitHubEmail = async (accessToken: string | undefined) =>`

Helper function to fetch the user email from GitHub post-authentication. This is necessary since some user settings disallow propogation of email in user auth data.

---

`signinWithoutPassword = async (props: Partial<SigninWithoutPasswordProps>) =>`

Function to handle the **provider** (social) signin, used with `NextAuthJs` in /api/auth.

---

`sendOtp = async (data: SignupData, type: string) =>`

Function to send OTP to the user. `type` determines wether it is "re-send" or not.

---
