import {ContactData} from "@/entity/contact-data";
import {Link} from "@mui/material";

export default function ContactDataValue({data}: {data: ContactData}) {
  if (data.type === 'EMAIL') {
    return <Link href={`mailto:${data.value}`}>{data.value}</Link>
  }

  if (data.type === 'TELEPHONE') {
    return <Link href={`tel:${data.value}`}>{data.value}</Link>
  }

  return <span>{data.value}</span>
}