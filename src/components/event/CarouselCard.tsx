import { AreaList } from "./types";
import ShowcaseBig from "../Carousels/ShowcaseBig";
import SingleCard from "./Card";
import ArenaForm from "./ArenaForm";
import CreateNewCard from "./NewArenaCard";

const CardCarousel = ({ Title, Data, data, createNew }: AreaList) => {
  return (
    <ShowcaseBig
      title={Title}
    >
      {Data.map((data) => {
        return <SingleCard {...data} key={data.festId + "-cometlabs"} />;
      })}
      {createNew && (
        <ArenaForm {...data}>
          <CreateNewCard />
        </ArenaForm>
      )}
    </ShowcaseBig>
  );
}

export default CardCarousel;