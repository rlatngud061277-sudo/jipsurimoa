
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
  "종합 집수리",
  "싱크볼 리폼",
  "쿡탑 설치",
  "철거·원상복구",
  "벌목·조경",
  "욕실 수리",
  "전기·조명",
  "에어컨",
  "수전 교체",
  "펫도어 설치",
  "냉장고 철거",
  "기타 시공",
];

export const companies: Company[] = [
  // 실제 업체 등록 후 이곳에 추가합니다.
];
