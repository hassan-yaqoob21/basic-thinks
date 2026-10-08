export const socials = {
  youtube: "https://www.youtube.com/@mailBasicthinks",
  instagram: "https://www.instagram.com/basicthinksofficial/?hl=en",
  tiktok: "https://www.tiktok.com/@basic_thinks",
  linkedin: "https://www.linkedin.com/company/basic-thinks",
  github: "https://github.com/basicthinks",
} as const;

export type SocialKey = keyof typeof socials;
