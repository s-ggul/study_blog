import { Button } from "@/components/ui/button";
import Link from "next/link";

const projects = [
  {
    title: "Study Blog & 3D Gallery",
    description: "Next.js 15와 THREE.js를 활용한 블로그 겸 3D 미술관 웹사이트",
    technologies: [
      "Next.js",
      "THREE.js",
      "React Three Fiber",
      "Tailwind CSS",
      "TypeScript",
    ],
    features: [
      "MDX 기반 블로그 시스템",
      "인터랙티브 3D 갤러리",
      "관리자 포스트 작성/수정 기능",
      "반응형 디자인",
      "Vercel 배포",
    ],
    github: "#",
    demo: "#",
  },
  {
    title: "React Three Fiber 프로젝트",
    description: "React Three Fiber를 활용한 다양한 3D 인터랙션 구현",
    technologies: ["React", "Three.js", "React Three Fiber", "Framer Motion"],
    features: [
      "3D 모델 로딩 및 렌더링",
      "실시간 애니메이션",
      "사용자 인터랙션 처리",
      "성능 최적화",
    ],
    github: "#",
    demo: "#",
  },
];

const skills = [
  {
    category: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    category: "3D Graphics",
    items: ["THREE.js", "React Three Fiber", "WebGL", "Blender"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "MongoDB", "PostgreSQL"],
  },
  { category: "Tools", items: ["Git", "Docker", "Vercel", "Figma"] },
];

export default function PortfolioPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center space-y-8 mb-16">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          포트폴리오
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          개발 경험과 프로젝트를 소개합니다.
        </p>
      </div>

      <div className="max-w-6xl mx-auto space-y-16">
        {/* 소개 섹션 */}
        <div className="text-center space-y-6">
          <div className="w-32 h-32 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
            <span className="text-6xl">👨‍💻</span>
          </div>
          <h2 className="text-3xl font-bold">개발자 소개</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            프론트엔드 개발과 3D 그래픽스에 관심이 많은 개발자입니다. 사용자
            경험을 중시하며, 최신 기술을 활용한 인터랙티브한 웹 애플리케이션을
            만드는 것을 좋아합니다.
          </p>
        </div>

        {/* 프로젝트 섹션 */}
        <div>
          <h2 className="text-3xl font-bold text-center mb-12">
            주요 프로젝트
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="border rounded-lg p-8 hover:shadow-lg transition-shadow"
              >
                <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                <p className="text-muted-foreground mb-6">
                  {project.description}
                </p>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">기술 스택</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map(tech => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">주요 기능</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                      {project.features.map(feature => (
                        <li key={feature}>{feature}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex gap-4 pt-4">
                    <Button variant="outline" asChild>
                      <Link href={project.github}>GitHub</Link>
                    </Button>
                    <Button asChild>
                      <Link href={project.demo}>데모 보기</Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 기술 스택 섹션 */}
        <div>
          <h2 className="text-3xl font-bold text-center mb-12">기술 스택</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map(skill => (
              <div key={skill.category} className="text-center space-y-4">
                <h3 className="text-xl font-semibold">{skill.category}</h3>
                <div className="space-y-2">
                  {skill.items.map(item => (
                    <div
                      key={item}
                      className="px-4 py-2 bg-secondary text-secondary-foreground rounded-lg text-sm"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 연락처 섹션 */}
        <div className="text-center space-y-6">
          <h2 className="text-3xl font-bold">연락처</h2>
          <p className="text-lg text-muted-foreground">
            프로젝트 협업이나 문의사항이 있으시면 언제든 연락해주세요.
          </p>
          <div className="flex justify-center gap-4">
            <Button variant="outline" asChild>
              <Link href="mailto:your-email@example.com">이메일</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="https://github.com/your-username">GitHub</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="https://linkedin.com/in/your-profile">LinkedIn</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
