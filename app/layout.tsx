
import type { Metadata } from "next";
import type { ReactNode } from "react";

/* =====================================
   이지종합건설 홈페이지 기본 정보
===================================== */

const SITE_URL = "https://easyhomecare.vercel.app";

const SITE_NAME = "이지종합건설";

const SITE_TITLE =
  "이지종합건설 | 서울 경기 인천 충남 충북 벌목 전문업체";

/* =====================================
   네이버 페이지 설명
   80자 이내로 작성
===================================== */

const SITE_DESCRIPTION =
  "이지종합건설은 서울 경기 인천 충남 충북 지역의 벌목 전문업체입니다. 위험목 제거, 고목 제거, 주택 주변 벌목 및 임야 벌목 상담을 진행합니다.";

/* =====================================
   Open Graph 설명
   80자 이내로 작성
===================================== */

const OG_DESCRIPTION =
  "이지종합건설 벌목 전문업체. 서울 경기 인천 충남 충북 지역의 위험목 제거, 고목 제거, 주택 주변 벌목 및 대형 수목 벌목 상담을 진행합니다.";

/* =====================================
   대표 이미지
===================================== */

const MAIN_IMAGE =
  "/F43681CE-3D8F-416F-AF29-CE59813364F8.png";

/* =====================================
   검색엔진 메타데이터
===================================== */

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: SITE_TITLE,
    template: `%s | ${SITE_NAME}`,
  },

  description: SITE_DESCRIPTION,

  applicationName: SITE_NAME,

  keywords: [
    "이지종합건설",
    "벌목",
    "벌목업체",
    "벌목전문업체",
    "서울벌목",
    "경기벌목",
    "인천벌목",
    "충남벌목",
    "충북벌목",
    "수원벌목",
    "분당벌목",
    "성남벌목",
    "용인벌목",
    "화성벌목",
    "평택벌목",
    "천안벌목",
    "아산벌목",
    "청주벌목",
    "위험목제거",
    "고목제거",
    "대형수목벌목",
    "주택벌목",
    "임야벌목",
    "나무제거",
  ],

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
    },
  },

  /* =====================================
     Open Graph 검색 및 공유 설정
  ===================================== */

  openGraph: {
    type: "website",

    locale: "ko_KR",

    url: SITE_URL,

    siteName: SITE_NAME,

    title: SITE_TITLE,

    description: OG_DESCRIPTION,

    images: [
      {
        url: MAIN_IMAGE,

        width: 1200,

        height: 630,

        alt: "이지종합건설 벌목 전문업체",
      },
    ],
  },

  /* =====================================
     네이버 사이트 소유 확인
  ===================================== */

  verification: {
    other: {
      "naver-site-verification":
        "51448ea603b683f1fdb4f199f7f7afd4dfdd8950",
    },
  },
};

/* =====================================
   홈페이지 기본 레이아웃
===================================== */

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        style={{
          margin: 0,
          padding: 0,
        }}
      >
        {children}
      </body>
    </html>
  );
}
