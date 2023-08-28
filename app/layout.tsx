export default function RootLayout({
  children,
  intercept,
}: {
  children: React.ReactNode;
  intercept: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
        {intercept}
      </body>
    </html>
  );
}
