import { AreaList, viewOnly } from "./types";
import { Typography, Grid } from "@mui/material";
import dynamic from "next/dynamic";

const SingleCard = dynamic(() => import('@/components/event/Card'),
  { ssr: false, }
);

const CreateNewCard = dynamic(() => import('@/components/event/NewArenaCard'),
  { ssr: false, }
);

const ArenaForm = dynamic(() => import('@/components/event/ArenaForm'),
  { ssr: false, }
);

interface Area extends AreaList, viewOnly { }

const CardArea = ({ view, Title, Data, data, createNew }: Area) => {

  return (
    <div>
      {Data.length > 0 && <Typography
        variant="HeadlineLarge"
        sx={{ flexGrow: 1, maxWidth: `calc(100vw - 100px)` }}
        noWrap
      >
        {Title}
      </Typography>}
      <Grid container sx={{ justifyContent: "space-around", mb: 4 }}>
        {Data.length > 0 && Data.map((data) => {
          return (
            <Grid item key={data.festId + "-cometlabs"}>
              <SingleCard {...data} view={view} />
            </Grid>
          )
        })}
        {createNew && (
          <Grid item>
            <ArenaForm {...data}>
              <CreateNewCard />
            </ArenaForm>
          </Grid>
        )}
      </Grid>
    </div>
  );
}

export default CardArea;