
"use client";

import { useState } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const services = [
    {
      title: "맞춤형 홈페이지 제작",
      desc: "업종과 사업 목적에 맞는 반응형 홈페이지를 제작합니다.",
      icon: "🌐",
    },
    {
      title: "검색엔진 최적화",
      desc: "네이버와 구글 검색엔진 등록 및 홈페이지 SEO 설정을 지원합니다.",
      icon: "🔍",
    },
    {
      title: "고객 전용 리포트",
      desc: "홈페이지 제작 진행 상황과 검색 노출 현황을 확인할 수 있습니다.",
      icon: "📊",
    },
    {
      title: "홈페이지 유지관리",
      desc: "홈페이지 수정 및 운영에 필요한 유지관리 서비스를 제공합니다.",
      icon: "🛠️",
    },
  ];

  return (
    <main>
      <header className="header">
        <div className="container nav">
          <a href="/" className="logo">
            집수리모아
          </a>

          <button
            className="menuButton"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>

          <nav className={menuOpen ? "menu open" : "menu"}>
            <a href="/">홈</a>
            <a href="#services">서비스 소개</a>
            <a href="#about">회사 소개</a>
            <a href="#contact">제작 문의</a>
            <a href="/login" className="loginButton">
              고객 로그인
            </a>
          </nav>
        </div>
      </header>

      <section className="hero">
        <div className="container">
          <span className="heroBadge">
            WEBSITE & SEO SOLUTION
          </span>

          <h1>
            우리 업체의 가치를 높이는
            <br />
            맞춤형 홈페이지 제작
          </h1>

          <p>
            집수리모아는 업체별 맞춤형 홈페이지 제작부터
            검색엔진 최적화, 고객 전용 리포트까지
            체계적인 웹사이트 관리 서비스를 제공합니다.
          </p>

          <div className="heroButtons">
            <a href="#contact" className="primaryButton">
              홈페이지 제작 문의
            </a>

            <a href="/login" className="secondaryButton">
              고객 리포트 확인
            </a>
          </div>
        </div>
      </section>

      <section id="services" className="section">
        <div className="container">
          <div className="sectionHeading">
            <span>OUR SERVICES</span>
            <h2>홈페이지 제작부터 운영까지</h2>
            <p>
              고객의 사업에 필요한 웹사이트 서비스를
              제공합니다.
            </p>
          </div>

          <div className="serviceGrid">
            {services.map((service) => (
              <div className="serviceCard" key={service.title}>
                <div className="serviceIcon">
                  {service.icon}
                </div>

                <h3>{service.title}</h3>
                <p>{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="about">
        <div className="container">
          <span>WHY JIPSURIMOA</span>

          <h2>홈페이지 제작 이후까지 생각합니다.</h2>

          <p>
            단순한 홈페이지 제작을 넘어 검색엔진 등록,
            운영 관리, 제작 현황 리포트까지
            고객이 확인할 수 있는 서비스를 지향합니다.
          </p>
        </div>
      </section>

      <section id="contact" className="section">
        <div className="container contact">
          <h2>홈페이지 제작이 필요하신가요?</h2>

          <p>
            업종과 필요한 기능을 알려주시면
            제작 방향을 함께 검토하겠습니다.
          </p>

          <a
            href="mailto:contact@example.com"
            className="primaryButton"
          >
            홈페이지 제작 문의
          </a>

          <small>
            문의 이메일은 실제 사업용 이메일로
            변경할 예정입니다.
          </small>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <h3>집수리모아</h3>

          <p>
            홈페이지 제작 · 검색엔진 최적화 · 유지관리
          </p>

          <p>
            © {new Date().getFullYear()} 집수리모아.
            All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
