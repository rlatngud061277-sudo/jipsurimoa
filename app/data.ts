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

/*
 * 기존 페이지와의 호환성을 위해 유지합니다.
 * 실제 승인 업체 목록은 Supabase에서 조회합니다.
 */
export const companies: Company[] = [];
