import { FC } from "react";
import { Accept, useDropzone } from "react-dropzone";

import { Box } from "@mui/material";
import { styled } from "@mui/system";

const Container = styled(Box)(({ theme }) => ({
  display: "flex",
  flex: 1,
  alignItems: "center",
  justifyContent: "center",
  border: `2px `,
  transition: `border .24s ease-in-out`,
  outline: "none",
  backgroundColor: (theme.palette.surfacevariant.main),
  height: "inherit",
  borderRadius: "2px",
}));

interface DropzoneProps {
  accept?: Accept | undefined;
  maxFiles?: number;
  multiple?: boolean;
  onDrop: (acceptedFiles: Array<File>) => void;
  children: React.ReactNode;
}

const getColor = (props: any) => {
  if (props.isDragAccept) {
    return "#00E676";
  }
  if (props.isDragReject) {
    return "#FF1744";
  }
  if (props.isDragActive) {
    return "#2196F3";
  }
  return "#0D81FD";
};

const Dropzone: FC<DropzoneProps> = (props) => {
  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
  } = useDropzone({
    ...props,
  });

  // returning the overall upload component which is beign used at different places for uploading purposes.
  return (
    <Container
      {...getRootProps({ isDragActive, isDragAccept, isDragReject })}
      sx={{
        borderColor: getColor({ isDragActive, isDragAccept, isDragReject }),
      }}
    >
      <input {...getInputProps()} />
      {props.children}
    </Container>
  );
};

export default Dropzone;
