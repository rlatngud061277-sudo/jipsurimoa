
"use client";

import Link from "next/link";
import { useState } from "react";
import { companies, regions, services } from "../data";

export default function CompaniesPage() {
  const [region, setRegion] = useState("");
  const [service, setService] = useState("");

  const results = companies.filter((company) => {
    return (
      (!region || company.regions.includes(region)) &&
      (!service || company.services.includes(service))
    );
  });

  return (
    <main>
      <header className="header">
        <Link href="/" className="logo">
          🏠 집수리모아
        </Link>

        <Link href="/register">업체 등록</Link>
      </header>

      <section className="pageHero">
        <div className="container">
          <h1>집수리 업체 찾기</h1>
          <p>
            지역과 시공 종류를 선택해
            원하는 업체를 검색하세요.
          </p>
        </div>
      </section>

      <section className="section container">
        <div className="filterBox">
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
            <option value="">전체 시공</option>

            {services.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>

        <h2>검색 결과 {results.length}곳</h2>

        <div className="companyGrid">
          {results.map((company) => (
            <article
              className="companyCard"
              key={company.id}
            >
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
                    className="primaryButton"
                  >
                    업체 상세보기
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {results.length === 0 && (
          <div className="emptyBox">
            조건에 맞는 등록 업체가 없습니다.
          </div>
        )}
      </section>
    </main>
  );
}
