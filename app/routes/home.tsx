import type { Route } from "./+types/home";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Resume Analyzer" },
    { name: "description", content: "AI Powered Resume Analyzer " },
  ];
}

export default function Home() {
  return <main>

  </main>
}
