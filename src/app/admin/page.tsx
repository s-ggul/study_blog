"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function AdminPage() {
  const [posts, setPosts] = useState([
    {
      id: "1",
      title: "Next.js 15와 THREE.js로 3D 웹사이트 만들기",
      content: `# Next.js 15와 THREE.js로 3D 웹사이트 만들기

이 글에서는 Next.js 15의 최신 기능과 THREE.js를 활용하여 인터랙티브한 3D 웹사이트를 구축하는 방법을 알아봅니다.

## 필요한 라이브러리

- Next.js 15
- THREE.js
- React Three Fiber
- React Three Drei

## 기본 설정

\`\`\`bash
npm install three @react-three/fiber @react-three/drei
\`\`\`

## 3D 컴포넌트 만들기

\`\`\`tsx
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

function Scene() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <mesh>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="blue" />
      </mesh>
    </>
  );
}

export default function Gallery3D() {
  return (
    <Canvas>
      <Scene />
      <OrbitControls />
    </Canvas>
  );
}
\`\`\`

이렇게 간단하게 3D 웹사이트를 만들 수 있습니다!`,
      date: "2024-01-15",
      tags: ["Next.js", "THREE.js", "3D", "WebGL"],
    },
  ]);

  const [newPost, setNewPost] = useState({
    title: "",
    content: "",
    tags: "",
  });

  const handleCreatePost = () => {
    if (!newPost.title || !newPost.content) return;

    const post = {
      id: Date.now().toString(),
      title: newPost.title,
      content: newPost.content,
      date: new Date().toISOString().split("T")[0],
      tags: newPost.tags
        .split(",")
        .map(tag => tag.trim())
        .filter(Boolean),
    };

    setPosts([post, ...posts]);
    setNewPost({ title: "", content: "", tags: "" });
  };

  const handleDeletePost = (id: string) => {
    setPosts(posts.filter(post => post.id !== id));
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center space-y-8 mb-16">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          관리자 페이지
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          블로그 포스트를 작성하고 관리할 수 있습니다.
        </p>
      </div>

      <div className="max-w-4xl mx-auto space-y-16">
        {/* 새 포스트 작성 */}
        <div className="border rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-6">새 포스트 작성</h2>

          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">제목</label>
              <input
                type="text"
                value={newPost.title}
                onChange={e =>
                  setNewPost({ ...newPost, title: e.target.value })
                }
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="포스트 제목을 입력하세요"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                태그 (쉼표로 구분)
              </label>
              <input
                type="text"
                value={newPost.tags}
                onChange={e => setNewPost({ ...newPost, tags: e.target.value })}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Next.js, React, JavaScript"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                내용 (Markdown)
              </label>
              <textarea
                value={newPost.content}
                onChange={e =>
                  setNewPost({ ...newPost, content: e.target.value })
                }
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary h-64"
                placeholder="Markdown 형식으로 내용을 작성하세요..."
              />
            </div>

            <Button onClick={handleCreatePost} className="w-full">
              포스트 생성
            </Button>
          </div>
        </div>

        {/* 기존 포스트 목록 */}
        <div className="border rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-6">기존 포스트</h2>

          <div className="space-y-6">
            {posts.map(post => (
              <div key={post.id} className="border rounded-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold">{post.title}</h3>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        // TODO: 수정 기능 구현
                        alert("수정 기능은 추후 구현 예정");
                      }}
                    >
                      수정
                    </Button>
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={() => handleDeletePost(post.id)}
                    >
                      삭제
                    </Button>
                  </div>
                </div>

                <div className="flex items-center gap-4 mb-4">
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

                <div className="prose max-w-none">
                  <pre className="whitespace-pre-wrap text-sm text-muted-foreground">
                    {post.content.substring(0, 200)}...
                  </pre>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
