import { DefaultUser } from "@/backend/functions";
import { CardContainer } from "@/styles/theme";
import Image from "next/image";


interface TrackCardProps {
    selected?: boolean;
    href?: string;
    sx?: any;
    user: DefaultUser;
    hack?: boolean;
    index: number,
    elevation: number[];
    setElevation: React.Dispatch<React.SetStateAction<number[]>>;
    title: "Angular" | "React" | "JavaScript" | "TypeScript" | "Vue" | "Svelte" | "Next" | "Nuxt" | "";
    imageUrl: string;
}


export default function TrackCard({ selected, href, sx, hack, index, elevation, setElevation, ...props }: TrackCardProps) {
    // const type = hack ? "h" : "f";

    const handleClick = () => {
        elevation[index] = elevation[index] ? 0 : 2
        for (let i = 0; i < elevation.length; i++) {
            if (i != index) {
                elevation[i] = 0;
            }
        }
        setElevation([...elevation]);
        console.log(elevation);
        console.log(props.title);
    }

    if (href) {

    }

    return (
        <CardContainer sx={{ textAlign: "center", mb: 5, p: 2 }} onClick={handleClick} elevation={elevation[index]}>
            <Image
                src={props.imageUrl}
                height={60}
                width={60}
                layout={"fixed"}
                alt={props.title + "-logo"}
            />
            {/* <Typography sx={{ fontWeight: 500, mt: 1 }}>{props.title}</Typography> */}
        </CardContainer>
    )
}