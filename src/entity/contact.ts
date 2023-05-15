import { ContactData } from "@/entity/contact-data";

export interface Contact {
  uuid?: string;
  name: string;
  avatarUrl?: string;
  data: ContactData[];
}
