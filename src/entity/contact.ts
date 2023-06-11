import { ContactData } from "@/entity/contact-data";

export interface Contact {
  uuid?: string;
  name: string;
  avatarUrl?: string;
  favorite?: boolean;
  data: ContactData[];
}
