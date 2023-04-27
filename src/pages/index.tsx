import AppHeader from "@/layout/app-header";
import ContactList from "@/components/ContactList";
import Login from '@/components/Login/Login';
import { useState } from "react";

export default function Index() {
  const [logedIn, setLogedIn] = useState(false)

  return (
    <html lang="en">
      <body>
        {logedIn 
        ? <Login></Login> 
        :(<div>
            <AppHeader></AppHeader>
            <ContactList></ContactList>
          </div>
         )
        }
      </body>
    </html>
  )
}
