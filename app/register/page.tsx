
"use client";

import Link from "next/link";
import { useState } from "react";
import { regions, services } from "../data";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [owner, setOwner] = useState("");
  const [phone, setPhone] = useState("");
  const [description, setDescription] = useState("");

  const [selectedRegions, setSelectedRegions] =
    useState<string[]>([]);

  const [selectedServices, setSelectedServices] =
    useState<string[]>([]);

  const [photos, setPhotos] =
    useState<File[]>([]);

  const [preview, setPreview] = useState(false);

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

  function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    if (
      selectedRegions.length === 0 ||
      selectedServices.length === 0
    ) {
      alert("서비스 지역과 시공 분야를 선택해 주세요.");
      return;
    }

    setPreview(true);
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
          <h1>집수리 업체 등록</h1>

          <p>
            집수리모아에 업체를 소개하고
            고객에게 시공 서비스를 알려보세요.
          </p>
        </div>
      </section>

      <section className="section container">
        <div className="registerCard">
          {preview ? (
            <div className="formGroup">
              <h2>등록 신청 내용 확인</h2>

              <p>
                아래 내용은 아직 서버에
                제출되거나 저장되지 않았습니다.
              </p>

              <p><strong>업체명:</strong> {name}</p>
              <p><strong>대표자:</strong> {owner}</p>
              <p><strong>연락처:</strong> {phone}</p>

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

              <p>
                <strong>선택한 사진:</strong>{" "}
                {photos.length}장
              </p>

              <button
                type="button"
                className="primaryButton"
                onClick={() => setPreview(false)}
              >
                입력 내용 수정하기
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
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
                <label htmlFor="photos">
                  시공사례 사진
                </label>

                <input
                  id="photos"
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={(e) =>
                    setPhotos(
                      Array.from(e.target.files || [])
                    )
                  }
                />

                <p className="formHint">
                  선택한 사진은 현재 기기에서만
                  확인되며 서버에 업로드되지 않습니다.
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
