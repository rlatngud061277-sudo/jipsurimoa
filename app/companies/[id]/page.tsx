
import Link from "next/link";
import { notFound } from "next/navigation";
import { companies } from "../../data";

export function generateStaticParams() {
  return companies.map((company) => ({
    id: company.id,
  }));
}

export default async function CompanyDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const company = companies.find(
    (item) => item.id === id
  );

  if (!company) {
    notFound();
  }

  return (
    <main>
      <header className="header">
        <Link href="/" className="logo">
          🏠 집수리모아
        </Link>

        <Link href="/companies">
          업체 찾기
        </Link>
      </header>

      <section className="pageHero">
        <div className="container">
          <span className="heroBadge">
            집수리모아 등록 업체
          </span>

          <h1>{company.name}</h1>

          <p>{company.description}</p>
        </div>
      </section>

      <section className="section container">
        <div className="detailCard">
          <h2>업체 소개</h2>

          <p>{company.description}</p>

          <h3>서비스 지역</h3>

          <p>{company.regions.join(", ")}</p>

          <h3>전문 시공 분야</h3>

          <p>{company.services.join(", ")}</p>

          <h3>전화 문의</h3>

          <a
            href={`tel:${company.phone}`}
            className="primaryButton"
          >
            📞 {company.phone}
          </a>
        </div>
      </section>

      <section className="section container">
        <div className="sectionTitle">
          <h2>시공사례</h2>

          <p>
            업체에서 등록한 실제 시공사진입니다.
          </p>
        </div>

        <div className="photoGrid">
          {company.images.map((image, index) => (
            <img
              key={`${image}-${index}`}
              src={image}
              alt={`${company.name} 시공사례 ${index + 1}`}
              loading="lazy"
            />
          ))}
        </div>

        {company.images.length === 0 && (
          <div className="emptyBox">
            아직 등록된 시공사진이 없습니다.
          </div>
        )}
      </section>
    </main>
  );
}
