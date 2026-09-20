
"use client";

import Link from "next/link";
import { useState } from "react";
import { companies, services, regions } from "./data";

/* =====================================
   시공 종류별 예시 사진
   나중에 직접 촬영한 사진으로 교체 가능
===================================== */

const serviceImages: Record<string, string> = {
  "종합 집수리":
    "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&auto=format&fit=crop&q=80",

  "싱크볼 리폼":
    "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=600&auto=format&fit=crop&q=80",

  "쿡탑 설치":
    "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=600&auto=format&fit=crop&q=80",

  "철거·원상복구":
    "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&auto=format&fit=crop&q=80",

  "벌목·조경":
    "https://images.unsplash.com/photo-1448375240586-882707db888b?w=600&auto=format&fit=crop&q=80",

  "욕실 수리":
    "https://images.unsplash.com/photo-1620626011761-996317b8d101?w=600&auto=format&fit=crop&q=80",

  "전기·조명":
    "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=600&auto=format&fit=crop&q=80",

  "에어컨":
    "https://images.unsplash.com/photo-1631545806609-6b35d97e2b6b?w=600&auto=format&fit=crop&q=80",

  "수전 교체":
    "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?w=600&auto=format&fit=crop&q=80",

  "펫도어 설치":
    "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=600&auto=format&fit=crop&q=80",

  "냉장고 철거":
    "https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?w=600&auto=format&fit=crop&q=80",

  "기타 시공":
    "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?w=600&auto=format&fit=crop&q=80",
};

/* =====================================
   메인 홈페이지
===================================== */

export default function Home() {
  const [region, setRegion] = useState("");
  const [service, setService] = useState("");
  const [keyword, setKeyword] = useState("");

  /* =====================================
     업체 검색
  ===================================== */

  const filtered = companies.filter((company) => {
    const matchRegion =
      !region || company.regions.includes(region);

    const matchService =
      !service || company.services.includes(service);

    const matchKeyword =
      !keyword ||
      `${company.name} ${company.description} ${company.services.join(
        " "
      )} ${company.regions.join(" ")}`
        .toLowerCase()
        .includes(keyword.toLowerCase());

    return matchRegion && matchService && matchKeyword;
  });

  function scrollToResults() {
    document
      .getElementById("results")
      ?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <main>
      {/* =====================================
          상단 메뉴
      ===================================== */}

      <header className="header">
        <Link href="/" className="logo">
          🏠 집수리모아
        </Link>

        <nav>
          <Link href="/companies">업체 찾기</Link>
          <Link href="/register">업체 등록</Link>
        </nav>
      </header>

      {/* =====================================
          메인 검색 화면
      ===================================== */}

      <section className="hero">
        <div className="container">
          <span className="heroBadge">
            전국 집수리 업체 검색 플랫폼
          </span>

          <h1>
            우리 동네 집수리 전문가를
            <br />
            쉽고 빠르게 찾아보세요!
          </h1>

          <p>
            지역과 시공 종류를 선택하면
            원하는 집수리 업체를 찾아볼 수 있습니다.
          </p>

          <div className="searchBox">
            <select
              value={region}
              onChange={(e) => setRegion(e.target.value)}
              aria-label="지역 선택"
            >
              <option value="">전체 지역</option>

              {regions.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>

            <select
              value={service}
              onChange={(e) => setService(e.target.value)}
              aria-label="시공 종류 선택"
            >
              <option value="">전체 시공 종류</option>

              {services.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>

            <input
              type="search"
              placeholder="업체명 또는 시공 키워드"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  scrollToResults();
                }
              }}
            />

            <button
              type="button"
              onClick={scrollToResults}
              className="primaryButton"
            >
              업체 검색하기
            </button>
          </div>
        </div>
      </section>

      {/* =====================================
          시공 종류별 사진 카테고리
      ===================================== */}

      <section className="section container">
        <div className="sectionTitle">
          <h2>어떤 시공이 필요하세요?</h2>

          <p>
            필요한 집수리 서비스를 선택해 보세요.
          </p>
        </div>

        <div className="serviceGrid">
          {services.map((item) => (
            <button
              type="button"
              key={item}
              className={
                service === item
                  ? "serviceCard selected"
                  : "serviceCard"
              }
              onClick={() => {
                setService(item);
                scrollToResults();
              }}
              style={{
                padding: 0,
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                background: "#ffffff",
              }}
            >
              <div
                style={{
                  width: "100%",
                  aspectRatio: "4 / 3",
                  overflow: "hidden",
                  background: "#eff6ff",
                }}
              >
                <img
                  src={serviceImages[item]}
                  alt={`${item} 시공 예시`}
                  loading="lazy"
                  style={{
                    width: "100%",
                    height: "100%",
                    display: "block",
                    objectFit: "cover",
                  }}
                />
              </div>

              <strong
                style={{
                  padding: "12px 5px",
                  color: "#1e3a8a",
                  fontSize: "13px",
                  textAlign: "center",
                  lineHeight: 1.4,
                }}
              >
                {item}
              </strong>
            </button>
          ))}
        </div>
      </section>

      {/* =====================================
          업체 검색 결과
      ===================================== */}

      <section
        id="results"
        className="section container"
      >
        <div className="sectionTitle">
          <h2>집수리 업체 둘러보기</h2>

          <p>
            검색 조건에 맞는 업체 {filtered.length}곳
          </p>
        </div>

        <div className="companyGrid">
          {filtered.map((company) => (
            <article
              className="companyCard"
              key={company.id}
            >
              <div className="companyImage">
                {company.images.length > 0 ? (
                  <img
                    src={company.images[0]}
                    alt={`${company.name} 시공사례`}
                    loading="lazy"
                  />
                ) : (
                  <span aria-hidden="true">🏠</span>
                )}
              </div>

              <div className="companyContent">
                <span className="companyBadge">
                  등록 업체
                </span>

                <h3>{company.name}</h3>

                <p>{company.description}</p>

                <div className="companyInfo">
                  <span>
                    📍 {company.regions.join(", ")}
                  </span>

                  <span>
                    🛠️ {company.services.join(", ")}
                  </span>
                </div>

                <div className="companyActions">
                  <Link
                    href={`/companies/${company.id}`}
                    className="outlineButton"
                  >
                    상세보기
                  </Link>

                  <a
                    href={`tel:${company.phone}`}
                    className="primaryButton"
                  >
                    📞 전화 문의
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="emptyBox">
            검색 조건에 맞는 등록 업체가 없습니다.
          </div>
        )}
      </section>

      {/* =====================================
          업체 등록 안내
      ===================================== */}

      <section className="registerBanner">
        <div className="container">
          <h2>
            집수리 업체를 운영하고 계신가요?
          </h2>

          <p>
            집수리모아에 업체를 등록하고
            고객에게 시공 서비스를 소개해 보세요.
          </p>

          <Link
            href="/register"
            className="whiteButton"
          >
            업체 등록 신청하기
          </Link>
        </div>
      </section>

      {/* =====================================
          하단 정보
      ===================================== */}

      <footer className="footer">
        <div className="container">
          <strong>집수리모아</strong>

          <p>
            전국 집수리 업체 검색 및 연결 플랫폼
          </p>

          <small>
            © 2026 집수리모아.
            All rights reserved.
          </small>
        </div>
      </footer>
    </main>
  );
}
