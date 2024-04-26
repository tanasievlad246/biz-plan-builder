import { PlanBuilder } from "@/components/PlanBuilder";
import { PlanRender } from "@/components/PlanRender";

export default function Home() {
  return (
    <main className="flex h-screen flex-col items-center justify-between p-12">
      <div className="flex flex-row justify-between h-5/6 w-full">
        <PlanBuilder />
        <div className="divider divider-horizontal"></div>
        <PlanRender />
      </div>
    </main>
  );
}
