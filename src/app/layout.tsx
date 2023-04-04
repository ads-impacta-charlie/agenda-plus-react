import AppHeader from "@/app/layout/app-header";

export const metadata = {
  title: 'Agenda+',
  description: 'Agenda+',
}

export default function RootLayout({children}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <AppHeader>{children}</AppHeader>
      </body>
    </html>
  )
}
