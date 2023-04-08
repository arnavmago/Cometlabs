export interface ReadOnly {
  readOnly?: boolean;
}
export interface viewOnly {
  view?: boolean;
}
export interface CodeArena {
  details: arenaDetails;
  type: "Hackathon" | "CodeArena" | "Labs";
  organiser: arenaOrganiser;
  description: arenaDescription;
  ticket?: arenaTicket[];
  tracks?: arenaTrack[];
  festId: string;
  mode: "Online" | "Offlilne";
  approvedBy?: string;
  sponsor?: arenaSponsorType[];
  prizes?: arenaPrize[];
  count: number;
  festCreatorId?: string;
}


export interface arenaPrize {
  title: string;
  description: string;
}

export interface arenaSponsorType {
  sponsorLabel: string;
  bannerSize: number;
  sponsor: Sponsor[];
}

export interface Sponsors {
  imageUrl: string;
  id: string;
}



export interface arenaDetails {
  title: string;
  startDate: string;
  endDate: string;
  regStartDate: string;
  regEndDate: string;
  imageUrl: string;
  websiteUrl?: string;
  tags: type[];
  desc: string;
}

export interface type {
  name: string;
}
export interface arenaOrganiser {
  imageUrl: string;
  title: string;
  mobile: string
  email: string;
  description: string;
  facebookUrl: string;
  linkedinUrl: string;
  twitterUrl: string;
  instagramUrl: string;
}

export interface arenaDescription {
  description: string;
  videoUrl?: string;
}

export interface arenaTicket {
  label: string;
  cost: number;
  id: string;
}



export interface arenaTrack {
  name: string;
  imageUrl: string;
  description: string;
  id: string;
}


export interface AreaList {
  Data: CodeArena[];
  Title: string;
  data: CodeArena;
  createNew?: boolean;
}