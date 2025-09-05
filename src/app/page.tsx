import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center space-y-8">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Study Blog & 3D Gallery
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            블로그 글과 3D 작품을 함께 전시하는 포트폴리오 공간입니다. 개발
            경험과 창작 작품을 공유합니다.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg">
            <Link href="/blog">블로그 보기</Link>
          </Button>
          <Button variant="outline" asChild size="lg">
            <Link href="/gallery">3D 미술관</Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
              <span className="text-2xl">📝</span>
            </div>
            <h3 className="text-xl font-semibold">블로그</h3>
            <p className="text-muted-foreground">
              개발 경험과 학습 내용을 마크다운으로 작성합니다.
            </p>
          </div>

          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
              <span className="text-2xl">🎨</span>
            </div>
            <h3 className="text-xl font-semibold">3D 미술관</h3>
            <p className="text-muted-foreground">
              THREE.js로 만든 3D 작품들을 인터랙티브하게 감상할 수 있습니다.
            </p>
          </div>

          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
              <span className="text-2xl">💼</span>
            </div>
            <h3 className="text-xl font-semibold">포트폴리오</h3>
            <p className="text-muted-foreground">
              프로젝트 경험과 기술 스택을 정리한 포트폴리오입니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
