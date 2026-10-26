import Link from "next/link";
import { weeks } from "@/lib/data";
import { Heading, Panel } from "@/components/ui";
import History from "@/components/history";
export default function Weeks() {
  return (
    <>
      <Heading title="Weeks" description="Decisions, trades and results." />
      <Panel title="Weekly activity">
        {weeks().length ? <History weeks={weeks()} /> : <p className="empty">The first Wednesday cycle is scheduled. <Link href="/weeks/upcoming/">View schedule →</Link></p>}
      </Panel>
    </>
  );
}
