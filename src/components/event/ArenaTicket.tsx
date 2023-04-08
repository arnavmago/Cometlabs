import { arenaTicket } from "./types";
import { Controller, useFormContext } from "react-hook-form";
import { Stack, Box, Typography, IconButton, Grid, TextField, Radio } from "@mui/material";
import { HiOutlineLockClosed, HiOutlineXCircle, HiOutlineTrash, HiOutlinePlusCircle, HiOutlineTicket } from "react-icons/hi";
import React from "react";
import { nanoid } from "nanoid";
import { ReadOnly } from "./types";
import { FilledButton } from "@/styles/theme";

const ArenaTicket = ({ readOnly }: ReadOnly) => {
  const { trigger, setValue, getValues, watch } = useFormContext();
  const ticketArray: Array<arenaTicket> = watch("tickets") || [];
  const [visible, setVisible] = React.useState(false);
  const fields = ["ticketLabel", "ticketCost"];
  const [selectedValue, setSelectedValue] = React.useState("");

  const handleDelete = (id: string) => {
    setValue(
      "tickets",
      ticketArray.filter((ticket) => ticket.id !== id)
    );
  };

  const reset = () => {
    fields.forEach((field) => {
      setValue(field, "");
    });
  };

  const handleSubmit = async (_e: any) => {
    const isValid = await trigger(fields);
    if (isValid) {
      const values = getValues(fields);
      setValue("tickets", [
        ...ticketArray,
        { label: values[0], cost: values[1], id: nanoid(7) },
      ]);
      reset();
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

  const makePayment = async () => {
    console.log("inside payment")
  }

  if (readOnly) {
    return (
      <Stack spacing={2}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <HiOutlineTicket fontSize={"1.5rem"} />
          <Typography variant="TitleLarge" sx={{ fontWeight: 500, ml: "12px" }}>
            Tickets
          </Typography>
          <Typography
            variant="LabelLarge"
            sx={{ fontWeight: 500, ml: "auto", alignSelf: "end", mr: 1 }}
          >
            Cost
          </Typography>
        </Box>
        <Stack alignItems="stretch" sx={{ padding: "0px 16px" }}>
          {ticketArray.length === 0 && (
            <Typography variant="LabelLarge" align="center">
              No Tickets Added
            </Typography>
          )}
          {ticketArray.map((ticket) => (
            <Stack
              direction="row"
              spacing={1}
              alignItems="center"
              key={ticket.id + "-booking"}
            >
              <Radio
                checked={selectedValue === ticket.label}
                onChange={handleChange}
                value={ticket.label}
                name="radio-buttons"
                size="small"
              />
              <Typography variant="TitleLarge">{ticket.label}</Typography>
              <div style={{ flexGrow: 1 }} />
              <Typography variant="LabelLarge">
                {ticket.cost == 0 ? "Free" : "₹ " + ticket.cost}
              </Typography>
            </Stack>
          ))}
        </Stack>
        <Stack
          alignItems="center"
          justifyContent="space-between"
          direction="row"
        >
          <Box component="form">
            <FilledButton color="primary" onClick={
              // handleClick
              makePayment
              // () => register("token")
            }
              fullWidth
            >
              <Typography variant="LabelLarge">
                Pay Now
              </Typography>
            </FilledButton>
          </Box>
        </Stack>
      </Stack>
    )
  }

  return (
    <Stack spacing={2}>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <HiOutlineLockClosed fontSize={"1.5rem"} />
        <Typography variant="TitleLarge" sx={{ fontWeight: 500, ml: "12px" }}>
          Set Ticket Price
        </Typography>
      </Box>
      <Stack alignItems="stretch" sx={{ padding: "0px 16px" }}>
        {ticketArray.length === 0 && (
          <Typography variant="LabelLarge" align="center">
            No Tickets Added
          </Typography>
        )}
        {ticketArray.map((ticket) => (
          <Stack
            direction="row"
            spacing={1}
            alignItems="center"
            key={ticket.id + "-booking"}
          >

            <IconButton
              size="small"
              color="secondary"
              onClick={() => handleDelete(ticket.id)}
            >
              <HiOutlineXCircle />
            </IconButton>
            <Typography variant="TitleMedium">{ticket.label}</Typography>
            <div style={{ flexGrow: 1 }} />
            <Typography variant="LabelLarge">
              {ticket.cost == 0 ? "Free" : "₹ " + ticket.cost}
            </Typography>
          </Stack>
        ))}
      </Stack>
      <Box sx={{ width: "100%" }}>
        {visible ? (
          <Grid container alignItems={"center"} spacing={1}>
            <Grid item xs={1} sx={{ mr: 2 }}>
              <IconButton
                size="small"
                color="secondary"
                onClick={() => {
                  setVisible(false);
                  reset();
                }}
              >
                <HiOutlineTrash />
              </IconButton>
            </Grid>
            <Grid item xs={5}>
              <Controller
                name="ticketLabel"
                defaultValue={""}
                rules={{
                  required: "Required",
                }}
                render={({
                  field: { ref, ...field },
                  fieldState: { error },
                }) => (
                  <TextField
                    fullWidth
                    margin={"none"}
                    variant="outlined"
                    size="small"
                    inputProps={{
                      style: {
                        fontWeight: 400,
                        fontSize: "16px",
                        lineHeight: "24px",
                      }
                    }}
                    InputLabelProps={{
                      style: {
                        fontWeight: 500,
                        fontSize: "14px",
                        lineHeight: "20px",
                      }
                    }}
                    label="Name"
                    error={!!error}
                    {...field}
                  />
                )}
              />
            </Grid>
            <Grid item xs={4}>
              <Controller
                name="ticketCost"
                defaultValue={""}
                rules={{
                  required: "Required",
                }}
                render={({
                  field: { ref, ...field },
                  fieldState: { error },
                }) => (
                  <TextField
                    fullWidth
                    variant="outlined"
                    size="small"
                    type="number"
                    inputProps={{
                      style: {
                        fontWeight: 400,
                        fontSize: "16px",
                        lineHeight: "24px",
                      }
                    }}
                    InputLabelProps={{
                      style: {
                        fontWeight: 500,
                        fontSize: "14px",
                        lineHeight: "20px",
                      }
                    }}
                    margin="none"
                    placeholder="₹₹₹"
                    label="Cost"
                    error={!!error}
                    {...field}
                  />
                )}
              />
            </Grid>
            <Grid item xs={1}>
              <IconButton color="primary" onClick={handleSubmit}>
                <HiOutlinePlusCircle />
              </IconButton>
            </Grid>
          </Grid>
        ) : (
          <FilledButton
            fullWidth
            onClick={
              // handleSubmit
              () => setVisible(true)
            }
          >
            <Typography variant="LabelLarge">
              Add Tickets
            </Typography>
          </FilledButton>
        )}
      </Box>
    </Stack>
  )
}

export default ArenaTicket;

















// const register = async (data: string) => {
//     // console.log(data);
//     try {
//       const accessToken = "Token " + user.accessToken;
//       let res = await fetch(
//         process.env.NEXT_PUBLIC_API_URL + "/firefly/register",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json;charset=utf-8",
//             Authorization: accessToken,
//           },
//           body: JSON.stringify({ accessToken: data }),
//         }
//       );
//       if (res.ok) {
//         const { success, error } = await res.json();
//         if (!!success) {
//           console.log(success);
//         } else {
//           console.log(error);
//         }
//       } else {
//         throw new Error("ERROR");
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };
// const initializeRazorpay = () => {
//     return new Promise((resolve) => {
//       const script = document.createElement("script");
//       script.src = "https://checkout.razorpay.com/v1/checkout.js";

//       script.onload = () => {
//         resolve(true);
//       };
//       script.onerror = () => {
//         resolve(false);
//       };

//       document.body.appendChild(script);
//     });
//   };

//   const makePayment = async () => {

//     // if (user)

//     const res = await initializeRazorpay();

//     if (!res) {
//       alert("Razorpay SDK Failed to load");
//       return;
//     }

//     // Make API call to the serverless API
//     const data = await fetch(
//       process.env.NEXT_PUBLIC_API_URL +  "/payment/createorder",
//         { method: "POST",
//           headers: {
//             "Content-Type": "application/json;charset=utf-8",
//           },
//           body: JSON.stringify({ amount: 1 }),
//           // body: JSON.stringify({ accessToken: data }),
//         })
//           .then((t) =>
//             t.json()
//       );
//     // console.log(data);
//     var options = {
//       key: process.env.RAZORPAY_KEY, // Enter the Key ID generated from the Dashboard
//       name: "COMETLABS IT SOLUTIONS PVT. LTD.",
//       currency: 'INR',
//       amount: 100,
//       order_id: data.order_id,
//       // description: "Thankyou for your test donation",
//       image: <Logo />,
//       handler: async function (response: any) {
//         // Validate payment at server - using webhooks is a better idea.
//         // alert(response.razorpay_payment_id);
//         // alert(response.razorpay_order_id);
//         // alert(response.razorpay_signature);
//       const res = await fetch(
//           process.env.NEXT_PUBLIC_API_URL +  "/payment/verify",
//             { method: "POST",
//               headers: {
//                 "Content-Type": "application/json;charset=utf-8",
//               },
//               body: JSON.stringify({
//                 order_id: data.order_id,
//                 payment_id: response.razorpay_payment_id,
//                 payment_signature: response.razorpay_signature
//               }),
//             })
//               .then((t) => t.json()
//           );
//       if (res.success) {
//         register("referral")
//       } else {
//         alert("payment unsuccesfull")
//       }
//       },
//       prefill: {
//         name: user.name,
//         email: user.email,
//         contact: "",
//       },
//     };

//     const paymentObject = new (window as any).Razorpay(options);
//     paymentObject.on('payment.failed', function (response: any)
//     {
//     alert(response.error.code);
//     alert(response.error.description);
//     alert(response.error.source);
//     alert(response.error.step);
//     alert(response.error.reason);
//     alert(response.error.metadata.order_id);
//     alert(response.error.metadata.payment_id);
//     }
//     )
//     paymentObject.open();
//   };