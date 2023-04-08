import { NEWS, News } from "@/components/MainArea/NewsArea";
import ShowcaseBiggest from "../Carousels/ShowcaseBiggest";
import { Typography } from "@mui/material";
import { CardContainer } from "@/styles/theme";



// single news headline 
const Carousel = (props: News) => {
    return (
        <CardContainer elevation={0} sx={{ margin: "20px 5vw", textAlign: "center" }}>
            <Typography variant="LabelLarge" fontStyle="italic">{props.details}</Typography>
            <Typography variant="LabelLarge" textAlign="right">-- {props.name}</Typography>
        </CardContainer>
    );
}


// whole news carousel area
const NewsCarousel = () => {
    return (
        <ShowcaseBiggest title="We're Featured in the Press">
            {NEWS.map((news) => {
                return (
                    <Carousel key={news.name} {...news} />
                );
            })}
        </ShowcaseBiggest>
    );
}


export default NewsCarousel;