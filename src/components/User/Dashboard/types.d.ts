import { Technology } from "@/content/Technology";

export interface ResumeDataType {
  info: ResumeInfo;
  experience?: ResumeExperience[] | null;
  education: ResumeEducation[] | null;
  skills?: ResumeSkills[] | null;
  languages?: ResumeLanguages[] | null;
  projects?: ResumeProjects[] | null;
  dummyData: DummyData
  username: string;
}

export interface DummyData {
  LineChartGraph: LineChartGraph[];
  PiChartGraph: PiChartGraph[];
  RadarChartGraph: RadarChartGraph[];
  gitscore: number;
}

export interface LineChartGraph {
  amt: number;
  name: string;
  Users: number;
  Registrations: number,
  Submissions: number,
}

export interface RadarChartGraph {
  A: number;
  fullMarks: number;
  subject: string;
}

export interface PiChartGraph {
  color: string;
  name: string;
  value: number;
}

export interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

export interface ResumeInfo {
  name: string; // 3
  mobile: number; // 3
  profileImage: string; // 2 
  email: string; // 3
  bio: string; // 2
  socials: Partial<Socials>; // 10
  Username: string; // 3
}
export interface Socials {
  facebookUrl?: string; // 1
  linkedinUrl?: string; // 2
  githubUrl?: string; // 2
  instagramUrl?: string; // 1
  twitterUrl?: string; // 2
  leetcodeUrl?: string; // 2
}
export interface ResumeExperience { // 6
  name: string;
  position: string;
  urlName: string;
  urlLink: string;
  startDate: string;
  endDate: string;
  description: string;
  id: string;
}
export interface ResumeEducation { // 6
  institution: string;
  course: string;
  startDate: string;
  endDate: string;
  description: string;
  id: string;
}
export interface ResumeSkills { // 6 (for atleast 3)
  name: string;
}
export interface ResumeProjects { // 6
  name: string;
  description: string;
  highlights: string[] | null;
  tags: type[];
  github_repo: string;
  project_url: string;
  id: string;
}


export interface ReadOnly {
  readOnly?: boolean;
}

export interface type {
  name: string;
}