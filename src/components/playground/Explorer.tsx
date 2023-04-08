// import { nanoid } from "nanoid";
// import * as React from "react";
// import {
//   HiOutlineChevronDown,
//   HiOutlineChevronRight,
//   HiOutlineDocumentText,
//   HiOutlineFolder
// } from "react-icons/hi";
// import TreeItem from "@mui/lab/TreeItem";
// import TreeView from "@mui/lab/TreeView";
// import { Box, Typography } from "@mui/material";

// interface BasicFile {
//   id: string;
//   name: string;
// }

// interface PlaygroundFile extends BasicFile {
//   [x: string]: PlaygroundFile | string;
// }

// function buildTree( treeObject: Partial<PlaygroundFile>, path: string[], setRecursively: boolean = false ) {
//   const pathCopy = path.slice(0);
//   pathCopy.shift();
//   const absPath = pathCopy.join("/");
//   // @ts-expect-error
//   path.reduce((instanceOfTreeObject, currentPath, level) => {
//     if (
//       setRecursively &&
//       typeof instanceOfTreeObject[currentPath] === "undefined" &&
//       level !== path.length
//     ) {
//       instanceOfTreeObject[currentPath] = {
//         id: currentPath === "files" ? "root" : nanoid(),
//         name: currentPath,
//         path: absPath,
//         type: level + 1 === path.length ? "file" : "folder",
//       };

//       return instanceOfTreeObject[currentPath];
//     }
//     return instanceOfTreeObject[currentPath];
//   }, treeObject);
// }

// export default function RichObjectTreeView() {
//   const { sandpack } = useSandpack();
//   const { files, openFile } = sandpack;

//   const filesToRenderTree = (bundlerFiles: SandpackBundlerFiles): any => {
//     var tree: Partial<PlaygroundFile> = {};

//     Object.keys(bundlerFiles).map((path) => {
//       let splitPath = path.split("/");
//       splitPath.shift();
//       splitPath = ["files", ...splitPath];
//       if (!!splitPath && splitPath.length > 1) buildTree(tree, splitPath, true);
//     });

//     console.log(tree);
//     return tree;
//   };

//   const renderTree = ({ files }: any) => {
//     const { id: nodeId, name: label, path, type, ...rest } = files;
//     const children = Object.values(rest);

//     return (
//       <TreeItem
//         nodeId={nanoid()}
//         label={
//           type === "file" ? (
//             <Typography sx={{ alignItems: "center", display: "flex" }}>
//               <HiOutlineDocumentText style={{ marginRight: "8px" }} /> {label}
//             </Typography>
//           ) : (
//             <Typography sx={{ alignItems: "center", display: "flex" }}>
//               <HiOutlineFolder style={{ marginRight: "8px" }} /> {label}
//             </Typography>
//           )
//         }
//         key={nanoid()}
//         onClick={() => type === "file" && openFile("/" + path)}
//       >
//         {Array.isArray(children)
//           ? children.map((node) => renderTree({ files: node }))
//           : null}
//       </TreeItem>
//     );
//   };

//   return (
//     <Box sx={{ mt: 2 }}>
//       <TreeView
//         aria-label="rich object"
//         defaultCollapseIcon={<HiOutlineChevronDown />}
//         defaultExpanded={["root"]}
//         defaultExpandIcon={<HiOutlineChevronRight />}
//         sx={{ height: "100%", flexGrow: 1, maxWidth: 400, overflowY: "auto" }}
//       >
//         {renderTree(filesToRenderTree(files))}
//       </TreeView>
//     </Box>
//   );
// }


const Explorer = () => {
  return (<></>)
}

export default Explorer;