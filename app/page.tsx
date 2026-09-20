
"use client";

import Link from "next/link";
import { useState } from "react";
import { companies, services, regions } from "./data";

export default function Home() {
  const [region, setRegion] = useState("");
  const [service, setService] = useState("");
  const [keyword, setKeyword] = useState("");

  const filtered = companies.filter((company) => {
    const matchRegion =
      !region || company.regions.includes(region);

    const matchService =
      !service || company.services.includes(service);

    const matchKeyword =
      !keyword ||
      `${company.name} ${company.description} ${company.services.join(" ")} ${company.regions.join(" ")}`
        .toLowerCase()
        .includes(keyword.toLowerCase());

    return matchRegion && matchService && matchKeyword;
  });

  return (
    <main>
      <header className="header">
        <Link href="/" className="logo">
          🏠 집수리모아
        </Link>

        <nav>
          <Link href="/companies">업체 찾기</Link>
          <Link href="/register">업체 등록</Link>
        </nav>
      </header>

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
            />

            <a href="#results" className="primaryButton">
              업체 검색하기
            </a>
          </div>
        </div>
      </section>

      <section className="section container">
        <div className="sectionTitle">
          <h2>어떤 시공이 필요하세요?</h2>
          <p>필요한 집수리 서비스를 선택해 보세요.</p>
        </div>

        <div className="serviceGrid">
          {services.map((item) => (
            <button
              key={item}
              className={
                service === item
                  ? "serviceCard selected"
                  : "serviceCard"
              }
              onClick={() => {
                setService(item);
                document
                  .getElementById("results")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <span>🔧</span>
              <strong>{item}</strong>
            </button>
          ))}
        </div>
      </section>

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
                  />
                ) : (
                  <span>🏠</span>
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
                    🔧 {company.services.join(", ")}
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
                    전화 문의
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

      <section className="registerBanner">
        <div className="container">
          <h2>집수리 업체를 운영하고 계신가요?</h2>

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
