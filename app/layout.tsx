
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "집수리모아 | 홈페이지 제작 및 고객 리포트",
  description:
    "집수리모아는 맞춤형 홈페이지 제작, 검색엔진 최적화, 고객 전용 리포트 및 홈페이지 유지관리 서비스를 제공합니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
