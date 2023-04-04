import {ContactData} from "@/app/entity/contact-data";

export interface Contact {
  uuid?: string
  name: string
  data: ContactData[]
}
