import Link from "next/link";
import { Button } from "@/components/ui/button";

// 임시 블로그 포스트 데이터
const blogPosts = [
  {
    id: "1",
    title: "Next.js 15와 THREE.js로 3D 웹사이트 만들기",
    excerpt:
      "Next.js 15의 최신 기능과 THREE.js를 활용하여 인터랙티브한 3D 웹사이트를 구축하는 방법을 알아봅니다.",
    date: "2024-01-15",
    tags: ["Next.js", "THREE.js", "3D", "WebGL"],
  },
  {
    id: "2",
    title: "React Three Fiber로 3D 컴포넌트 개발하기",
    excerpt:
      "React Three Fiber를 사용하여 React 컴포넌트처럼 3D 객체를 관리하고 애니메이션을 구현하는 방법을 소개합니다.",
    date: "2024-01-10",
    tags: ["React", "Three.js", "3D", "Animation"],
  },
  {
    id: "3",
    title: "MDX로 블로그 시스템 구축하기",
    excerpt:
      "MDX를 활용하여 마크다운과 JSX를 결합한 강력한 블로그 시스템을 만드는 과정을 설명합니다.",
    date: "2024-01-05",
    tags: ["MDX", "Markdown", "Blog", "Next.js"],
  },
];

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center space-y-8 mb-16">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          블로그
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          개발 경험과 학습 내용을 공유하는 공간입니다.
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="space-y-8">
          {blogPosts.map(post => (
            <article
              key={post.id}
              className="border rounded-lg p-8 hover:shadow-lg transition-shadow"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <time className="text-sm text-muted-foreground">
                    {new Date(post.date).toLocaleDateString("ko-KR")}
                  </time>
                  <div className="flex gap-2">
                    {post.tags.map(tag => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <h2 className="text-2xl font-bold hover:text-primary transition-colors">
                  <Link href={`/blog/${post.id}`}>{post.title}</Link>
                </h2>

                <p className="text-muted-foreground leading-relaxed">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <Button variant="outline" asChild>
                    <Link href={`/blog/${post.id}`}>읽어보기</Link>
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">
            더 많은 포스트가 곧 추가될 예정입니다.
          </p>
          <Button variant="outline" asChild>
            <Link href="/admin">관리자 페이지</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
