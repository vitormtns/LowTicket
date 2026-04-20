import { AccessDenied } from "@/components/layout/AccessDenied";
import { ContentGenerator } from "@/components/sections/ContentGenerator";

type AppPageProps = {
  searchParams: Promise<{
    token?: string | string[];
  }>;
};

export default async function AppPage({ searchParams }: AppPageProps) {
  const params = await searchParams;
  const token = Array.isArray(params.token) ? params.token[0] : params.token;

  if (!token) {
    return <AccessDenied />;
  }

  return <ContentGenerator />;
}
