import { ReadOnly, arenaDescription } from "./types";
import { Controller, useFormContext } from "react-hook-form";
import { Skeleton, TextField, Box, Typography } from "@mui/material";
import ReactMarkdown from "react-markdown";
import "react-markdown-editor-lite/lib/index.css";
import dynamic from "next/dynamic";
import style from "@/styles/markdown-styles.module.css";


const ReactPlayer = dynamic(() => import("react-player/lazy"), {
  loading: () => <Skeleton height={400} width={"100%"} />,
});

const Editor = dynamic(() => import("react-markdown-editor-lite"), {
  loading: () => <Skeleton height={350} width={"100%"} />,
});


const ArenaDescription = ({ readOnly }: ReadOnly) => {
  const { watch } = useFormContext()
  const description: arenaDescription = watch("description");


  if (!Boolean(description)) {
    return (
      <Typography variant="LabelLarge" align="center" sx={{ mt: 2 }}>
        No Description Provided
      </Typography>
    );
  }

  if (readOnly) {
    return (
      <div>
        {!!description.videoUrl && (
          <Box sx={{ borderRadius: "12px", overflow: "hidden" }}>
            <ReactPlayer url={description.videoUrl} height="400px" width="inherit" />
          </Box>
        )}
        <Typography variant="BodyMedium" className="content">
          <ReactMarkdown className={style.reactMarkDown}>
            {description.description}
          </ReactMarkdown>
        </Typography>
      </div>
    )
  }

  return (
    <div>
      <Controller
        name={"description.description"}
        defaultValue={""}
        rules={{
          required: "Fest description must be filled",
        }}
        render={({ field }) => {
          return (
            <div>
              <Editor
                placeholder="Enter description with minimum 100 words."
                style={{ height: 350 }}
                value={field.value}
                renderHTML={(text: string) => {
                  field.onChange(text);
                  return (
                    <Typography variant="BodyMedium" className="content">
                      <ReactMarkdown className={style.reactMarkDown}>
                        {text}
                      </ReactMarkdown>
                    </Typography>
                  );
                }}
              />
            </div>
          );
        }}
      />
      <Controller
        name="description.videoUrl"
        defaultValue={""}
        rules={{
          pattern: {
            value:
              /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/gi,
            message: "Please enter a valid URL",
          },
        }}
        render={({ field: { ref, ...field }, fieldState: { error } }) => (
          <TextField
            sx={{ mt: 2 }}
            placeholder="Fest video URL from YouTube, Vimeo, SoundCloud, Facebook, etc"
            fullWidth
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
            error={!!error}
            variant="standard"
            {...field}
          />
        )}
      />
    </div>
  )
}

export default ArenaDescription