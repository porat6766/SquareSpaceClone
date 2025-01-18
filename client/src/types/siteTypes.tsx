export interface ISite {
  data: string;
  owner: string;
  screenShot?: string;
  name: string;
  domain: string;
  createdAt?: Date;
  updatedAt?: Date;
  save?: () => void;
}
