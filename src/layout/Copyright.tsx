import { Box, TextField } from "@mui/material";
import { InternalLinks } from "@/content/Links";
import * as React from 'react';
import { useSnackbar } from "notistack";
import { Controller, useForm } from "react-hook-form";
import { FilledButton } from "@/styles/theme";
import style from "@/styles/typography-styles.module.css";

// default copyright to use anywhere
export default function Copyright() {
  return (
    // <Typography
    //   variant="LabelMedium"
    //   color="onsurfacevariant.main"
    //   onClick={() => { window.location.href = InternalLinks.LANDING_PAGE }}
    //   sx={{ cursor: 'pointer' }}
    // >
    <p className={style.LabelMedium} style={{ color: "#c4c6d0" }} onClick={() => { window.location.href = InternalLinks.LANDING_PAGE }}>
      © COMETLABS {new Date().getFullYear()}.
    </p>

  );
}

// this is footer's newsletter part

export function NewsLetter() {
  const { enqueueSnackbar } = useSnackbar();
  const { handleSubmit, control, formState: { isSubmitting } } = useForm();

  const onSubmit = () => {
    enqueueSnackbar("You have subscribed to our newsletter, Stay Tuned!!", { variant: "success" })
  }


  return (
    <Box
      sx={{
        // marginTop: 8,
        display: "flex",
      }}
    >
      <Box component="form" onSubmit={handleSubmit(onSubmit)} >
        {/* <Typography variant="TitleMedium"> */}
        <p className={style.TitleMedium}>
          Subscribe to Our NewsLetter</p>
        {/* </Typography> */}
        <Controller
          name="email"
          control={control}
          defaultValue=""
          rules={{
            required: "Email required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Invalid email",
            },
          }}
          render={({ field, fieldState: { error } }) => (
            <TextField
              variant="outlined"
              required
              fullWidth
              id="email"
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
              label="Email Address"
              autoComplete="email"
              error={!!error}
              {...field}
              ref={null}
            />
          )}
        />
        <FilledButton
          type="submit"
          // fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 6 }}
          disabled={isSubmitting}
        >
          {/* <Typography variant="LabelLarge"> */}
          <p className={style.LabelLarge}>
            {isSubmitting ? "Subscribing..." : "Subscribe"} </p>
          {/* </Typography> */}
        </FilledButton>
      </Box>
    </Box>
  );
