import "../style/globals.css";

export const metadata = {
  title: "Santi Rosmala",
  description: "Kumpulan Blog By Santi Rosmala",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
