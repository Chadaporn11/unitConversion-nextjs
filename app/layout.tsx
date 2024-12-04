import type { Metadata } from "next";
import "./globals.css";
const imgIcon = "https://cdn.prod.website-files.com/603c87adb15be3cb0b3ed9b5/670dce5f54f8d6e990f04d1a_064-min.png";
export const metadata: Metadata = {
  title: "Unit Conversion",
  icons: [
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '180x180',
      url: imgIcon,
    },
  ],
  description: "Unit Conversion App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="flex justify-center items-center bg-sky-700 kanit-light">
          <div className="flex flex-col items-center w-[90%] max-w-[600px] h-screen bg-stone-50 rounded-2xl shadow-md m-5 py-5 px-1">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
