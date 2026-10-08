export const socials = {
  youtube: "https://www.youtube.com/@mailBasicthinks",
  instagram: "https://www.instagram.com/basicthinksofficial/?hl=en",
  tiktok: "https://www.tiktok.com/@basic_thinks",
} as const;

export type SocialKey = keyof typeof socials;
