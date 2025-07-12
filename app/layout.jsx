import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="relative mx-auto my-10 flex max-w-7xl flex-col items-center justify-center">
        {children}
      </body>
    </html>
  );
}