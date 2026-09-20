
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(
    "https://www.xn--oy2b2ro2p4odlth.com"
  ),

  title: {
    default:
      "집수리모아 | 전국 집수리 업체 검색 및 업체 등록",
    template: "%s | 집수리모아",
  },

  description:
    "집수리모아에서 서울, 경기, 인천, 충남, 충북 등 전국 집수리 업체를 찾아보세요. 싱크볼 리폼, 쿡탑 설치, 철거, 벌목, 욕실 수리 등 다양한 시공업체를 검색할 수 있습니다.",

  keywords: [
    "집수리모아",
    "집수리 업체",
    "집수리 업체 찾기",
    "집수리 업체 등록",
    "서울 집수리",
    "경기 집수리",
    "인천 집수리",
    "싱크볼 리폼",
    "쿡탑 설치",
    "철거 업체",
    "벌목 업체",
  ],

  openGraph: {
    title: "집수리모아 | 우리 동네 집수리 전문가 찾기",
    description:
      "전국 집수리 업체 검색 및 업체 등록 플랫폼",
    url: "https://www.xn--oy2b2ro2p4odlth.com",
    siteName: "집수리모아",
    locale: "ko_KR",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },
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
