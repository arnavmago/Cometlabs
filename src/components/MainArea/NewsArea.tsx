import { CardContainer } from "@/styles/theme";
import { Box, Grid, ButtonBase } from "@mui/material";
import Image from "next/image";


// news section interface containing name and image
export interface News {
  name: string,
  imageUrl: string,
  href: string,
  width: number,
  height: number,
  id: string,
  details: string,
};



// single news card
const NewsCard = (news: News) => {
  return (
    <CardContainer sx={{
      display: "flex",
      flexDirection: "column",
      borderRadius: "0px",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "onsurfacevariant.main"
    }}>
      <ButtonBase sx={{ width: "170px", height: "120px" }} href={news.href} target="_blank">
        <Image src={news.name === "New Kerala" ? 'https://www.newkerala.com/prime/assets/img-min/logo/default-logo.png' : `/news${news.imageUrl}`}
          height={news.height}
          width={news.width}
          alt={news.name + "-logo"} />
      </ButtonBase>
    </CardContainer>
  );
}


// whole news area
const NewsArea = () => {
  return (
    <Box sx={{ width: "100%", padding: "0 20px 44px 20px", position: "relative", }}>
      <Grid container direction="row" spacing={2} justifyContent="center" alignItems="center">
        {NEWS.map((news) => {
          return (
            <Grid item key={news.id}>
              <NewsCard
                {...news}
              />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}


// dummy news data for news component
export const NEWS: Array<News> = [
  {
    name: "The Hindu",
    imageUrl: "/TheHindu.svg",
    href: "https://www.thehindubusinessline.com/info-tech/iiit-hyderabad-names-four-startups-for-deep-tech-cohort/article38069365.ece/amp/",
    id: "THE-HINDU1",
    width: 130,
    height: 14,
    details: "IIIT-Hyderabad names four startups for deep-tech cohort",
  },
  {
    name: "The Times of India",
    imageUrl: "/TimesOfIndia.svg",
    href: "https://timesofindia.indiatimes.com/home/education/news/cie-iiith-commences-14th-cohort-of-deep-tech-accelerator-avishkar/articleshow/88575726.cms",
    id: "Times of India",
    width: 130,
    height: 10,
    details: "“CIE-IIITH commences 14th cohort of deep-tech accelerator Avishkar”",
  },
  {
    name: "The Print",
    imageUrl: "/ThePrint.svg",
    href: "https://theprint.in/ani-press-releases/cie-iiith-commences-14th-cohort-of-deep-tech-accelerator-avishkar/790618/",
    id: "The Print",
    width: 130,
    height: 26,
    details: "“CIE-IIITH commences 14th cohort of deep-tech accelerator Avishkar”",
  },
  {
    name: "Tittle Press",
    imageUrl: "/TittlePress.svg",
    href: "https://tittlepress.com/tech/1407959/",
    id: "Tittle Press",
    width: 88,
    height: 46,
    details: "“CIE-IIITH starts the 14th cohort of the Avishkar deep-tech accelerator”",
  },
  {
    name: "New Kerela",
    imageUrl: "/newkerala.png",
    href: "https://www.newkerala.com/news/2021/183156.htm",
    id: "New Kerela",
    width: 130,
    height: 26,
    details: "“CIE-IIITH commences 14th cohort of deep-tech accelerator Avishkar.”",
  },
  {
    name: "Foreign Investor's of India",
    imageUrl: "/ForeignInvestorsOfIndia.svg",
    href: "https://twitter.com/fii_news/status/1476139343685115904?s=20",
    id: "Foreign Investor's of India",
    width: 50,
    height: 46,
    details: "“Four startups selected for the 14th cohort of Avishkar Deep Tech accelerator”",
  },
  {
    name: "Telangana Today",
    imageUrl: "/TelanganaToday.svg",
    href: "https://telanganatoday.com/4-start-ups-onboard-for-iiit-hyderabads-avishkar",
    id: "Telengana Today",
    width: 130,
    height: 19,
    details: "“4 start-ups onboard for IIIT-Hyderabad’s Avishkar”",
  },
  {
    name: "Cision PR Newswire",
    imageUrl: "/Cision.svg",
    href: "https://www.prnewswire.com/in/news-releases/cie-iiith-commences-14th-cohort-of-deep-tech-accelerator-avishkar-887678835.html",
    id: "Cision",
    width: 73,
    height: 29,
    details: "“CIE-IIITH commences 14th cohort of deep-tech accelerator Avishkar”",
  },
  {
    name: "The Siyasat Daily",
    imageUrl: "/SiyasatDaily.svg",
    href: "https://www.siasat.com/iiit-hyderabad-commence-deep-tech-accelerator-avishkar-2250282/amp/",
    id: "The Siyasat Daily",
    height: 26,
    width: 130,
    details: "“IIIT-Hyderabad commence deep-tech accelerator ‘Avishkar’”",
  },
  {
    name: "CRN India",
    imageUrl: "/CRN.svg",
    href: "https://www.crn.in/news/cie-iiith-commences-14th-cohort-of-deep-tech-accelerator-avishkar/",
    id: "CRN",
    width: 68,
    height: 29,
    details: "“CIE-IIITH commences 14th cohort of deep-tech accelerator Avishkar”",
  },
  {
    name: "CIE Newsletter",
    imageUrl: "/cie.png",
    href: "https://mailchi.mp/2bdfbd3f823e/newsletter-january-2022-centre-for-innovation-and-entrepreneurship-at-iiit-hyderabad",
    id: "CIE",
    width: 120,
    height: 60,
    details: "“CIE-IIITH commences 14th cohort of deep-tech accelerator Avishkar”",
  },
]





export default NewsArea;


