"use client";

import Link from "next/link";
import { useState } from "react";
import { regions, services } from "../data";

type ApplicationData = {
  name: string;
  owner: string;
  phone: string;
  description: string;
  regions: string[];
  services: string[];
  images: string[];
  status: string;
};

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [owner, setOwner] = useState("");
  const [phone, setPhone] = useState("");
  const [description, setDescription] = useState("");

  const [selectedRegions, setSelectedRegions] = useState<string[]>([]);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  const [preview, setPreview] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  function toggle(
    value: string,
    selected: string[],
    setter: (items: string[]) => void
  ) {
    setter(
      selected.includes(value)
        ? selected.filter((item) => item !== value)
        : [...selected, value]
    );
  }

  function handlePreview(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!name.trim() || !owner.trim() || !phone.trim() || !description.trim()) {
      alert("필수 정보를 모두 입력해 주세요.");
      return;
    }

    if (selectedRegions.length === 0 || selectedServices.length === 0) {
      alert("서비스 지역과 시공 분야를 선택해 주세요.");
      return;
    }

    setErrorMessage("");
    setPreview(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  async function handleFinalSubmit() {
    if (submitting || submitted) return;

    setSubmitting(true);
    setErrorMessage("");

    try {
      const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
      const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

      if (!supabaseUrl || !supabaseAnonKey) {
        throw new Error(
          "Supabase 연결 정보가 없습니다. Vercel 환경변수를 확인해 주세요."
        );
      }

      const application: ApplicationData = {
        name: name.trim(),
        owner: owner.trim(),
        phone: phone.trim(),
        description: description.trim(),
        regions: selectedRegions,
        services: selectedServices,
        images: [],
        status: "pending",
      };

      const response = await fetch(
        `${supabaseUrl.replace(/\/$/, "")}/rest/v1/company_applications`,
        {
          method: "POST",
          headers: {
            apikey: supabaseAnonKey,
            Authorization: `Bearer ${supabaseAnonKey}`,
            "Content-Type": "application/json",
            Prefer: "return=minimal",
          },
          body: JSON.stringify(application),
        }
      );

      if (!response.ok) {
        const errorText = await response.text();

        console.error("업체 등록 신청 오류:", response.status, errorText);

        throw new Error(
          `신청 저장에 실패했습니다. (오류 코드: ${response.status})`
        );
      }

      setSubmitted(true);
      setPreview(false);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (error) {
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "신청 중 오류가 발생했습니다. 다시 시도해 주세요."
      );
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <main>
      <header className="header">
        <Link href="/" className="logo">
          🏠 집수리모아
        </Link>

        <Link href="/companies">업체 찾기</Link>
      </header>

      <section className="pageHero">
        <div className="container">
          <h1>집수리 업체 등록</h1>

          <p>
            집수리모아에 업체를 소개하고
            고객에게 시공 서비스를 알려보세요.
          </p>
        </div>
      </section>

      <section className="section container">
        <div className="registerCard">
          {submitted ? (
            <div className="formGroup">
              <h2>등록 신청이 접수되었습니다! 🎉</h2>

              <p>
                업체 등록 신청이 정상적으로 저장되었습니다.
                신청 내용을 확인한 뒤 등록 여부를 안내해 드리겠습니다.
              </p>

              <p>
                <strong>업체명:</strong> {name}
              </p>

              <p>
                <strong>연락처:</strong> {phone}
              </p>

              <p>
                ※ 신청서를 제출했다고 해서 업체 목록에
                즉시 공개되는 것은 아닙니다.
              </p>

              <Link href="/" className="primaryButton">
                홈페이지로 돌아가기
              </Link>
            </div>
          ) : preview ? (
            <div className="formGroup">
              <h2>등록 신청 내용 확인</h2>

              <p>
                아래 내용을 확인한 후 등록 신청을 제출해 주세요.
              </p>

              <p>
                <strong>업체명:</strong> {name}
              </p>

              <p>
                <strong>대표자:</strong> {owner}
              </p>

              <p>
                <strong>연락처:</strong> {phone}
              </p>

              <p>
                <strong>지역:</strong>{" "}
                {selectedRegions.join(", ")}
              </p>

              <p>
                <strong>시공 분야:</strong>{" "}
                {selectedServices.join(", ")}
              </p>

              <p>
                <strong>소개:</strong> {description}
              </p>

              <p className="formHint">
                시공사례 사진은 현재 신청 단계에서
                업로드되지 않습니다.
              </p>

              {errorMessage && (
                <p
                  role="alert"
                  style={{
                    color: "#b91c1c",
                    background: "#fef2f2",
                    padding: "12px",
                    borderRadius: "8px",
                  }}
                >
                  {errorMessage}
                </p>
              )}

              <button
                type="button"
                className="primaryButton fullButton"
                onClick={handleFinalSubmit}
                disabled={submitting}
              >
                {submitting
                  ? "신청서 제출 중..."
                  : "등록 신청 제출하기"}
              </button>

              <button
                type="button"
                className="outlineButton"
                onClick={() => {
                  setErrorMessage("");
                  setPreview(false);
                }}
                disabled={submitting}
                style={{ marginTop: "12px" }}
              >
                입력 내용 수정하기
              </button>
            </div>
          ) : (
            <form onSubmit={handlePreview}>
              <h2>업체 기본정보</h2>

              <div className="formGroup">
                <label htmlFor="companyName">
                  업체명 *
                </label>

                <input
                  id="companyName"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="업체명을 입력하세요"
                />
              </div>

              <div className="formGroup">
                <label htmlFor="ownerName">
                  대표자명 *
                </label>

                <input
                  id="ownerName"
                  required
                  value={owner}
                  onChange={(e) => setOwner(e.target.value)}
                  placeholder="대표자명"
                />
              </div>

              <div className="formGroup">
                <label htmlFor="companyPhone">
                  연락처 *
                </label>

                <input
                  id="companyPhone"
                  required
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="010-0000-0000"
                />
              </div>

              <div className="formGroup">
                <label>서비스 지역 *</label>

                <div className="checkGrid">
                  {regions.map((region) => (
                    <label key={region}>
                      <input
                        type="checkbox"
                        checked={selectedRegions.includes(region)}
                        onChange={() =>
                          toggle(
                            region,
                            selectedRegions,
                            setSelectedRegions
                          )
                        }
                      />

                      {region}
                    </label>
                  ))}
                </div>
              </div>

              <div className="formGroup">
                <label>전문 시공 분야 *</label>

                <div className="checkGrid">
                  {services.map((service) => (
                    <label key={service}>
                      <input
                        type="checkbox"
                        checked={selectedServices.includes(service)}
                        onChange={() =>
                          toggle(
                            service,
                            selectedServices,
                            setSelectedServices
                          )
                        }
                      />

                      {service}
                    </label>
                  ))}
                </div>
              </div>

              <div className="formGroup">
                <label htmlFor="description">
                  업체 소개 *
                </label>

                <textarea
                  id="description"
                  required
                  rows={5}
                  value={description}
                  onChange={(e) =>
                    setDescription(e.target.value)
                  }
                  placeholder="업체의 전문 분야와 시공 서비스를 소개해 주세요."
                />
              </div>

              <div className="formGroup">
                <label>시공사례 사진</label>

                <p className="formHint">
                  사진 업로드 기능은 준비 중입니다.
                  현재는 업체 기본정보만 등록 신청할 수 있습니다.
                </p>
              </div>

              <button
                type="submit"
                className="primaryButton fullButton"
              >
                등록 신청 내용 확인하기
              </button>
            </form>
          )}
        </div>
      </section>
    </main>
  );
}
