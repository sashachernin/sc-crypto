import { operations } from "@/lib/data";
import { Heading, Panel, Badge } from "@/components/ui";
export default function OperationsPage() {
  const o = operations();
  return (
    <>
      <Heading
        title="Status"
        action={<Badge status={o.paused ? "PAUSED" : "ACTIVE"} />}
      />
      <Panel title="Weekly schedule">
        <div className="account-line">
          <strong>Wednesday · 9:35 am ET</strong>
          <span>Sell → review → learn → research → buy</span>
        </div>
        <div className="account-line">
          <strong>Every day · 12:45 pm ET</strong>
          <span>Portfolio valuation, including weekends</span>
        </div>
      </Panel>
      <Panel title="Recent activity">
        {o.audit.length ? (
          [...o.audit].reverse().map((a, i) => (
            <div className="account-line" key={i}>
              <span>
                {a.action === "replace-failed-open-once"
                  ? "Wednesday opening replaced"
                  : a.action.replaceAll("-", " ")}
              </span>
              <small>
                {new Date(a.created_at).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  timeZone: "America/New_York",
                })}
              </small>
            </div>
          ))
        ) : (
          <p className="empty">No updates yet.</p>
        )}
      </Panel>
      {!!o.incidents.length && (
        <details className="panel">
          <summary>Earlier issues ({o.incidents.length})</summary>
          {o.incidents.map((i) => (
            <p key={i.id}>{i.summary}</p>
          ))}
        </details>
      )}
      <p className="freshness">
        Status at the last update; not a live service monitor.
      </p>
    </>
  );
}
