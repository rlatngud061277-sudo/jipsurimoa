export type Company = {
  id: string;
  name: string;
  description: string;
  phone: string;
  regions: string[];
  services: string[];
  images: string[];
};

export const regions = [
  "서울",
  "경기",
  "인천",
  "충남",
  "충북",
  "강원",
  "대전",
  "세종",
  "대구",
  "부산",
  "광주",
  "울산",
  "경북",
  "경남",
  "전북",
  "전남",
  "제주",
];

export const services = [
  "쿡탑 설치",
  "에어컨",
  "수전 교체",
];

export type PartnerCompany = Company & {
  website_url: string;
};

/*
 * 시공별 추천 업체 (데이터베이스와 상관없이 항상 표시)
 * - 쿡탑 설치 → 열정쿡탑
 * - 에어컨 · 수전 교체 → 고쳐줘 홈닥터
 */
export const partnerCompanies: PartnerCompany[] = [
  {
    id: "partner-yeoljeongcooktop",
    name: "열정쿡탑",
    description:
      "빌트인 쿡탑, 가스쿡탑, 인덕션, 가스레인지 교체와 주방 상판 타공을 전국에서 진행하는 쿡탑 전문 시공업체입니다.",
    phone: "010-9413-4686",
    regions: ["전국"],
    services: ["쿡탑 설치"],
    images: ["/IMG_2972.jpeg"],
    website_url: "https://www.yeoljeongcooktop.com",
  },
  {
    id: "partner-gochyeojwo",
    name: "고쳐줘 홈닥터",
    description:
      "에어컨 실외기 배선 테이핑·피복 보수와 주방·욕실 수전, 폭포수전 교체를 사진 견적으로 먼저 상담하는 집수리 출장 업체입니다.",
    phone: "010-9413-4686",
    regions: ["서울", "경기", "인천", "충남", "충북"],
    services: ["에어컨", "수전 교체"],
    images: ["/IMG_2756.jpeg"],
    website_url: "https://www.gochyeojwo.com",
  },
];

/*
 * 기존 페이지와의 호환성을 위해 유지합니다.
 * 실제 승인 업체 목록은 Supabase에서 조회합니다.
 */
export const companies: Company[] = [];
