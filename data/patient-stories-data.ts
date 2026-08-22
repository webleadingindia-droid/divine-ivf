// Patient video patientdata - Local video files
// videoId = video filename (without extension)
// All videos should be in: /public/videos/patientdata/
// All thumbnails should be in: /public/images/patientdata/

export type Testimonial = {
  id: string;
  name: string;
  location: string;
  treatment: string;
  quote: string;
  videoId: string;
  videoFile?: string;
  thumbnail?: string;
};

export const patientdata: Testimonial[] = [  
  {
    id: "t2",
    name: "Patient Story 2",
    location: "Noida",
    treatment: "IUI",
    quote: "Replace with this patient's real quote.",
    videoId: "patient-stories2",
  },
  {
    id: "t3",
    name: "Patient Story 3",
    location: "Delhi",
    treatment: "ICSI",
    quote: "Replace with this patient's real quote.",
    videoId: "patient-stories3",
  },
  {
    id: "t4",
    name: "Patient Story 4",
    location: "Ghaziabad",
    treatment: "Fertility Evaluation",
    quote: "Replace with this patient's real quote.",
    videoId: "patient-stories4",
  },
  {
    id: "t5",
    name: "Patient Story 5",
    location: "Greater Noida",
    treatment: "IVF",
    quote: "Replace with this patient's real quote.",
    videoId: "patient-stories5",
  },
  {
    id: "t1",
    name: "Patient Story 1",
    location: "Noida",
    treatment: "IVF",
    quote: "Replace with this patient's real quote.",
    videoId: "patient-stories1",
  },
  {
    id: "t6",
    name: "Patient Story 6",
    location: "Noida",
    treatment: "Egg Donor IVF",
    quote: "Replace with this patient's real quote.",
    videoId: "patient-stories6",
  },
  {
    id: "t7",
    name: "Patient Story 7",
    location: "Delhi",
    treatment: "Pregnancy Care",
    quote: "Replace with this patient's real quote.",
    videoId: "patient-stories7",
  },
];

// Helper functions for paths
export const getVideoPath = (videoId: string): string => {
  return `/videos/reviews/${videoId}.mp4`;
};

export const getThumbnailPath = (videoId: string): string => {
  return `/images/reviews/${videoId}.jpeg`;
};